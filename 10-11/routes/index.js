const route = require('express').Router()
const UserController = require('../controllers/userControllers')
const Swapi = require('../controllers/swapi')
const {authenticate} = require("../middlewares/authentication")


route.post('/getaccess', UserController.getAccess)
route.use(authenticate)
route.get('/swapi', Swapi.swapi)

module.exports = route