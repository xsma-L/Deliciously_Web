const User = require('../models/user')
const Bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

// saltRound = clé de cryptage
const saltRounds = 10;

// Cre&tion d'un user en BDD
exports.createUser = async (req, res) => {
    const body = req.body
    console.log(body)

    if (!body) {
        return res.status(400).json({
            succes: false
        })
    }

    // cryptage du mdp
    const hasedPwd = await Bcrypt.hash(body.password, saltRounds);

    body.password = hasedPwd
    
    const user = new User(body)
    
    if(!user) {
        return res.status(404).json({
            succes: false, error: err
        })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'User created',
            })
        })
        .catch(error => {
            return res.status(408).json({
                success: false,
                message: 'User not created',
            })
        })
}

// Connection d'un utilisateur
exports.userLogin = async (req, res) => {
    const body = req.body
    console.log(body)
    if(!body) {
        return res.status(400).json({
            succes: false,
            error: 'error'
        })
    }

    // Récuperation de l'utilisateur
    const user = await User.findOne({ email: body.email });
    if(user) {
        //comparaison du mdp crypté 
        const cmp = await Bcrypt.compare(body.password, user.password)
        // Si le mdp est bon, l'utilsateur est connecté
        if (cmp) {
            res.send({
                succes: true,
                username: user.username,
                id: user._id,
                // Génération de token utilisateur
                token: jwt.sign({username: user.username, _id: user._id }, 'DELICOUSLYAPIs')

            })
        } else {
            res.send({
                succes: false,
            })
        }
    } else {
        res.send({
            success: false,
        })
    }
    
}