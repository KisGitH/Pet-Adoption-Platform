import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    catagory:{
        type: String,
        required : true
    },
    gender:{
        type: String,
        required : true
    },
    age:{
        type: String,
        required : true
    },
    image:{
        type: String,
        required : true
    },
},{
    timestamps: true // createdAt, updatedAt
});

const Pet = mongoose.model('Pet', petSchema);

export default Pet;