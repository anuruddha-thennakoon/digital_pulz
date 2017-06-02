'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/digital_pulz', err => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
});

const app = require('./app/services/all.services');

app.use(express.static(__dirname));

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/app/views/index.html');
});

app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('app listening on port 3000');
});