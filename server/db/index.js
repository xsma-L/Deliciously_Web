const mongoose = require('mongoose')

// Connection à la BDD
mongoose
    .connect('mongodb://127.0.0.1:27017/deliciously', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connectiones error', e.message)
    })

const db = mongoose.connection

module.exports = db