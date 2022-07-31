// generating otp 
module.exports.generateOTP = () => {
      
  let otp = "";

  for (let i = 0; i <= 3; i++) {
          
    // generating random values 
    const randomValue = Math.round(Math.random() * 9)
          
    otp = otp + randomValue;
          
  }

  return otp

};