import axios from "axios";

import { useState } from "react";

import {
  Container,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

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
      setFirstNameError("enter first name");
    } else if (!lastName) {
      setLastNameError("enter last name");
    } else if (!email) {
      setEmailError("enter email");
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

        const Response = await axios.post(
          `/api/register/user`,
          registrationDetails
        );

        const { data } = Response;

        console.log(data, "data");
      } catch (error) {
        console.log(error.response.data, " : errormessage");

        setError("something went wrong");
      }
    }
  };

  return (
    <>
      <div className="text-center text-light pt-2 pb-3" id="navbarBg">
        <h1 className="fs-5">Register</h1>

        <p className="lead">Lorem Ipsum Avec Sont Cest</p>

        {setError && <div className="text-danger"> {error} </div>}
      </div>
      <Container>
        <Form
          autoComplete="off"
          className="mt-5 text-capitalize"
          onSubmit={SubmitForm}
        >
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className="fw-bold">First name:*</Label>

                <Input
                  placeholder="enter your first name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)} id="customtextarea"
                />

                {!firstName && (
                  <div className="text-danger">{firstNameError}</div>
                )}
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label className="fw-bold">Last name:*</Label>

                <Input
                  placeholder="enter your last name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)} id="customtextarea"
                />

                {!lastName && (
                  <div className="text-danger">{lastNameError}</div>
                )}
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label className="fw-bold">Email:*</Label>

                <Input
                  placeholder="enter email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} id="customtextarea"
                />

                {!email && <div className="text-danger">{emailError}</div>}
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label className="fw-bold">Lorem ipsum:</Label>

                <Input
                  placeholder="Lorem ipsum"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)} id="customtextarea"
                />
              </FormGroup>
            </Col>
          </Row>

          <Col md={6}>
            <FormGroup>
              <Label className="fw-bold">Message:</Label>

              <Input
                type="textarea"
                className="py-5"id="customtextarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormGroup>
          </Col>

          <div className="position-relative mt-5" id="btn">
            <Button
              id="btnbg"
              className="position-absolute top-0 start-50  translate-middle w-50 py-3"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Register;
