const route = require('express').Router();
const postController = require('./../controller/postController')
// GET POST
route.get('/', postController.getAllPosts)

// CREATE POST
route.post('/', postController.createPost)

// GET SINGLE POST
route.get('/:id', postController.getSinglePost)

// UPDATE POST
route.patch('/:id', postController.updatePost)

// DELETE POST
route.delete('/:id', postController.deletePost)

module.exports = route;