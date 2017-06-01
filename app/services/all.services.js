'use strict';
const bodyParser = require('body-parser'),
    express = require('express');

const app = express();

app.use(bodyParser.json());

//model for users
const UserModel = require('../models/user.model');

//services for usere
app.get('/users', (req, res) => {
    UserModel.find().exec().then(users => {
        res.json(users);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.get('/users/:id', (req, res) => {
    UserModel.findById(req.params.id).exec().then(user => {
        res.json(user || {});
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.post('/users', (req, res) => {
    const user = new UserModel(req.body);
    user.save().then(user => {
        res.json(user);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.put('/users/:id', (req, res) => {
    const user = new UserModel(req.body);
    user.update().then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.delete('/users/:id', (req, res) => {
    UserModel.remove(req.params.id).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

module.exports = app;