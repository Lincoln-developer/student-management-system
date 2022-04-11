import express from "express";
import "dotenv/config";
import cors from "cors";
import db from "./config/database.js";
const app = express()
//Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

//Handling app routes
import student_account_route_handler from "./views/student/student_account_router.js";
import student_login_route_handler from "./views/student/student_login_route.js";
import studentProfileRouteHandler from "./views/student/student.profile-router.js"



//Connecting to endpoints
app.use("/api/v1/student_account_handler", student_account_route_handler);
app.use("/api/v1/login",student_login_route_handler);
app.use("/api/v1/studentProfile", studentProfileRouteHandler);

//port on which the server is running
const port = process.env.PORT;

app.listen(port, (req, res) => {
    console.log(`server running on port ${port}`)

    //successful connection to the database.
    db.once("open", () => console.log("Database connected successfully"));

    //unsuccessful connection to the database.
    db.on("error", () => console.log("Error connecting to the database")); 
})