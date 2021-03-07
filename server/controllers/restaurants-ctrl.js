const Restaurant = require('../models/restaurant-model')

exports.createRestaurant = (req, res) => {
    const body = req.body

    console.log("okokokk")

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Vous devez fournir un restaurant'
        })
    }

    const restaurant = new Restaurant(body)
    
    if (!Restaurant) {
        return res.status(400).json({
            success: false, error: err
        })
    }

    restaurant
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: restaurant._id,
                message: 'Restaurant créer !',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Restaurant non créer !',
            })
        })
}

exports.updateRestaurant = async (req, res) => {
    const body = req.body

    if (!body) {
        returnres.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Restaurant.findOne({ _id:req.params.id }, (err, restaurant) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Resaturant not found!',
            })
        }

        restaurant.name = body.name
        restaurant.type = body.type
        restaurant.adress = body.adress
        restaurant.picture = body.picture
        restaurant.info = body.info

        restaurant
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: restaurant._id,
                    message: 'Restaurant updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Restaurant not found',
                })
            })
    })
}

exports.deleteRestaurant = async (req, res) => {
    await Restaurant.findOneAndDelete({ _id: req.params.id }, (err, restaurant) => {
        if (err) {
            return res.status(400).json({
                success: false, error: err
            })
        }

        if (!restaurant) {
            return res.status(404).json({
                success: false, error: 'Restaurant not found'
            })
        }

        return res.status(200).json({
            success: true, data: restaurant
        })

    }).catch(err => console.log(err))
}

exports.getRestaurantById = async (req, res) => {
    await Restaurant.findOne({_id: req.params.id }, (err, restaurant) => {
        if (err) {
            return res.status(400).json({
                success: false, error: err
            })
        }

        if (!restaurant) {
            return res.status(404).json({
                success: false, error: 'Restaurant not found'
            })
        }

        return res.status(200).json({
            success: true, data: restaurant
        })

    }).catch(err => console.log(err))
}

exports.getRestaurants = async (req, res) => {
    await Restaurant.find({}, (err, restaurant) => {
        if (err) {
            return res.status(400).json({
                success: false, error: err
            })
        }
    
        if (!restaurant.length) {
            return res.status(404).json({
                success: false, error: 'Restaurants not found'
            })
        }

        return res.status(200).json({
            success: true, data: restaurant
        })
    }).catch(err => console.log(err))
}