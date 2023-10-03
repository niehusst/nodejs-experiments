const mongoose = require('mongoose');

async function run() {
    await mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });
    
    await mongoose.connection.dropDatabase();
    
    const fruitSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, 'name your fruit you fuck'],
        },
        rating: {
            type: Number,
            min: 0,
            max: 10,
        },
        reivew: String,
    });
    
    const Fruit = mongoose.model('Fruit', fruitSchema);
    
    const apple = new Fruit({
        name: 'Apple',
        rating: 3,
        review: 'sour af',
    });
    
    const dragon = new Fruit({
        name: 'Dragon',
        rating: 5,
        review: 'passable',
    });
    
    const banan = new Fruit({
        name: 'banan',
        rating: 10,
        review: 'good in soup',
    });
   
    const peach = new Fruit({
        name: 'Peach',
        rating: 9,
        reveiw: 'can be sour',
    });

    await Fruit.insertMany([apple, dragon, banan, peach]);
    
    const personSchema = new mongoose.Schema({
        name: String,
        age: Number,
        address: String,
        faveFruit: fruitSchema,
    });
    
    const Person = mongoose.model('Person', personSchema);
    
    const person = new Person({
        name: 'Tim',
        age: 9000,
        address: '123 Sesame St.',
        faveFruit: banan,
    });
    
    await person.save();
    

    // delete stupid froot
    await Fruit.deleteOne({ name: 'Apple' });

    // find stuff
    
    const fruits = await Fruit.find();
    console.log(fruits.map((f) => f.name));

    console.log('people:');
    console.log(await Person.find());
}

run().then(_ => {
    console.log('DONE');
    mongoose.connection.close();
});
