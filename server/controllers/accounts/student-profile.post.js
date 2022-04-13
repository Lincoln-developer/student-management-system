import studentProfile from "../../models/student.profile.js";

const studentProfileCreation = (req, res) => {

    //Obtaining student profile fields
    const {image= req.file.path,surname, lastname, course, faculty, yearOfStudy} = req.body;

    //Creating an instance of a new student profile created
    const newStudentProfile = studentProfile.create(
        {image,surname, lastname, course, faculty, yearOfStudy}
    )
    .then(profile => {

        res.status(200).json({

            profile_status:"profile created successfully",

            student:{
                image:profile.image,
                surname:profile.surname,
                lastname:profile.lastname,
                course:profile.course,
                faculty:profile.faculty,
                yearOfStudy:profile.yearOfStudy
            },
            request:{

                description:"get created student profile",

                method:"GET",

                url:"http://localhost:8080/api/v1/studentProfile" + profile._id
            }
        })
    })
    .catch(err => {

        res.status(500).json({

            Error:err,

            Error_Status:"INTERNAL_SERVER_ERROR"
        })
    })
}

export default studentProfileCreation;