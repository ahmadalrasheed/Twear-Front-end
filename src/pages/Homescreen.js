import React from "react";
import Product from "../components/Products";
import { Container, Row, Col } from "react-bootstrap";
import products from "../product";

function Homescreen() {
  return (
    <>
      <Container>
        <Row>
          {/* sm -> small screen, md ->medium size screen, lg -> large scale screen, xl-> extra large scale screen */}
          {products.map((product) => (
              <Col
                className="py-3 px-3"
                sm={12}
                md={3}
                lg={4}
                xl={3}
                key={product._id}
              >
                <Product product={product} />
              </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Homescreen;
