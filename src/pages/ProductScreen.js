import React from "react";
import { useParams } from "react-router-dom";
import products from "../product";
import Reviews from "../components/Reviews";
import {
  Container,
  Card,
  Image,
  ListGroup,
  Row,
  Col,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductScreen(props) {
  const { id } = useParams();
  const selectedProduct = products.find((product) => product._id == id);
  return (
    <>
      <Container>
        <Link className="btn btn-light my-3 border" to="/">
          Go Back
        </Link>
        <Row>
          <Col lg="6" xl="6">
            <Image src={selectedProduct.image} fluid />
          </Col>
          <Col lg="3" xl="3">
            <ListGroup variant="flush" className="py-3">
              <ListGroup.Item>
                <strong>
                  <h3>{selectedProduct.name}</h3>
                </strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <Reviews value={selectedProduct.rating} text={`${selectedProduct.numReviews} reviews`} color='#FFFF00' />
              </ListGroup.Item>
              <ListGroup.Item>
                Price: ${selectedProduct.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {selectedProduct.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg="3" xl="3">
            <Card>
            <ListGroup variant="flush" className="m-3">
              <ListGroup.Item>
                <Row>
                <Col>Price:</Col>
                <Col>{selectedProduct.price}$</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>{(selectedProduct.countInStock > 0) ? "In Stock": "Out of Stock"}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                <Col>Brand:</Col>
                <Col>{selectedProduct.brand}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="d-grid gap-1">
                <Button className="btn-block"  disabled={selectedProduct.countInStock == 0}>Add To Cart</Button>
              </ListGroup.Item>
            </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductScreen;
