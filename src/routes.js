const express = require('express');
const UserController = require('./app/controllers/UserController');
const MaterialController = require('./app/controllers/MaterialController');
const DiscardController = require('./app/controllers/DiscardController');
const SearchController = require('./app/controllers/SearchController');
const NotificationController = require('./app/controllers/NotificationController');
const PurchaseController = require('./app/controllers/PurchaseController')



const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/materials', MaterialController.store);
routes.get('/materials', MaterialController.index);

routes.post('/discards', DiscardController.store);
routes.get('/discards', DiscardController.index);

routes.post('/searchs', SearchController.store);
routes.get('/searchs', SearchController.index);
routes.delete('/searchs/:search_id', SearchController.delete);

routes.post('/notifications', NotificationController.store);
routes.get('/notifications', NotificationController.index);

routes.post('/purchases', PurchaseController.store);
routes.get('/purchases', PurchaseController.index);



module.exports = routes;