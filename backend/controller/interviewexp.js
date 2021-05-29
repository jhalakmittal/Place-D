const express= require('express');
const bodyParser = require('body-parser');
const router = express.Router();
var Interviewexp = require('../../backend/modules/Interviewexp');

const app = express();
exports.addexperience = (req,res)=>{
const name = req.body.name;
const imgurl = req.body.imgurl;
const companyname= req.body.companyname;
const experience= req.body.experience;
const exp = new Interviewexp({
    name,
    imgurl,
    companyname,
    experience
});
exp.save((error , data)=>{
    if(error){
        console.log("In error method of saving data to database");
        return res.status(400).json({
            message : "In error method of saving data to database"
        })
    }
    if(data){
         
        return res.status(201).json({
            user : data
        })
    }
});
}
exports.getexperience = async(req,res)=>{
    // console.log(req.cookies.jwt);
    try{
        
        const interviewexp = await Interviewexp.find();
        res.send(interviewexp);
    }catch(e){
        res.send(e);
    }
}
exports.updateexperience = async (req,res)=>{
    
        const id =req.params.id ;
        console.log(req.params.id);
          /*Interviewexp.findOneAndUpdate(id,req.body,{
            new : true
        }).then((result) => {
            console.log(result);
            console.log(req.body);
            res.json(result);
            
        }).catch((err) => {
            res.status(400).json({msg:'Update failed'});
            
        });*/
        try{
            // const id = req.params.id;
    
        
            const updateexp = await Interviewexp.findByIdAndUpdate(id,req.body,{
                new : true
            });
            console.log(updateexp);
            res.send(updateexp); 
        }
        catch(e){
            res.status(400).send(e);
        }      
    }
    exports.deleteexperience = (req,res)=>{
            
              Interviewexp.findByIdAndRemove(req.params.id,(error,data)=>{
                  if(error){
                      console.log(error);
                  }
                  else{
                      res.status(200).json({
                          msg: data
                      })
                  }
              })
                
             
        
    }