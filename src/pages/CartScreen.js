import React from "react";
import { useParams , useSearchParams} from "react-router-dom";

function CartScreen() {
  const [qty] = useSearchParams();
  const { id } = useParams();
  return (
    <>
      Welcome to the CartScreen , id = {id} qty = {qty.get('qty')} !!!!
      </>
  );
}

export default CartScreen;
