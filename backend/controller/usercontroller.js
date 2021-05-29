const express= require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const jwt = require('jsonwebtoken');
var User = require('../../backend/modules/user');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
// const staticPath  = path.join(__dirname,"../../frontend/src/Component/Forgotpassword");
// app.use(express.static(staticPath));
// console.log(path.join(__dirname,"../../frontend/src/Component/Forgotpassword"));
// const Forgotpassword = require('../../frontend/src/Component/Forgotpassword');
const env = require('dotenv');
env.config();
const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox7f1277de74db4039a0dad9f2ab8e0bc0.mailgun.org';
const mg = mailgun({apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN});
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//router for handling forgot password
exports.postforgotpassword = (req,res,next)=>{
    const email = req.body.email;
    //Make sure user exit
    User.findOne({email : req.body.email}).exec((error,user)=>{
        if(error){
            return res.status(400).json({
                message : 'User not exists'
            });
        }
        if(user){
        //User exit and now create a one time valid link for reset password
        const SECRET = process.env.JWT_SECRET+user.password;
        const token = jwt.sign({_id : user._id,role: user.role,email: user.email},SECRET,{expiresIn:'15m'});
        const link = `http://localhost:3000/user/resetpassword/${user._id}/${token}`;
        const data = {
            from: 'snehabaser1603@gmail.com',
	to: 'btbtc18144_sneha@banasthali.in',
	subject: 'Hello',
	html: `
    <h2>Please click on given link to reset your password</h2>
    <p><link>http://localhost:3000/user/resetpassword/${user._id}/${token}</link></p>


        `};
        return User.updateOne({resetLink:token},(err,success)=>{
            if(err){
                return res.status(400).json({message:'reset password link error'});
            }
            else{
                mg.messages().send(data,function(err,body){
                    if(error){
                        return res.json({
                            message : err.message
                        })
                    }
                    console.log(body);
                    console.log(process.env.MAILGUN_APIKEY);
                    console.log(process.env.MAILGUN_APIURL);
                    return res.json({message: 'Email has been sent , Kindly Reset Your password!'});


                });

            }
        })
    
       
      
        console.log(link);
        res.send(email);
    }
    else{
        return res.status(400).json({
            message : 'User not exists'
        });
       
    }
    })
}

   


//router for reset-password
exports.resetpassword = (req,res,next)=>{
    const token = req.body.token;
    const updatepassword = req.body.updatepassword;
    const id = req.body.id;
    console.log(updatepassword);
    //check if id exist in db
    User.findOne({_id : id}).exec((error,user)=>{
        if(error){
            return res.status(400).json({
                message : 'User with this id not exists'
            });
        }
        const SECRET = process.env.JWT_SECRET+user.password;
        try{
            const payload = jwt.verify(token,SECRET);
            console.log(payload);
            console.log(user);
        user.password = updatepassword;
        user.confirmpassword = updatepassword;
        user.save().then((saveduser)=>{
            res.json({
                message:"Password updated"
            })

        }).catch((err)=>{
            console.log(err.response);

        });
        }
        catch(err){
            return res.status(400).json({
                error : err.message
            })
        }
    })
}


// router for user signup
    exports.signup = (req,res)=>{
        User.findOne({email : req.body.Email}).exec((error,user)=>{
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
    const course = req.body.Course;
    const year = req.body.year;
    const userr = new User({
        username,
        email,
        password,
        course,
        year,
        confirmpassword
    });
    userr.save((error , data)=>{
        if(error){
            console.log("In error method of saving data to database");
            return res.status(400).json({
                message : 'Unable to save in database'
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
    //router for user signin
    exports.signin =  (req,res)=>{
        User.findOne({email:req.body.Email}).exec((error,user)=>{
            if(error){
                return res.status(400).json(error);
            }
            if(user){
                // console.log(user);
                if(user.authenticate(req.body.password)){
                    // const token =  user.generateAuthToken();
                    const token = jwt.sign({_id : user._id,role: user.role,email:user.email},process.env.JWT_SECRET);
                    res.cookie("jwt",token,{
                        expires: new Date(Date.now()+30000000000000),
                        httpOnly:true
                       
                    });
                    
                    const{_id,username,email,role} = user;
                    user.tokens=token;
                    user.save();
                    console.log(user);
                    //new line updated-26 april
                    // localStorage.setItem('jwt',token);
                    // localStorage.setItem("jwt",token);
                    // localStorage.setItem("userdetail",user);
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
                return res.status(400).json({'message': "email Id not found" });
            }
        })
    }