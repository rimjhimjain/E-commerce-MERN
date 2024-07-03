const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");


dotenv.config({path:"Backend/config/config.env"});

// connecting to DB
connectDB();
app.listen(process.env.PORT,() => {
    console.log(`Server is working on https://localhost:${process.env.PORT}`)
})