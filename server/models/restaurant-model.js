const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Restaurant = new Schema(
    {
        name: { type: String, required: true },
        type: { type: String, required: true },
        adress: { type: String, required: true },
        city: { type: String, required: true },
        picture: { type: Buffer, contentType: String, required: true },
        info: { type: [String], required: true }  
    },
    {timestamps: true},
)

module.exports = mongoose.model('restaurant', Restaurant)