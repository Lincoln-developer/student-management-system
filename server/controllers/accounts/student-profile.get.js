import studentProfile from "../../models/student.profile.js";

const getStudentProfile = (req, res) => {
    const id = req.params.profile_id;
    const fetchStudentProfile = studentProfile.findById({_id:id})
    .exec()
    .then(studentProfile => {
        return res.status(200).json({
            Profile:{
                studentProfile
            },
            request:{
                description:'get specific student profile',
                method:'GET',
                url:'http://localhost:8080/api/v1/studentProfile/' + studentProfile._id
            }
        })
    })
    .catch(err => {
        return res.status(500).json({
            Error:err
        })
    })
}

export default getStudentProfile;