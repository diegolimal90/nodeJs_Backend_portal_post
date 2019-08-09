const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const routes = require('./routes');

mongoose.connect('mongodb+srv://semana:semana@cluster0-2yr8z.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
const app = express();


const server = require('http').Server(app);;
const io = require('socket.io')(server);

app.use((req, res, next) => {
    req.io = io;

    next();
})

app.use(cors())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(routes);

server.listen(3333);