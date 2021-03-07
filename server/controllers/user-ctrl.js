const User = require('../models/user')
const Bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const saltRounds = 10;

exports.createUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            succes: false
        })
    }

    const hasedPwd = await Bcrypt.hash(body.password, saltRounds);

    body.password = hasedPwd
    
    const user = new User(body)
    
    if(!user) {
        return res.status(400).json({
            succes: false, error: err
        })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: restaurant._id,
                message: 'User created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created',
            })
        })
}

exports.userLogin = async (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            succes: false,
            error: 'error'
        })
    }

    const user = await User.findOne({ email: body.email });
    if(user) {
        const cmp = await Bcrypt.compare(body.password, user.password)
        
        if (cmp) {
            res.send({
                succes: true,
                username: user.username,
                id: user._id,
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