// Requires //
const { Router } = require('express')

// Controllers //
let techController = require('../controllers/technologies.controller')

// Initializations //
let routes = Router()

// Routes //
routes.get('/technologies', techController.allTechnologies)
routes.get('/technology/:id', techController.oneTechnology)
routes.get('/technology/search/:name', techController.searchTechnology)

// Exports //
module.exports = routes