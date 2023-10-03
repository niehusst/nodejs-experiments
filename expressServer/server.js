const express = require("express");

const app = express();


// request, response
app.get("/", (req, res) => {
	res.send("hllo worleld spaghetti");
});

app.get("/contact", (req, res) => {
	res.send("find my ass in your butt");
});

app.get("/about", (req, res) => {
	res.send("fuck you, im my buisness");
});

app.listen(3000, () => {
    console.log("server started on port 3000");
});
