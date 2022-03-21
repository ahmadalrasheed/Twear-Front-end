import React from "react";
import { Col, Row, Container, Button, Alert, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EmptyCart() {
  const navigate = useNavigate();
  const navigateToHomeScreen = () => {
    navigate("/");
  };
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <link rel="icon" href="" />
            <Image
              src="./images/emptycart.png"
              alt="new-shopping-cart"
              fluid
              rounded
            />
          </Col>
          <Col lg={5}>
            <Alert variant="dark" className="cartAlert">
              <div className="text-md-center">
                <Alert.Heading>Oops! Your Cart is empty!</Alert.Heading>
                <br />
                <p>Looks like you haven't added anything to your cart yet.</p>
              </div>
              <hr />
              <div className="d-flex justify-content-center">
                <Button onClick={() => navigateToHomeScreen()} variant="dark">
                  Shop Now
                </Button>
              </div>
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EmptyCart;
