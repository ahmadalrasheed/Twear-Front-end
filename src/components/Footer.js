import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-4">
            CopyRight &copy; T-wear
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
