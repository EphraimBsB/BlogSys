const express = require('express');
const controller = require('../controllers/posts.controller');
const checkAuthMiddelware = require('../middlewares/check.auth');
const route = express.Router();
route.post('/posts',checkAuthMiddelware.checkAuth,controller.save);
route.get('/posts',controller.getAll);
route.get('/post/:id',controller.getOne);
route.patch('/post/:id',checkAuthMiddelware.checkAuth,controller.update);
route.delete('/post/:id',checkAuthMiddelware.checkAuth,controller.destroy);

module.exports = route;
