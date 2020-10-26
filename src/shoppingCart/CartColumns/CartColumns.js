import React from "react";
import { Container, Row, Col } from "react-bootstrap";

let data = [
  "products",
  "name",
  "price",
  "quantity",
  "remove",
  "total",
];

const CartColumns = () => {
  return (
    <div>
      <Container fluid className="text-center d-lg-block">
        <Row>
          {data.map((item, index) => {
            return (
              <Col className="mx-auto" xs={2} key={index}>
                <p
                  className="text-uppercase cart-col-p"
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    fontFamily: "Robotto",
                  }}
                >
                  {item}
                </p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CartColumns;
