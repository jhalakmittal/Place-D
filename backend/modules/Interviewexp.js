const mongoose = require('mongoose');
const interviewexpSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    imgurl : {
        type:String
    } ,
    companyname : {
        type:String,
        required:true

    } ,
    experience : {
        type:String,
        required:true
    }

});
module.exports = mongoose.model('interviewexp',interviewexpSchema);