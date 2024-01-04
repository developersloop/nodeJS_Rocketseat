const express = require('express');
const routes = express.Router();
const RegistrationController = require('./controllers/RegistrationController');

routes.get('/registrations', RegistrationController.index);
routes.post('/registrations',RegistrationController.store);

module.exports = routes;
