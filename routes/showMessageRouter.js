const {Router} = require('express');
const showMessageRouter = Router();

const showMessageController = require('../controllers/showMessageController');

showMessageRouter.get('/:id', showMessageController);

module.exports = showMessageRouter;