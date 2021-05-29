// const { request } = require('express');
// const express=require('express')
// const router=express.Router();
// const signUpTemplate=require('../models/signupModels')

// router.route('/admin/addprofile').post((req,res,next)=>{
//     const signedUpUser=new signUpTemplate({
//         fname:request.body.fname,
//         lname:request.body.lname,
//         course:request.body.course,
//         batch:request.body.batch,
//         address:request.body.address,
//         city:request.body.city,
//         state:request.body.state,
//         zip:request.body.zip,
//         email:request.body.email,
       

//     })
//     signUpUser.save()
//     .then(data=>{
//         response.json(err)
//     })
//     .catch(error=>{
//         response.json(error)
//     })
// })



// module.exports=router

//const { request } = require('express');
const express=require('express')
const router=express.Router();
const signUpTemplate=require('../modules/signupModels');

// require("./conn");

router.route('/signup').post((req, res, next) => {
    signUpTemplate.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});
router.route('/').get((req, res) => {
    signUpTemplate.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/updateprofile').patch((req, res) => {
    // signUpTemplate.findByIdAndUpdate(
    //     req.params.id,
    //     {
    //         $set:req.body,
    //     },
    //     (err,post)=>{
    //         if(err)return res.status(400).json({success:false})
    //         else return res.status(200).json({success:true})
    //     }
    // )
    signUpTemplate.findOne({email: asker}, (err, user) => {
        const {email} = req.body;
        if(err) res.status(500).json("Something went wrong.")
        else if(!user) res.status(403).json("Permission denied.")
        else{
            signUpTemplate.findByIdAndUpdate(
                user.id,
                {
                    $set:req.body,
                },
                (err,post)=>{
                    if(err)return res.status(400).json({success:false})
                    else return res.status(200).json({success:true})
                }
            )
        }
    })
});

// router.route('/signup').post((req,res,next)=>{
//     const signUpUser=new signUpTemplate({
//         fname:request.body.fname,
//         lname:request.body.lname,
//         course:request.body.course,
//         batch:request.body.batch,
//         address:request.body.address,
//         city:request.body.city,
//         state:request.body.state,
//         zip:request.body.zip,
//         email:request.body.email,
       

//     })
//     signUpUser.save()
//     .then(data=>{
//         response.json(err)
//     })
//     .catch(error=>{
//         response.json(error)
//     })
// })



module.exports=router

