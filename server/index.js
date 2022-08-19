const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config();

const cors = require("cors");

const { router } = require("./router/userRegistration.route");

// setting the port number 
const PORT = process.env.PORT || 4000;

// intializing the ap
const app = express();

// setting up middlewares globally 
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin:"http://localhost:3000" }));

app.use(router);

// this returns a promise 
mongoose.connect(process.env.CONNECTIONURL, {

    useNewUrlParser: true,
    
    useUnifiedTopology: true
    
}).then(() => app.listen(PORT,() => console.log(`server running on port : ${PORT}`)))
    
.catch((error) => console.log(error.message))
