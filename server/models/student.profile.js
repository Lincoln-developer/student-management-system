import Mongoose from "mongoose";

const schema = Mongoose.Schema;

//Structuring student profile creation
const studentProfileSchema = new schema({
    surname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    faculty:{
        type:String,
        required:true
    },
    yearOfStudy:{
        type:Number,
        required:true
    }

}, {collection:"StudentProfileStorage"});

const studentProfile = Mongoose.model("studentProfile", studentProfileSchema);

export default studentProfile;