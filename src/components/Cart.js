import React from "react";
import {
  Col,
  Row,
  Container,
  Image,
  Form,
  Card,
  ListGroup,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getCartItems } from "../actions/cartActions";
import { useNavigate } from "react-router-dom";

function Cart({ addedToCart }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updateQuantity = (e, id) => {
    const cartItems = JSON.parse(localStorage.getItem("addedToCart"));
    cartItems.map((item) => {
      if (item._id == id) {
        item.qty = Number(e);
      }
    });
    localStorage.setItem("addedToCart", JSON.stringify(cartItems));
    dispatch(getCartItems());
  };
  const proceedToCheckoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  const removeItem = async (id) => {
    const cartAfterRemove = addedToCart.filter((item) => item._id != id);
    if (cartAfterRemove.length == 0) {
      localStorage.removeItem("addedToCart");
      navigate("/cart");
    } else {
      await localStorage.setItem("addedToCart", JSON.stringify(cartAfterRemove));
    }
    dispatch(getCartItems());
  };
  return (
    <div>
      <Container>
        <h2>Shopping Cart</h2>
        <Row className="py-3">
          <Col lg={8}>
            {addedToCart.map((item, idx) => {
              return (
                <Row key={idx}>
                  <Col lg={2}>
                    <div className="py-1">
                      <Image
                        src={
                          `${process.env.REACT_APP_ACCESS_IMAGE_LINK}` +
                          `${item.image}`
                        }
                        rounded
                        fluid
                      />
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="cartElements">{item.name}</div>
                  </Col>
                  <Col lg={2}>
                    <div className="cartElements">
                      <p>${item.price}</p>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="cartElements">
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          updateQuantity(e.target.value, item._id)
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((element) => (
                          <option key={element + 1} value={element + 1}>
                            {element + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </div>
                  </Col>
                  <Col lg={1}>
                    <div className="cartElements">
                      <span id="trashIcon" onClick={() => removeItem(item._id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </span>
                    </div>
                  </Col>
                  <hr></hr>
                </Row>
              );
            })}
          </Col>

          <Col lg={4}>
            <Card>
              <ListGroup variant="flush" className="py-3">
                <ListGroup.Item className="py-3">
                  <strong>
                    <h2>
                      SubTotal (
                      {addedToCart.reduce((acc, item) => acc + item.qty, 0)})
                      items
                    </h2>
                  </strong>
                  Total: $
                  {addedToCart
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </ListGroup.Item>

                <ListGroup.Item className="d-grid gap-1">
                  <Button
                    type="button"
                    className="btn-block"
                    onClick={() => proceedToCheckoutHandler()}
                  >
                    Proceed To checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
