import Mongoose from "mongoose";

//making a connection to the database
Mongoose.connect(process.env.database_url,(error) => {
    return error
})

const db = Mongoose.connection;

export default db;