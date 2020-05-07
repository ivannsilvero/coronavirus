const express = require('express');
const fs = require('fs');
const hbs = require('hbs');

const { NovelCovid } = require('novelcovid');

const app = express();

app.set('view engine', 'hbs');

const track = new NovelCovid();

app.get('/stats', (req, res) => {

    track.countries()
        .then((response) => {
            res.render('stats', { info: response });
        });

});

module.exports = app;