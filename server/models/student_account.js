import Mongoose from "mongoose";

const schema = Mongoose.Schema;

const student_profile_schema = new schema({
        surname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
}, {collection:"Student_Account_Storage"});

const StudentAccount = Mongoose.model("StudentAccount", student_profile_schema);

export default StudentAccount;

