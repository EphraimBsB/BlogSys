const express = require('express');
const controller = require('../controllers/posts.controller');
const route = express.Router();
route.post('/posts',controller.save);
route.get('/posts',controller.getAll);
route.get('/post/:id',controller.getOne);
route.patch('/post/:id',controller.update);
route.delete('/post/:id',controller.destroy);

module.exports = route;
