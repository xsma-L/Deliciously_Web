const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Role =  new mongoose.Schema(
    {
        name: { type: String, required: true }
    },
)

module.exports = mongoose.model('Role', Role);