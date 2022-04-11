import bcrypt from "bcryptjs";
import StudentAccount from "../../models/student_account.js";

/*
  The StudentSignup function handles student account creation for each new student
  enrolled for a vacancy.
  For each account creation, the registered email is first checked whether it exists,
  if it exists, an error is thrown. If it doesn't exist, the password of the email is
  firt hashed and then the email and the password are stored in the database to create
  student account.
*/

const StudentSignup = async(req, res) => {
    try{

        //Destructuring StudentAccount credentials to access them from req.body
        const {surname, lastname, email, password:hash} = req.body;

        //hashing the password for the new account to be registered
        const password = await bcrypt.hash(hash, 10);

        //creating a new instance of the student account.
        const newStudent = new StudentAccount({surname, lastname, email, password});

        //Saving the created instance of the student account.
        await newStudent.save()

            .then(created_student_account => {

                return res.status(200).json({

                    Account_Status:"Account created successfully",

                    Student_Account:created_student_account
                })
            })
            
            .catch(err => {

                console.log(err);

            })

    }catch(err){

        console.log(err)
    }
}

export default StudentSignup;