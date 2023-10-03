const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.post("/", (req, res) => {
	// fetch shitty ass quote from api
    const url = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
    https.get(url, (response) => {
    	response.on("data", (data) => {
    		const resp = JSON.parse(data);
    		res.send(`yo mamma so stupid that she said: "${resp.quotes[0].text}"`);
    	});
    });
});

app.listen(3000, () => {
    console.log("listing on 3000");
});
