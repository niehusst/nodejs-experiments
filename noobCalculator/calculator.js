const express = require("express");
// middleware for setting interceptors or parsing data to a certain format
const bodyParser = require("body-parser"); // in this case; allows http response body a json obj


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.post("/", (req, res) => {
	const sum = Number(req.body.num1) + Number(req.body.num2);
	res.send(`The answer to ${req.body.num1} + ${req.body.num2} is: ${sum}`);
});

app.listen(3000, () => {
    console.log("listening on 3000");
});
