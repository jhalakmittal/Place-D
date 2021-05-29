const mongoose=require("mongoose");
const companySchema= new mongoose.Schema({
    Name:{
        type: String,
        require:true
    } ,
    img:{
        type: String,
        require:true
    } ,
    Desc:{
        type: String,
        require:true
    } ,
    nos:{
        type: Number,
        require:true
    } ,
    Date:{
        type: String,
        require:true
    } 
} )

//CREATING COLLECTION
const Company= new mongoose.model("Company",companySchema);
module.exports=Company;

