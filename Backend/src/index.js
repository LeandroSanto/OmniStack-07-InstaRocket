//import do Express para criar o servidor
const express = require('express');
//import do Mongoose para utilizar o MongoDB
const mongoose = require('mongoose');

const path = require( 'path' );

const cors = require ('cors');

//Declaração da variavel APP para usar o express
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

//Parametro de configuração do Banco MongoDB
mongoose.connect('mongodb+srv://administrador:AND4ndr0zz@cluster0-phb0g.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
});

app.use((req,res, next) =>{
    req.io = io;
    
    next();
})

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname,'..','uploads','resized')));

app.use(require('./routes'));

//porta que o servidor do Backend está ouvindo
server.listen(3333);
