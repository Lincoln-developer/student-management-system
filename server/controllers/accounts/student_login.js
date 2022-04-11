import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import StudentAccount from "../../models/student_account.js";


const studentLogin = (req,res) => {

    //checking job seeker by email
    const student_email = StudentAccount.findOne({email:req.body.email})

    .exec()

    .then(student => {

        if(!student){

            return res.status(401).json({

                message:"Wrong password or email"

            })
        }
        bcrypt.compare(req.body.password,student.password,(err,result) => {

            if(err){

                return res.status(401).json({

                    message:"Wrong password or email"

                })
            }
            if(result){
                const token = jwt.sign(
                    {
                        email:student.email,

                        id:student._id
                    },
                    process.env.JWT_SECRET_KEY,
                    {
                        expiresIn:"1h"
                    }
                )
                return res.status(200).json({

                    message:"User logged in successfully",

                    Token:token

                })
            }
            res.status(401).json({message:"Wrong password or email"})
        })
    })
    .catch(err => {

        return res.status(500).json({

            Error:err

        })
    })
};

export default studentLogin;