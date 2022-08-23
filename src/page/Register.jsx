import axios from "axios";

import { useState } from "react";

import { Container, Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

// modal impotation 
import ShowModal from "../components/Modal";
import SuccessMessage from "../components/SuccessMessage";

const Register = () => {
  
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [error, setError] = useState();

  const [firstNameError, setFirstNameError] = useState(""); //first name error

  const [lastNameError, setLastNameError] = useState(""); //last name error

  const [emailError, setEmailError] = useState(""); //email name error

  const [isOpen, setIsOpen] = useState(false);

  const [Success, setSuccess] = useState(false);

  const SubmitForm = async (e) => {
    
    e.preventDefault();

    // handling error input field
    if (!firstName) {

      setFirstNameError("enter first name")

    } else if (!lastName) {

      setLastNameError("enter last name")

    } else if (!email) {

      setEmailError("enter email")

    }
    // if it matches users details should be saved to the database
    else {

      try {

        const registrationDetails = {

          firstName,

          lastName,

          email,

          message,

        };

         const Response = await axios.post( `/api/register/user`, registrationDetails )

        const { data } = Response;

        setFirstName("");

        setLastName("");

        setEmail("");

        setMessage("");

        if (data.message.includes('success')) {
          
          return setSuccess(true)
          
        }

      } catch (error) {
        
        if (error.response) setError("something went wrong")

        if (error.response.data.message === "User has already been registered.")return setIsOpen(true)
          
      }

    }

  };


  return (

    <>
      {/* success message modal */}
      <SuccessMessage className="text-center" success={Success} isClose={() => { setSuccess(false) }} />
      
      {/* user already exit modal  */}
      <ShowModal className="text-center" open={isOpen} close={() => { setIsOpen(false) }}>User has already been registered.</ShowModal> 

      {/* register title  */}
      <div className="text-center text-light pt-2 pb-3" id="navbarBg">
        
        <h1 className="fs-5">Register</h1>

        <p className="lead">Lorem Ipsum Avec Sont Cest</p>

        {setError && <div className="text-danger"> {error} </div>}

      </div>

      {/* form field  */}
      <Container>
        
        <Form autoComplete="off" className="mt-5 text-capitalize" onSubmit={SubmitForm}>
          
          {/* first row for both first and last name  */}
          <Row>

            {/* first name field  */}
            <Col md={6}>

              <FormGroup>

                <Label className="fw-bold">First name:*</Label>

                <Input placeholder="enter your first name" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} id="customtextarea" className="p-2"/>
                
                {!firstName && (<div className="text-danger">{firstNameError}</div>)}

              </FormGroup>

            </Col>

            {/* last name field  */}
            <Col md={6}>

              <FormGroup>

                <Label className="fw-bold">Last name:*</Label>

                <Input placeholder="enter your last name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} id="customtextarea" className="p-2"/>

                {!lastName && (<div className="text-danger">{lastNameError}</div>)}

              </FormGroup>

            </Col>

          </Row>

          {/* second row for email  */}
          <Row>

            {/* email field  */}
            <Col md={6}>

              <FormGroup>

                <Label className="fw-bold">Email:*</Label>

                <Input placeholder="enter email address" type="email" value={email}  onChange={(e) => setEmail(e.target.value)} id="customtextarea" className="p-2"/>

                {!email && <div className="text-danger">{emailError}</div>}

              </FormGroup>

            </Col>

            <Col md={6}>

              <FormGroup>

                <Label className="fw-bold">Lorem ipsum:</Label>

                <Input placeholder="Lorem ipsum" type="text" id="customtextarea" className="p-2"/>
                
              </FormGroup>

            </Col>

          </Row>

          {/* message field  */}
          <Col md={6}>

            <FormGroup>

              <Label className="fw-bold">Message:</Label>

              <Input placeholder="type your message in here" type="textarea" className="p-2" rows='10' id="customtextarea" value={message} onChange={(e) => setMessage(e.target.value)} />
              
            </FormGroup>

          </Col>

          {/* button  */}
          <div className="position-relative mt-5" id="btn">

            <Button id="btnbg" className="position-absolute top-0 start-50  translate-middle w-50 py-3"> Submit</Button>

          </div>

        </Form>

      </Container>
      
    </>
  );
};

export default Register;
