const express = require("express");

const PORT = process.env.PORT || 3000;

var app = express();

app.get("/", (req, res) => {
    res.send("hola nano!!");
});

app.listen(PORT);
