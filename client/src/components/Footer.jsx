import logoImage from "../image/she-code-africa-logo.png";

import { Container, List, ListGroupItem } from "reactstrap";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white py-4">
        <Container className="d-flex justify-content-evenly align-items-center">
          <div>
            <img src={logoImage} alt={logoImage} width="40" height="64" />
          </div>
          <List>
            <ListGroupItem>Event Details</ListGroupItem>
            <ListGroupItem>10th October, 2022</ListGroupItem>
            <ListGroupItem>
              10/12 AdmiraListGroupItemty road, Lekki Phase 1, Lagos Nigeria .
            </ListGroupItem>
            <ListGroupItem>
              Have any questions, reach out to us at Shecodesafrica@gmail.com
            </ListGroupItem>
          </List>

          <List>
            <ListGroupItem>Socials</ListGroupItem>
            <ListGroupItem>Instagram</ListGroupItem>
            <ListGroupItem>Twitter</ListGroupItem>
            <ListGroupItem>LinkedIn</ListGroupItem>
            <ListGroupItem>Facebook</ListGroupItem>
          </List>
        </Container>
        <Container>
          <hr />
          <div className="text-center">
            All rights reserved. She codes africa . 2022 Designed by Sira and
            Iybosa
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
