const { Router } = require('express');
const messageRouter = Router();
const messageController = require('../controllers/messageController');

messageRouter.get('/', messageController.showMessage);

messageRouter.get('/new', messageController.showForm);
messageRouter.post('/new', messageController.addMessage);

messageRouter.get('/message/:id', messageController.showMessageById);
messageRouter.post('/message/:id/delete', messageController.deleteMessageById);

module.exports = messageRouter;
