const {Router} = require('express');
const formRoute = Router();
const showForm = require('../controllers/formController');
const handleFormSubmit = require('../controllers/handleFormSubmit');

formRoute.get('/', showForm);
formRoute.post('/', handleFormSubmit);

module.exports = formRoute;