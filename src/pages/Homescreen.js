import React from "react";
import Product from "../components/Products";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { listProducts } from "../actions/productActions";
import ErrorAlert from "../components/Alert";
import Loading from "../components/Loading";


function Homescreen() {
  const dipatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dipatch(listProducts());
  }, []);

  return (
    <>
      <Container>
        {/* sm -> small screen, md ->medium size screen, lg -> large scale screen, xl-> extra large scale screen */}
        <Row>
          {loading ? (
            <Loading />
          ) : error ? (
            <h3>
              <ErrorAlert error={error}></ErrorAlert>
            </h3>
          ) : (
            products.map((product) => (
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
            ))
          )}
        </Row>
      </Container>
    </>
  );
}

export default Homescreen;
