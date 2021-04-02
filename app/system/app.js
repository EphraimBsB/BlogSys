const express = require("express");
const app = express();

const postRoute = require('../routes/posts.route');
const userRoute = require('../routes/user.route')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/blogs', postRoute);
app.use('/user',userRoute);

module.exports = app;