const { Router } = require('express');

const {handleGetMessage} = require('../controllers/messagesController')

const indexRouter = Router();

indexRouter.get('/', handleGetMessage);

module.exports = indexRouter;