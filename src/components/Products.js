import React from "react";
import { Card, Button } from "react-bootstrap";
import Reviews from "../components/Reviews";
import { Link } from 'react-router-dom'

function Product({ product }) {
  return (
    <>
    
        <Card className="my-3 py-3 px-3 rounded">
          <Link to={`/product/${product._id}`}>
            <Card.Img src={`${process.env.REACT_APP_ACCESS_IMAGE_LINK}`+`${product.image}`} />
          </Link>
          <Card.Body>
            <Link
              className="text-decoration-none"
              to={`/product/${product._id}`}
            >
              <Card.Title as="div">
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>
            <Card.Text as="div">
              <div className="my-3">
                <Reviews
                  value={product.rating}
                  text={`${product.numReviews} Reviews`}
                  color={`#FFFF00`}
                />
              </div>
            </Card.Text>
            <Card.Text as="h3">{product.price}</Card.Text>
            <Button variant="dark">Add To cart</Button>
          </Card.Body>
        </Card>
  
    </>
  );
}

export default Product;
