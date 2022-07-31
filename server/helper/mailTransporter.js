const nodemailer = require("nodemailer");

module.exports.mailTransporte = () => nodemailer.createTransport({

    service: process.env.SERVICEMAIL,

    auth: {
            
        user: process.env.AUTH_USER,

        pass: process.env.AUTH_PASSCODE,
            
    }
    
});

module.exports.generateEmailTicketTemplate = (firstName, code) => {
    
    return `
  
    <!DOCTYPE html>

    <html lang="en">

        <head>

        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ticket</title>
    
        <style>

                @media only screen and (max-width: 620px) {

                h1 {

                    font-size: 20px;
                    padding: 5px;
                    
                }

                }

        </style>

        </head>
    
        <body>

            <div>

                <div style = " max-width: 620px; margin: 0 auto; font-family: sans-sarif; color: #272727; ">

                    <h1 style = " background-color: #f6f6f6; padding: 10px; text-align: center; color: 272727; ">

                        Hi ${firstName},

                    </h1>

                    <h2>loremhjvl r ds hkubewsviuer oigluefwllhjbkyfgdsk</h2>

                    <h3>If yes </h3>
            
                    <p>this the code which is your entry ticket to the summit:</p>

                    <p style=" width: 80px; margin: 0 auto; font-weight: bold; text-align: center; background-color: #f6f6f6; border-radius: 5px; font-size: 25px;">

                        ${code}

                    </p>
            
                    <p>See you there!</p>
            
                    <p>Best regards,</p>
            
                    <p> SheCode team.</p>
            
                </div>
        
            </div>

        </body>

  </html>`
    
};