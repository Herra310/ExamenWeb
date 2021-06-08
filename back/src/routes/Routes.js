const express = require('express');

const routes = express.Router();

const {index,show,destroy} = require('../controllers/Controller');

routes.get('/', index);

routes.get('/:id', show)

routes.delete('/:id', destroy)

module.exports = routes;