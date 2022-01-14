const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

dotenv.config({path:"./config.env"});

require("./db/conn");
// const User = require("./model/userSchema");
app.use(cors({"origin": "*"}))
app.use(express.json());

//link the router file

app.use(require("./router/auth"));

// const DB = "mongodb+srv://manoj:<password>@cluster0.kwgod.mongodb.net/projectname?retryWrites=true&w=majority"

// const DB = process.env.DATABASE;

const PORT = process.env.PORT;

//Routing
 
app.get("/aboutus", (req, res) => {
    res.send(`Hello world about us from the server`);
});

app.get("/ourservices", (req, res) => {
    res.send(`Hello world our services from the server`);
});

app.get("/ourclients", (req, res) => {
    res.send(`Hello world our clients from the server`);
});

app.get("/contactus", (req, res) => {
    res.send(`Hello world contact us from the server`);
});

app.get("/Booking", (req, res) => {
    res.send(`Hello world login from the server`);
});

app.get("/signin", (req, res) => {
    res.send(`Hello world login from the server`);
});

app.get("/signup", (req, res) => {
    res.send(`Hello world signup from the server`);
});

app.listen(PORT, () => {
    console.log(`server is running on port no ${PORT}`)
});