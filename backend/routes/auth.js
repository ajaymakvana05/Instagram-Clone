const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../modals/modal');
const bcrypt = require('bcrypt');


router.post('/signup', (req, res) => {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
        return res.status(422).json({ error: 'Please add all the fields' });
    }

    User.findOne({ $or: [{ email: email }, { username: username }] }).then((savedUser) => {
        if (savedUser) {
            if (savedUser.email === email) {
                return res.status(422).json({ error: 'User already exists with that email' });
            }
            else if (savedUser.username === username) {
                return res.status(422).json({ error: 'User already exists with that username' });

            }
        }

        bcrypt.hash(password, 12).then((hashedpassword) => {
            const user = new User({
                name,
                username,
                email,
                password: hashedpassword
            })

            user.save().then(user => {
                res.json({ message: "saved successfully" })
            }).catch(err => {
                console.log(err)
            })
        }).catch(err => {
            console.log(err)
        }
        )
    }
    )




})

module.exports = router;