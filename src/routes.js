const express = require('express');
const UserController = require('./app/controllers/UserController');
const MaterialController = require('./app/controllers/MaterialController');
const DiscardController = require('./app/controllers/DiscardController');
const SearchController = require('./app/controllers/SearchController');
const NotificationController = require('./app/controllers/NotificationController');
const PurchaseController = require('./app/controllers/PurchaseController')
const TypeController = require('./app/controllers/TypeController');

const DiscardUserController = require('./app/controllers/DiscardUserController');
const MaterialUserController = require('./app/controllers/MaterialSearchController');
const DiscardInfoController = require('./app/controllers/DiscardInfoController');
const LoginController = require('./app/controllers/LoginController');
const MatchBySearchController = require('./app/controllers/MatchBySearchController');
const UserByIdController = require('./app/controllers/UserByIdController');
const UserNotificationController = require('./app/controllers/UserNotificationController');
const MaterialSearchController = require('./app/controllers/MaterialSearchController');
const ListMaterialsController = require('./app/controllers/ListMaterialsController');
const ListTypesController = require('./app/controllers/ListTypesController');
const FindDiscardController = require('./app/controllers/FindDiscardController');
const FinalMatchController = require('./app/controllers/FinalMatchController');
const NotificationByClientIdController = require('./app/controllers/NotificationByClientIdController');
const NotificationByProviderIdController = require('./app/controllers/NotificationByProviderIdController');
const SearchesInfoController = require('./app/controllers/SearchesInfoController');
const NotificationClientAccController = require('./app/controllers/NotificationClientAccController');
const NotificationProviderAccController = require('./app/controllers/NotificationProviderAccController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/materials', MaterialController.store);
routes.get('/materials', MaterialController.index);
routes.get('/materialslist', ListMaterialsController.index);

routes.post('/discards', DiscardController.store);
routes.get('/discards', DiscardController.index);
routes.delete('/discards/:discard_id', DiscardController.delete);

routes.post('/searchs', SearchController.store);
routes.get('/searchs', SearchController.index);
routes.delete('/searchs/:search_id', SearchController.delete);
routes.put('/searchs/:search_id', SearchController.put);
routes.get('/searchs/info/:id', SearchesInfoController.index);


routes.post('/notifications', NotificationController.store);
routes.get('/notifications', NotificationController.index);
routes.delete('/notifications/:notification_id', NotificationController.delete);

routes.post('/purchases', PurchaseController.store);
routes.get('/purchases', PurchaseController.index);

routes.post('/types', TypeController.store);
routes.get('/types', TypeController.index);
routes.get('/typeslist', ListTypesController.index);


routes.get('/discards/:user_id', DiscardUserController.index);

routes.get('/searchs/:user_id', MaterialSearchController.index);

routes.get('/discards/info/:id', DiscardInfoController.index);

routes.post('/userslogin', LoginController.index);

routes.post('/discardsmatch', MatchBySearchController.index);

routes.get('/users/:id', UserByIdController.index);

routes.get('/notifications/:user_id', UserNotificationController.index);

routes.post('/notifications/discardinfo', FindDiscardController.index);

routes.post('/finalmatch', FinalMatchController.index);

routes.get('/userclient/notification/:id', NotificationByClientIdController.index);
routes.get('/userprovider/notification/:id', NotificationByProviderIdController.index);


routes.put('/notification/client/:id', NotificationClientAccController.update);
routes.put('/notification/provider/:id', NotificationProviderAccController.update);



module.exports = routes;