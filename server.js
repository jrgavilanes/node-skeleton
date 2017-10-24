const express = require("express");

const PORT = process.env.PORT || 3000;
const IP = process.env.IP || "0.0.0.0";

var app = express();

app.get("/", (req, res) => {
    res.send("hola nano!!");
});

app.listen(PORT, IP,  (err) => {
   if (err) {
        console.log(err);
   } else {
        console.log(`Server running on port ${PORT}`);
   }
});