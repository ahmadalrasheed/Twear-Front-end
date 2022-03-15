import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
function CartScreen() {
  const [qty] = useSearchParams();
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems)
  const {addedToCart} = cartItems
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty.get("qty")));
    }
  }, [dispatch, id, qty]);
  return (
    <>
      <Container>
        {console.log(addedToCart)}
        { addedToCart ? (
          addedToCart.map((item, idx) => {
            return <p key={idx}> : {item.name}</p>;
          })
        ) : (
          <h2>Your Cart is empty</h2>
        )}
      </Container>
    </>
  );
}

export default CartScreen;
