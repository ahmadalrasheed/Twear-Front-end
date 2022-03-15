import { ADD_TO_CART } from "../constants/addToCartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_KEY}api/products/${id}`
  );
  const addedToCart = JSON.parse(localStorage.getItem("addedToCart"));
  let itemAlreadyInCart;
  addedToCart
    ? (itemAlreadyInCart = addedToCart.filter(
        (item) => item._id === Number(id)
      ))
    : localStorage.setItem("addedToCart", JSON.stringify([{...data,qty:Number(qty)}]));

  if (addedToCart && itemAlreadyInCart.length == 0) {
    addedToCart.push({...data , qty:Number(qty)});
    localStorage.setItem("addedToCart", JSON.stringify(addedToCart));
  }

  dispatch({
    type: ADD_TO_CART,
    payload: JSON.parse(localStorage.getItem("addedToCart")),
  });
};
