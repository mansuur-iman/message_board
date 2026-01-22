const {Router} = require('express');
const indexRouter = Router();

const messageController = require('../controllers/indexController');

indexRouter.get('/', messageController);

module.exports = indexRouter;