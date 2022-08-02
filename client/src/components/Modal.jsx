
import { Container, Button } from "reactstrap";

// modal css
import "./modal.css";

function Modal({ open }) {


    // resend code  fxn 
    const reSendCode = async (e) => {

        e.preventDefault();

        

    }

    if (!open) {
      
        return null;
        
    } else {
        
        return (
        
            <>
                
            <div className="overlay">
                
                    <div className="modalContainer">

                    <p> 
                        
                        Sorry your account hasn't been verified, click on the resend button to verify account
                        
                    </p>

                    <Button onClick={reSendCode}>
                        
                        Resend Code
                        
                    </Button>
                     
                </div>
                
            </div>
                
            </>
            
        );
        
    }
    
}

export default Modal;
