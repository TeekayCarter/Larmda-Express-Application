// Setting up Express
var express = require("express");

// Initialising App
var app = express();

// Initialising EJS
app.set("view engine", "ejs");

// Implementing get routes

// Get route for Root
app.get("/", (req, res) => {
    res.send("Welcome to my Express app");
});

// Get route for Root
app.get("/user/:id", (req, res) => {

// This extracts UsedID from reequest
var userID = req.params.id;
    res.send(`Welcome ${userID}, Its great having you here.`);
});

// Error 404 route
app.get("*", (req, res) => {
    res.send("ERROR 404: Page not found");
});

// Port app listens to. To run use npm run dev
app.listen(3000, ()=>{
    console.log("Server started on Port 3000");
});

