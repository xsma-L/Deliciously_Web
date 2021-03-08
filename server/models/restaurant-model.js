const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Definition des valeurs attendu dans la table restaurant
const Restaurant = new Schema(
    {
        name: { type: String, required: true },
        type: { type: String, required: true },
        adress: { type: String, required: true },
        city: { type: String, required: true },
        picture: { type: String, required: true },
        // info: { type: [String], required: false }  
    },
    {timestamps: true},
)

module.exports = mongoose.model('restaurant', Restaurant)