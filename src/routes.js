const express = require('express');
const multer = require('multer');

const multerConfig = require('./config/multer');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(multerConfig);

routes.get('/', (req, res) => {
    return res.send("Olá mundo!");
})

routes.route('/posts')
    .get(PostController.index)
    .post(upload.single('image'), PostController.store);


// routes.get('/posts', PostController.index);
// routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', upload.single('image'), LikeController.store);

module.exports = routes;