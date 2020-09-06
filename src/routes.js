const express = require('express');
const UserController = require('./app/controllers/UserController');
const MaterialController = require('./app/controllers/MaterialController');
const DiscardController = require('./app/controllers/DiscardController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/materials', MaterialController.store);
routes.get('/materials', MaterialController.index);

routes.post('/discards', DiscardController.store);
routes.get('/discards', DiscardController.index);

module.exports = routes;