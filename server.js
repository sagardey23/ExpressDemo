// creating server

// console.log("hello");



// npm init --y
// npm install express
// node server.js



// npm nodemon

// 1)npm init --y
// 2)npm install express
// 3)go to package.json write "start" under the test - "nodemon server.js"
// 4)npm install nodemon

// 5)run  npm start   on terminal


//  http is a module to connect
// HTTP METHODS

// CRUD  : Create Read Update Delete

// get post update/put delete

// create server

const express = require("express");

const server = express();

const middleware1 = (req, res, next) => {
    console.log("Hello this is middleware1 ");
    next()  // block the flow and take it back to the requested route
}
server.use(middleware1)

const middleware2 = (req, res, next) => {
    console.log("Hello this is middleware2 ");
    next() 
}
// server.use(middleware2)

server.get("/", (request, response) => {
    response.send("<h1>Hello world</h1>")
})
server.get("/user",middleware2, (request, response) => {
    response.send(" User Details")
})

server.listen(3005, () => {
    console.log("server is running at port 3005")
})


// Middlewares :::
//  is a function 
//  this function takes 3 parameters - req, res, next


//  why we need middlewRE

//  HOC IN REACT - same logic can be reuse
//  