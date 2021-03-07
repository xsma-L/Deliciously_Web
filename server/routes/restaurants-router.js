const express = require('express')

const RestaurantCtrl = require('../controllers/restaurants-ctrl')

const router = express.Router()


router.post('/restaurant', RestaurantCtrl.createRestaurant)

router.put('/restaurant/:id', RestaurantCtrl.updateRestaurant)

router.delete('/restaurant/:id', RestaurantCtrl.deleteRestaurant)

router.get('/restaurant/:id', RestaurantCtrl.getRestaurantById)

router.get('/restaurants', RestaurantCtrl.getRestaurants)

module.exports = router