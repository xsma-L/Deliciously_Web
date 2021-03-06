const mongoose = require("mongoose");
const Schema = mongoose.Schema

// Definition des valeurs attendu dans la table user

const User = new Schema(
    {
        username: { type: String, lowercase: true, required: true },
        email: { type: String, unique: true, trim: true, required: true},
        password: { type: String, trim: true, required: true},
    },
    {timestamps: true},
)

module.exports = mongoose.model('user', User);