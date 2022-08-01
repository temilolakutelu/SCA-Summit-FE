import { Container,Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

const Register = () => {

    return (
      
        <Container>
            
            <Form autoComplete="off">
                
                <Row>
                    
                    <Col md={6}>
                        
                        <FormGroup>
                            
                            <Label>First name</Label>
                            
                            <Input placeholder="enter your first name" type="text" />
                            
                        </FormGroup>
                        
                    </Col>
                    
                    <Col md={6}>
                        
                        <FormGroup>
                            
                            <Label>Last name</Label>
                            
                            <Input placeholder="enter your last name" type="text" />
                            
                        </FormGroup>
                        
                    </Col>
                    
                </Row>
                
                <FormGroup>
                    
                    <Label>Email</Label>
                    
                    <Input placeholder="enter email address" type="email" />
                    
                </FormGroup>
                
                <FormGroup>
                    
                    <Label>Message</Label>
                    
                    <Input type="textarea" />
                    
                </FormGroup>
                
                <Button>submit</Button>

            </Form>
            
        </Container>
        
    )
    
};

export default Register;
