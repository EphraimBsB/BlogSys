const express = require("express");
const bodyParser = require("body-parser")
const app = express();

const postRoute = require('../routes/posts.route');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/blogs', postRoute);

module.exports = app;