import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { addToCart , getCartItems} from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";

import Cart from '../components/Cart'
function CartScreen() {
  const [qty] = useSearchParams();
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems)
  const {addedToCart} = cartItems
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty.get("qty")));
    }else{
      dispatch(getCartItems());
    }
  }, [dispatch, id, qty]);
  return (
    <>
        {addedToCart && <Cart addedToCart={addedToCart}/>}
        {!addedToCart && <EmptyCart />}
    </>
  );
}

export default CartScreen;
