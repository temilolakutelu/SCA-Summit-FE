const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();

const cors = require("cors");

const { router } = require("./router/userRegistration.route");

// setting the port number 
const PORT = process.env.PORT || 5000;

// intializing the ap
const app = express();

// setting up middlewares globally 
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("api/register/user", router)

// this returns a promise 
mongoose.connect(process.env.CONNECTIONURL, {

    useNewUrlParser: true,
    
    useUnifiedTopology: true
    
}).then(() => app.listen(() => console.log(`server running on port : ${PORT}`)))
    
.catch((error) => console.log(error.message));
    
y