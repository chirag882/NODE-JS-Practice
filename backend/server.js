const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// config 
dotenv.config({path:"backend/config/config.env"});

// connecting to database
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on localhost: ${process.env.PORT}`)
})