//INPORTS
//IMPORT EXPRESS
const express = require('express');
//IMPORT MULTER
const multer = require('multer');
//IMPORT DAS CONFIGURAÇÔES DE UPLOAD DE ARQUIVO PARA A PASTA UPLOADS DO PROJETO
const uploadConfig = require('./config/upload');
//IMPORT POST CONTROLLER
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');


//Declaração da variável routes
const routes = new express.Router();
//Ceclaração da variável upload
const upload = multer(uploadConfig);


routes.get('/posts', PostController.index);
routes.post ('/posts',upload.single('image'), PostController.store);

routes.post('/posts/:id/like',LikeController.store);

module.exports = routes;