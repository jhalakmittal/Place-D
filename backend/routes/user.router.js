const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const User = require('../modules/user');

require('dotenv').config();
const SECURITY_KEY = "MERNSTACK";
const generateToken = () => {
    const randomToken = require('random-token').create(SECURITY_KEY);
    return randomToken(50);
}

router.post('/get_by_token', (req, res) => {
    const key = SECURITY_KEY;
    if(key != SECURITY_KEY) res.status(403).json("Permission denied.")
    else{
        User.findOne({tokens: req.body.token}, (err, user) => {
            
            if(err){
                console.log(err);
                res.status(500).json("Error: "+err)
            
        }
            else if(!user){
                console.log(user)
                 res.status(404).json("User not found.")}
            else 
            {console.log(user)
                res.json(user)}
        })
    }
})

/*router.post('/register', jsonParser, (req, res) => {
    const {name, password, email} = req.body;
    User.findOne({email}, (err, user) => {
        if(err) res.status(500).json("Error has occured. Please refresh page")
        else if(user) res.status(400).json("Email has been taken.")
        else{
            const token = generateToken();
            const newUser = new User({name, password, email, token});
            console.log(newUser);
            newUser.save()
            .then(() => {
                res.json({"Message": "Success", token});
            })
            .catch(err => res.status(500).json(err.response.message));
        }
    })
})

router.post('/login', jsonParser, (req, res) => {
    const {email, password} = req.body;
    User.findOne({email}, (err, user) => {
        if(err) res.status(500).json("Error has occured.")
        else if(!user) res.status(400).json("User not found.")
        else{
            user.comparePassword(password, (err, isMatch) => {
                if(err) res.status(500).json("Error is occured.")
                if(isMatch){
                    const token = generateToken();
                    user.token = token;
                    user.save()
                    res.json({"message": "Success", token});
                }
                else res.status(400).json("Password doesn't match")
            })
        }
    })
})
*/
module.exports = router;