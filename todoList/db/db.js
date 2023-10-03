const mongoose = require('mongoose')

module.exports.createDb = async function() {
	// localhost addr for locally running db:
	// mongodb://localhost:27017/todolistDB

	// currently using mongodb atlas hosted db
	await mongoose.connect('mongodb+srv://admin-best:bestpassword@cluster0.xuxsn.mongodb.net/todolistDB');
};

module.exports.createItemSchema = function() {
	const schema = new mongoose.Schema({
		name: String,
	});

	return schema;
};

module.exports.createModel = function(name, schema) {
	const Model = mongoose.model(name, schema);
	return Model;
};

module.exports.createNew = async function(model, data) {
	const item = new model(data);
	return item;
};

module.exports.listAll = async function(model) {
	return await model.find();
};

module.exports.deleteById = async function(model, id) {
	await model.findByIdAndRemove(id);
};

module.exports.deleteByIdFrom = async function(model, modelName, deleteId) {
	// find the model to delete from by name, then delete the item by id
	await model.findOneAndUpdate(
	    { name: modelName },
	    { $pull: {items: { _id: deleteId }}},
	);
};

module.exports.createListSchema = function(itemSchema) {
	const schema = new mongoose.Schema({
		name: String,
		items: [itemSchema],
	});

	return schema;
};

module.exports.findMatching = async function(model, rule) {
	return await model.findOne(rule).exec();
};