const mongoose = require('mongoose');

exports.createDb = async function() {
	await mongoose.connect('mongodb://localhost:27017/blogDB');
};

exports.createPostModel = function() {
	const postSchema = new mongoose.Schema({
		title: String,
		body: String,
	});

	const Post = new mongoose.model('Post', postSchema);
	return Post;
};
