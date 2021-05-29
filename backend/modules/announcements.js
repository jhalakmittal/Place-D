const mongoose=require("mongoose");
const announcementSchema= new mongoose.Schema({
    announce:{
        type: String,
        required:true
    } 
} )

//CREATING COLLECTION
const Announcement = new mongoose.model("Announcement",announcementSchema);
module.exports=Announcement;

