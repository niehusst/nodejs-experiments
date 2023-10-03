//jshint esversion:6
require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const encrypt = require('mongoose-encryption');
// const md5 = require('md5');
// const bcrypt = require('bcrypt');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const app = express();
const secret = process.env.SECRET;
const saltRounds = 4;
app.use(session({
	secret,
	resave: false,
	saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost:27017/userDB');
const userSchema = new mongoose.Schema({
	email: String,
	password: String,
	googleId: String,
	secret: String,
});
// userSchema.plugin(encrypt, { secret, encryptedFields: ['password'] });
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
const User = new mongoose.model('User', userSchema);
passport.use(User.createStrategy());
passport.serializeUser((user, done) => {
	done(null, user.id); 
});
passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => { 
		if (err) {
			console.log(err);
		}
		return done(err, user);
	});
});

passport.use(new GoogleStrategy({
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	callbackURL: 'http://localhost:3000/auth/google/secrets',
	userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
}, (accessToken, refreshToken, profile, cb) => {
	User.findOrCreate({ googleId: profile.id}, (err, user) => { return cb(err, user) });
}));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.render('home');
});

app.route('/login')
.get((req, res) => {
	res.render('login');
})
.post(
	passport.authenticate('local'),
	(req, res) => {
		res.redirect('/secrets');
    });

app.route('/register')
.get((req, res) => {
	res.render('register');
})
.post(async (req, res) => {
	const newUser = await User.register(
		{ username: req.body.username },
		req.body.password, //await bcrypt.hash(req.body.password, saltRounds)
	);
	req.session.passport.user = newUser;

	// await newUser.save();
	res.redirect('/secrets');
});


app.route('/secrets')
.get(async (req, res) => {
	const secrets = await User.find({ secret: { $ne: null }});

	res.render('secrets', { usersWithSecrets: secrets });
});

app.route('/logout')
.get((req, res) => {
	req.logout();
	res.redirect('/');
});

app.get('/auth/google',
	passport.authenticate('google', { scope: ['profile'] })
);

app.get('/auth/google/secrets',
	passport.authenticate('google', { failureRedirect: '/login' }),
	(req, res) => { res.redirect('/secrets'); },
);

app.route('/submit')
.get((req, res) => {
	if (req.isAuthenticated()) {
		res.render('submit');
	} else {
		res.redirect('/login');
	}
})
.post(async (req, res) => {
	const user = await User.findById(req.user.id);
	if (user) {
		user.secret = req.body.secret;
		await user.save();
		res.redirect('/secrets');
	} else {
		res.redirect('/login')
	}

})

app.listen(3000, () => {
	console.log('Listening on port 3000');
})