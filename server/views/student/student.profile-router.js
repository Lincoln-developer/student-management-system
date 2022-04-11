import express from "express";
import studentProfileCreation from "../../controllers/accounts/student-profile.post.js";
import getStudentProfile from "../../controllers/accounts/student-profile.get.js";

const router = express.Router();

/***
 * @param:POST,
 * @method:post method,
 * @description:"Adding user profile"
 */

//Post method to create  a student profile
router.post("/", studentProfileCreation);

//Get method to get all created student profile on the platform
router.get("/", () => {
    console.log("Get student profile");
});

//Get method to get a specific student profile using an id
router.get("/:profile_id", getStudentProfile);
//patch method to update student profile
router.patch("/", () => {
    console.log("update student profile");
});

//Delete method to delete existing student profile
router.delete("/", () => {
    console.log("Delete student profile")
});

export default router;


