import React from "react";
import jsondata from "../items_info.json";
import MenuItems from "./MenuItems";

//Bootsrap
import { Container, Row, Col } from "react-bootstrap";
//REDUX
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";

const TestMenu = (props) => {
  const items = jsondata.cakesAndPastries.pastries;

  const finddata = () => {
    return items.map((item, i) => {
      return (
        <Col key={i} xs={6} md={3} lg={3} xl={3}>
          <MenuItems
            src={item.img}
            h3={item.name}
            price={item.price}
            // onClick={() => props.addBasket(item.tagName)}
          />
        </Col>
      );
    });
  };

  return (
    <div className="menu">
      {/* heder */}

      {/* body */}
      <div style={{ textAlign: "center" }}>
        <h2>Pastries</h2>
      </div>
      <Container>
        <Row>{finddata()}</Row>
      </Container>
    </div>
  );
};

export default TestMenu;
