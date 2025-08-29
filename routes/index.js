const routes = require('express').Router();
// import the controllers(logic)
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.homeRoute);
routes.get('/dadzie', lesson1Controller.dadzieRoute);

//export the routes
module.exports = routes;
