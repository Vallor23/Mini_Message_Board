const { Router } = require('express');
const messages = require('../data');

const formRouter = Router();

formRouter
.get('/new', (req, res) => {
    res.render('form')
})
.post('/new', (req, res) => {
    const {user, text} = req.body;
    messages.push({ text, user, added: new Date() });
    res.redirect('/')
});

module.exports = formRouter;