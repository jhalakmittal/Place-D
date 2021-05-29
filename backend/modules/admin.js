const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
env.config();
const adminsignupdetailsSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true,
        index:{
            unique : true,
        }
    },
    email : {
        type:String,
        required:true,
        index:{
            unique : true,
        }
    } ,
    password : {
        type:String,
        required:true, 
    } ,
    confirmpassword : {
        type:String,
       required:true,
        
    } ,
    role : {
        type : String ,
        enum : ['user' , 'admin'] ,
        default : 'user'
    } ,
    date : {
        type: Date ,
        default : Date.now

    } ,
    tokens : [
        {
            token : {
                type : String ,
                required:true
            }
        }
    ]
});
    

adminsignupdetailsSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=bcrypt.hashSync(this.password,12);
        this.confirmpassword=bcrypt.hashSync(this.confirmpassword,12);
    }
    next();
});
adminsignupdetailsSchema.methods = {
    authenticate :  function(password){
        return  bcrypt.compareSync(password , this.confirmpassword);
    }
}
adminsignupdetailsSchema.methods.generateAuthToken = async function(){
    try{
    const token = jwt.sign({_id : this._id,role : this.role},process.env.JWT_SECRET);
    console.log(token);
                    this.tokens = this.tokens.concat({token:token});
                     await this.save();
                     return token;
    }
    catch(err){
        console.log(err);
            
        }
    }


module.exports = mongoose.model('adminsignupdetails',adminsignupdetailsSchema);
