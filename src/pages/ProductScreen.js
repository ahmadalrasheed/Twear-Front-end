import React from "react";
import { useParams } from "react-router-dom";
import Reviews from "../components/Reviews";
import {
  Container,
  Card,
  Image,
  ListGroup,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductScreen(props) {
  const { id } = useParams();
  const [product, getProduct] = useState({});

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_KEY}api/products/${id}`
      );
      let productDetails = data;
      getProduct(productDetails);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <Container>
        <Link className="btn btn-light my-3 border" to="/">
          Go Back
        </Link>
        <Row>
          <Col lg="6" xl="6">
            <Image src={product.image} fluid />
          </Col>
          <Col lg="3" xl="3">
            <ListGroup variant="flush" className="py-3">
              <ListGroup.Item>
                <strong>
                  <h3>{product.name}</h3>
                </strong>
              </ListGroup.Item>
              <ListGroup.Item>
                <Reviews
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color="#FFFF00"
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg="3" xl="3">
            <Card>
              <ListGroup variant="flush" className="m-3">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>{product.price}$</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Brand:</Col>
                    <Col>{product.brand}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="d-grid gap-1">
                  <Button
                    className="btn-block"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
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
