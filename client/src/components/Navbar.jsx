import { useState } from "react";

import {Button, Navbar, Nav, NavbarBrand, NavbarToggler,Collapse, NavItem, NavLink } from "reactstrap";

import logoImage from "../image/she-code-africa-logo.png";

const NavBar = () => {

    const [click, setClick] = useState(false);

    const toggle = () => setClick(!click);

    return (

        <Navbar id="navbarBg" className="py-2 px-5" expand="md">
            
            <NavbarBrand>

                <img src={logoImage} alt={logoImage} width="40" height="64"/>

            </NavbarBrand>
            
            <NavbarToggler onClick={toggle} className="shadow-sm" />
            
            <Collapse isOpen={click} navbar>
                
                <Nav  className="m-auto" navbar>


                    <NavItem>
                        
                        <NavLink href="#home" className="text-light">Home</NavLink>  

                    </NavItem>
                    
                    <NavItem>
                        
                        <NavLink href="#about" className="text-light">About</NavLink>
                        
                    </NavItem>
                    
                    <NavItem>
                        
                        <NavLink href="#speakers" className="text-light">Speakers</NavLink>
                        
                    </NavItem>

                    
                    <NavItem>
                        
                        <NavLink href="#schedules" className="text-light">Schedules</NavLink>
                        
                    </NavItem>

                    
                </Nav>

                <Button color="light" id="RegisterBtn" href="signup">Register</Button>
                
            </Collapse>
            
       </Navbar> 
    );
    
};

export default NavBar;
