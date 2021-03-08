const express = require('express')

// Importation de user-controller et reataurants-controller
const RestaurantCtrl = require('../controllers/restaurants-ctrl')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

// Definition des routes

router.post('/user', UserCtrl.createUser)

router.post('/user/connect', UserCtrl.userLogin)

router.post('/restaurant', RestaurantCtrl.createRestaurant)

router.put('/restaurant/:id', RestaurantCtrl.updateRestaurant)

router.delete('/restaurant/:id', RestaurantCtrl.deleteRestaurant)

router.get('/restaurant/:id', RestaurantCtrl.getRestaurantById)

router.get('/restaurants', RestaurantCtrl.getRestaurants)

module.exports = router