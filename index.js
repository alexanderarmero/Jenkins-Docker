const express = require("express");
const app = express();

app.get("/", (req,res ) => {
    res.send("welcome to Express Demo: new version, new version * 2! ");
})

app.get("/error", (req,res ) => {
    process.exit(1);
})

app.listen(3000);