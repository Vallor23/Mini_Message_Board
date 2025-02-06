const { Router } = require('express');
const {handleCreateMessage} = require('../controllers/messagesController')

const formRouter = Router();

formRouter
.get('/new', (req, res) => {
    res.render('form')
})
.post('/new', handleCreateMessage);

module.exports = formRouter;