import { Container, List, ListGroupItem } from "reactstrap";

import logoImage from "../image/she-code-africa-logo.png";

const Footer = () => {

  return (

    <div>
      
      <footer className="bg-dark text-white py-4 footer">

        <Container className="d-flex justify-content-evenly align-items-center">

          <div>

            <img src={logoImage} alt={logoImage} width="40" height="64" />

          </div>

          <List>

            <ListGroupItem className="fs-5 fw-bold mb-3">Event Details</ListGroupItem>

            <ListGroupItem className="fs-6 mb-3">10th October, 2022</ListGroupItem>

            <ListGroupItem className="fs-6 mb-3">10/12 AdmiraListGroupItemty road, Lekki Phase 1, Lagos Nigeria.</ListGroupItem>

            <ListGroupItem className="fs-6 ">Have any questions, reach out to us at Shecodesafrica@gmail.com</ListGroupItem>

          </List>

          <List>

            <ListGroupItem className="fs-5 fw-bold mb-3">Socials</ListGroupItem>

            <ListGroupItem className="fs-6 mb-3">Instagram</ListGroupItem>

            <ListGroupItem className="fs-6 mb-3">Twitter</ListGroupItem>

            <ListGroupItem className="fs-6 mb-3">LinkedIn</ListGroupItem>

            <ListGroupItem className="fs-6">Facebook</ListGroupItem>

          </List>

        </Container>

        <Container>

          <hr />

          <div className="text-center fs-6 my-3 ">All rights reserved. She codes africa . 2022 Designed by Sira and Iyobo</div>

        </Container>

      </footer>

    </div>

  )

};

export default Footer;
