const mongoose = require("mongoose");

const { Schema } = mongoose;

const usersSchema = new Schema({

    firstName: {

        type: String,

        required: true,

        lowerCase:true,
        
        trim: true
        
    },

    lastName: {

        type: String,

        required: true,

        lowerCase:true,
        
        trim: true
        
    },

    email: {

        type: String,

        required: true,
            
        lowerCase:true,
            
        trim: true,

    }
    
},{timestamps:true})

module.exports.userRegistration = mongoose.model("userRegistration", usersSchema);