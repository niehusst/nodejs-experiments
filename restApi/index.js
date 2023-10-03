const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const Article = new mongoose.model('Article', {
	title: String,
	content: String,
});

app.use(bodyParser.urlencoded({
	extended: true,
}));
app.use(express.static('public'));

app.route('/articles')
	.get(async (req, res) => {
		const articles = await Article.find();
		res.send(articles);
	})
	.post(async (req, res) => {
		await (new Article(req.body)).save();
		res.sendStatus(201);
	})
	.delete(async (req, res) => {
		await Article.deleteMany();
		res.sendStatus(200);
    });

app.route('/articles/:articleTitle')
	.get(async (req, res) => {
		const article = await Article.findOne({ title: req.params.articleTitle });
		if (!article) { res.sendStatus(404); }
		res.send(article);
	})
	.put(async (req, res) => {
		await Article.findOneAndUpdate(
			{ title: req.params.articleTitle }, 
			req.body, 
			{ overwrite: true }
		);
		res.sendStatus(204);
	})
	.patch(async (req, res) => {
		await Article.updateOne(
			{ title: req.params.articleTitle }, 
			{ $set: req.body }, 
		);
		res.sendStatus(204);
	})
	.delete(async (req, res) => {
		await Article.deleteOne({ title: req.params.articleTitle });
		res.sendStatus(204);
	});

app.listen(3000, async () => {
	await mongoose.connect('mongodb://localhost:27017/wikiDB');

	console.log('Listening on poprt 3000')
});
