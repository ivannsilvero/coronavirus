require('./config/config');

const express = require('express');
const http = require('http');
const path = require('path');
const hbs = require('hbs');

const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
})

app.use(require('./routes/index'));

server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);

})