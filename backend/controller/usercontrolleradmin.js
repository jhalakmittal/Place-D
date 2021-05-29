const express= require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const jwt = require('jsonwebtoken');
var Admin = require('../../backend/modules/admin');
const env = require('dotenv');
env.config();
// const user = require('../../backend/modules/user');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// router.post('/signup', (req, res) => {
    exports.signup = (req,res)=>{
        Admin.findOne({email : req.body.Email}).exec((error,user)=>{
            if(user){
                return res.status(400).json({
                    message : 'User already registered'
                });
            }
    console.log(req.body.Username);
    const username = req.body.Username;
    const email = req.body.Email;
    const password = req.body.password;
    const confirmpassword = req.body.ConfirmPassword;
    const role = req.body.role;
    const userr = new Admin({
        username,
        email,
        password,
        confirmpassword,role
    });
    userr.save((error , data)=>{
        if(error){
            console.log("In error method of saving data to database");
            return res.status(400).json({
                message : error
            })
        }
        if(data){
             
            return res.status(201).json({
                user : data
            })
        }

    });

});
    }
    exports.signin =  (req,res)=>{
        Admin.findOne({email:req.body.Email}).exec((error,user)=>{
            if(error){
                return res.status(400).json(error);
            }
            if(user){
                
                if(user.authenticate(req.body.password)){
                    // const token =  user.generateAuthToken();
                    const token = jwt.sign({_id : user._id,role: user.role},process.env.JWT_SECRET);
                    res.cookie("jwtoken",token,{
                        expires: new Date(Date.now()+300000)
                        
                    });
                    const{_id,username,email,role} = user;
                    res.status(200).json({
                        token,
                        user :{
                            _id,username,email,role
                        }
                    });
    
                }
                else{
                    res.status(400).json({
                        message:'Invalid password'
                    });
                }
    
            }
            else{
                return res.status(400).json({'message': "admin with this mailid not exist" });
            }
        })
    }
    