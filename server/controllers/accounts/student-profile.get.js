import StudentAccount from "../../models/student_account.js";

const getStudentProfile = async(req, res) => {
    try{
        const student_id = req.params.profile_id;
        const fetchStudentProfile = await StudentAccount.findById(student_id)
        .exec()
        .select('surname,lastname,course,faculty,yearOfStudy')
        .then(studentProfile => {
            return res.status(200).json({
                Profile:{
                    studentProfile
                },
                request:{
                    description:'get specific student profile',
                    method:'GET',
                    url:'http://localhost:8080/api/v1/studentProfile/'+ "/" + studentProfile.profile_id
                }
            })
        })
    }catch(err){
        return res.status(500).json({
            error:err
        })
    }
}

export default getStudentProfile;