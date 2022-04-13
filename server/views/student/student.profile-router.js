import express from "express";
import upload from "../../middleware/upload.js";
import studentProfileCreation from "../../controllers/accounts/student-profile.post.js";
import getStudentProfile from "../../controllers/accounts/student-profile.get.js";
import studentProfileUpdate from "../../controllers/accounts/student_profile.update.js";

const router = express.Router();

/***
 * @param:POST,
 * @method:post method,
 * @description:"Adding user profile"
 */

//Post method to create  a student profile
router.post("/", upload.single("profileImage") ,studentProfileCreation);

//Get method to get all created student profile on the platform
router.get("/", () => {
    console.log("Get student profile");
});

//Get method to get a specific student profile using an id
router.get("/:profile_id", getStudentProfile);

//patch method to update student profile
router.patch("/:student_id", studentProfileUpdate);

//Delete method to delete existing student profile
router.delete("/", () => {
    console.log("Delete student profile")
});

export default router;


