const nodemailer = require("nodemailer");

const { userRegistration } = require("../model/registerUser");

module.exports.saveUserDetails = async (req, res) => {

    try {

        const { firstName, lastName, email } = req.body;
        
        if (!firstName) {
            
            res.json("please input your first name")

        } else if (!lastName) {
            
            res.json("please input your last name")

        } else if (!email) {

            res.json("please input your email")
            
        } else {

            const saveDetails = await new userRegistration.save()
            
            console.log(saveDetails);

            res.status(200).json(saveDetails)

        }
        
    } catch (error) {
        
        console.log(error);

        res.status(501).json(error)

    }

};