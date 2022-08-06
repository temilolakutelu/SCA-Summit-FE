// importation of uer model from the model folder 
const { userRegistration } = require("../model/registerUser");

// generation of one time pass code from the helper folder
const { generateOTP } = require("../helper/generateOtp");

// generation of mail transporter and tickek email from the helper folder
const { mailTransporte, generateEmailTicketTemplate } = require("../helper/mailTransporter");

// registering a user handler 
module.exports.saveUserDetails = async (req, res) => {

    try {

            // destructing of data
            const { firstName, lastName, email,message } = req.body;

            // find an existing user using their email
            const existingUser = await userRegistration.findOne({ email })
        
            // if user has been registered already
            if (existingUser) {
            
                res.status(422).json({ message: "User has already been registered." })

            } else {

                //save the new user data into the database
                const saveDetails = new userRegistration({ firstName, lastName, email,message })
            
                //save user database 
                const saveUser = await saveDetails.save();
            
                // if user hasn't been saved 
                if (!saveUser) {
    
                     res.status(401).json("User has not been saved")
                
                } else {
                
                    //otp:one time password
                    // generaterated otp
                    const OTP = generateOTP();

                    // invoking nodemail transporter function for sending of email
                    const newTransporter = mailTransporte();
                
                    // send email  
                    await newTransporter.sendMail({
                
                        from: "dummy@gmail.com",
                
                        to: saveUser.email,
                    
                        subject: "ticket to Summit",
                    
                        html: generateEmailTicketTemplate(saveUser.firstName, OTP),

                        replyTo: "dummy@gmail.com",
                
                    });
    
                    res.status(201).json({message:"success"});
            
                }

            }
            
           
        
    } catch (error) {
        
        console.log(error);

        res.status(500).json(error)

    }

};