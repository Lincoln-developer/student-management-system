import express from "express";
import StudentSignup from "../../controllers/accounts/student_signup.js";

const router = express.Router();

/**
 * @description: -Posting student account creation.
 *               -Getting all student accounts.
 *               -Getting a specific student account
 *               -Deleting a specific student account.
 *               -Updating a specific student account.
 * @method:POST, GET, DELETE, PATCH.
 * @routes StudentSignup,            
*/

//Route for storing created student account.
router.post("/", StudentSignup);

//Router to get all student accounts stored in the database.
router.get("/",);

//Route to get specfic student account 
router.get("/:studentId",);

//Router  to delete a specific student account by id.
router.delete("/:studentId",);

//Router to update a student account's email or password
router.patch("/:studentId",);

export default router;

