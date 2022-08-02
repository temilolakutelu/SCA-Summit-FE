import axios from "axios";

import { useState } from "react";

import { Container,Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

const Register = () => {

  const [firstName, setFirstName] = useState("");

    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

    const [error, setError] = useState();

    const [firstNameError, setFirstNameError] = useState(""); //first name error

    const [lastNameError, setLastNameError] = useState(""); //last name error

    const [emailError, setEmailError] = useState(""); //email name error
    

  const SubmitForm = async (e) => {

        e.preventDefault();
    
          // handling error input field at the frontend only 
        if (!firstName) {
    
          setFirstNameError("enter first name")
          
        }
    
        else if (!lastName) {
    
          setLastNameError("enter last name")
          
        }
    
         else if (!email) {
    
          setEmailError("enter email")
          
        } 
        // if it matches users details should be saved to the database
        else {
    
          try {
    
            const registrationDetails = {
    
              firstName,
    
              lastName,
        
              email,
    
              message
    
            };
    
            const Response = await axios.post(`/api/register/user`, registrationDetails);
    
            const { data } = Response;
    
            console.log(data, "data");

    
          } catch (error) {
    
            console.log(error.response.data.message, " : errormessage");
              
            setError("something went wrong");
            
          };
    
        }
    
  };
    
    return (
      
        <Container>
            
            <Form autoComplete="off" className="mt-5" onSubmit={SubmitForm}>
                
                <div className="text-center">

                  <h1 className="Display-4">Register</h1>

                  <p className="lead">Lorem Ipsum Avec Sont Cest</p>
            
                  {setError && <div className="text-danger"> {error} </div>}
            
                </div>

                <Row>
                    
                    <Col md={6}>
                        
                        <FormGroup>
                            
                            <Label>First name*</Label>
                            
                            <Input placeholder="enter your first name" type="text" value={firstName}  onChange={e => setFirstName(e.target.value)} />
                            
                            {!firstName && (<div className="text-danger">{firstNameError}</div>)}

                        </FormGroup>
                        
                    </Col>
                    
                    <Col md={6}>
                        
                        <FormGroup>
                            
                            <Label>Last name*</Label>
                            
                            <Input placeholder="enter your last name" type="text" value={lastName} onChange={e => setLastName(e.target.value) } />
                            
                            {!lastName && (<div className="text-danger">{lastNameError}</div>)}

                        </FormGroup>
                        
                    </Col>
                    
                </Row>
                
                <Row>
                    
                    <Col md={6}>
                        
                        <FormGroup>
                        
                            <Label>Email*</Label>
                            
                            <Input placeholder="enter email address" type="email" value={email} onChange={e => setEmail(e.target.value) } />
                        
                            {!email && (<div className="text-danger">{emailError}</div>)}
                            
                        </FormGroup>
                        
                    </Col>
                    
                    <Col md={6}>
                        
                        <FormGroup>
                            
                            <Label>Lorem ipsum</Label>
                            
                            <Input placeholder="Lorem ipsum" type="text" value={lastName} onChange={e => setLastName(e.target.value) } />
                            
                        </FormGroup>
                        
                    </Col>
                    
                </Row>

                <Col md={6}>
                        
                    <FormGroup>
                    
                        <Label>Message</Label>
                        
                        <Input type="textarea"  className="py-5" value={message} onChange={e => setMessage(e.target.value) } />
                    
                    </FormGroup>
                        
                </Col>
                    
                    
                <div className="position-relative mt-5">

                    <Button id="btnbg" className="p-2 position-absolute top-0 start-50  translate-middle w-50">submit</Button>

                </div>   

            </Form>
            
        </Container>
        
    )
    
};

export default Register;
