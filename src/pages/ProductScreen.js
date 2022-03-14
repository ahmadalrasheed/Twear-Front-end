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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import ErrorAlert from "../components/Alert";
import Loading from "../components/Loading";
import Form from "react-bootstrap/Form";
import { useNavigate  } from "react-router-dom";

function ProductScreen() {
  let history = useNavigate();
  const { id } = useParams();
  const [qty, qtyControl] = useState(1);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.productListDetails);
  const { productDetails, error, loading } = product;

  const addToCartHandler = ()=>{
    history(`/cart/${id}?qty=${qty}`);
  }

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <h3>
          <ErrorAlert error={error}></ErrorAlert>
        </h3>
      ) : (
        <Container>
          <Link className="btn btn-light my-3 border" to="/">
            Go Back
          </Link>
          <Row>
            <Col lg="6" xl="6">
              <Image
                src={
                  `${process.env.REACT_APP_ACCESS_IMAGE_LINK}` +
                  `${productDetails.image}`
                }
                fluid
              />
            </Col>
            <Col lg="3" xl="3">
              <ListGroup variant="flush" className="py-3">
                <ListGroup.Item>
                  <strong>
                    <h3>{productDetails.name}</h3>
                  </strong>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Reviews
                    value={productDetails.rating}
                    text={`${productDetails.numReviews} reviews`}
                    color="#FFFF00"
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${productDetails.price}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {productDetails.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg="3" xl="3">
              <Card>
                <ListGroup variant="flush" className="m-3">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>{productDetails.price}$</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {productDetails.countInStock > 0
                          ? "In Stock"
                          : "Out of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Brand:</Col>
                      <Col>{productDetails.brand}</Col>
                    </Row>
                  </ListGroup.Item>
                  { (productDetails.countInStock > 0) && (
                    <ListGroup.Item className="d-grid gap-1">
                      <Form.Group className="my-1">
                        <Row>
                          <Col xs="auto" lg="6" className="my-1">
                            Quantity:
                          </Col>
                          <Col xs="auto" lg="6">
                            <Form.Control as="select" onChange={(e)=> qtyControl(e.target.value)} value={qty}>
                            {[...Array(productDetails.countInStock).keys()].map(item =>(
                              <option key={item+1} value={item+1} >{item+1}</option>
                            )
                            )}
                              
                      
                            </Form.Control>
                          </Col>
                        </Row>
                      </Form.Group>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item className="d-grid gap-1">
                    <Button
                      onClick={addToCartHandler}
                      className="btn-block"
                      disabled={productDetails.countInStock === 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
    
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default ProductScreen;
