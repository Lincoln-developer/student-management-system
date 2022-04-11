import express from"express";
import studentLogin from "../../controllers/accounts/student_login.js";
const router = express.Router();

router.post("/",studentLogin);

export default router;