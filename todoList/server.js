const express = require("express");
const _ = require('lodash');
const bodyParser = require("body-parser");
const date = require(__dirname + "/date");
const db = require(__dirname + "/db/db");

const app = express();

app.set("view engine", "ejs"); // templating funnnn
app.use(bodyParser.urlencoded({extended: true})); // get req.body as json obj
app.use(express.static("static")); // serve static files

let Item;
let itemSchema;
let List;
let listSchema;

app.get("/", async (req, res) => {
	const day = date.getDay();

	const items = await db.listAll(Item);

	// IMPORTANT: render function from ejs always looks for the given filename in a views folder
	res.render("list", {listName: null, kindOfDay: day, items: items});
});

app.post("/", async (req, res) => {
	const item = await db.createNew(Item, {
		name: req.body.newItem
	});
	const listName = _.capitalize(req.body.listName);

	if (listName !== '__null__') {
		// add to custom list
		console.log(`adding item ${item.name} to list ${listName}`);
		const list = await db.findMatching(List, { name: listName});
		list.items.push(item);
		await list.save();
	} else {
		// default list
		await item.save();
	}
	res.redirect(`/${listName && listName !== '__null__' ? listName : ''}`);
});

app.post('/delete', async (req, res) => {
	const id = req.body.checkbox;
	const listName = _.capitalize(req.body.listName);
	console.log(`deleting id ${id} from list ${listName}`);

	if (listName === '__null__') {
		await db.deleteById(Item, id);
	} else {
		await db.deleteByIdFrom(List, listName, id);
	}
	res.redirect(`/${listName && listName !== '__null__' ? listName : ''}`);
});

app.get('/:listName', async (req, res) => {
	const listName = _.capitalize(req.params.listName);

	const list = await db.findMatching(List, { name: listName });
	if (list) {
		// show existing list
		res.render('list', {kindOfDay: date.getDay(), listName: list.name, items: list.items});
		return;
	}

	const newlist = await db.createNew(List, {
		name: listName,
		items: []
	});
	await newlist.save();

	res.redirect(`/${listName}`);
});

app.listen(3000, async () => {
	await db.createDb();
	itemSchema = db.createItemSchema();
	Item = await db.createModel('Item', itemSchema);
	listSchema = db.createListSchema(itemSchema);
	List = await db.createModel('List', listSchema);
	console.log("listening on 3000");
});
