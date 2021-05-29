const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    description: {
        type: [String],
        required: true,
    }

});

module.exports={
    Post:mongoose.model("posts", PostSchema),
};