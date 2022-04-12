import studentProfile from "../../models/student.profile.js";

// studentProfileUpdate function updates student profile by changing profile Fields
const studentProfileUpdate = async(req, res) => {
    try {
        //creating an instance of a student
        const id = req.params.student_id;
        const {surname,lastname,course,faculty,yearOfStudy} = req.body;
        const student = await studentProfile.findByIdAndUpdate(
            {_id:id},
            {surname, lastname, course, faculty, yearOfStudy}
        )
        .then(newProfile => {
            return res.status(200).json({
                Profile:newProfile,
                request:{
                    description:'Update student profile information',
                    method:'PATCH',
                    url:'http://localhost:8080/api/v1/studentProfile' + newProfile._id
                }
            })
        })
    }catch(err){
        return res.status(500).json({
            Error:err
        })
    }
}
export default studentProfileUpdate