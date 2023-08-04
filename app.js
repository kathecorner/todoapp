const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());
app.use(express.static("./public"));

const PORT = 8000;

//routing
app.use("/api/v1/tasks", taskRoute);

//connecting to the database

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
            app.listen(PORT, console.log("the server is running at app.js."));

    } catch(err) {
        console.log(err);
    }
};

start();
