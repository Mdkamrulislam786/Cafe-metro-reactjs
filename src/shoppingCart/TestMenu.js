import React from "react";
import jsondata from "../items_info.json";
import MenuItems from "./MenuItems";
import "./testmenu.css";

//Bootsrap
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
//REDUX
import { connect } from "react-redux";
import { addBasket, openModal } from "../actions/addAction";

const TestMenu = (props) => {
  //ITEMS
  const pastries = jsondata.cakesAndPastries.pastries;
  const cakes = jsondata.cakesAndPastries.cakes;
  const burgers = jsondata.fastFoods.burgers;
  const sandwiches = jsondata.fastFoods.sandwiches;

  //LIST OF THE ITEMS
  const findItem = (foodtype) => {
    switch (foodtype) {
      case "pastries":
        return pastries.map((item, i) => {
          return (
            <Col key={i} xs={6} md={3} lg={3} xl={3}>
              <MenuItems
                src={item.img}
                h3={item.name}
                price={item.price}
                itemInfo={() => props.openModal(item.id)}
                addItem={() => props.addBasket(item.id)}
              />
            </Col>
          );
        });

      case "cakes":
        return cakes.map((item, i) => {
          return (
            <Col key={i} xs={6} md={3} lg={3} xl={3}>
              <MenuItems
                src={item.img}
                h3={item.name}
                price={item.price}
                itemInfo={() => props.addBasket(item.id)}
                addItem={() => props.addBasket(item.id)}
              />
            </Col>
          );
        });
      case "burgers":
        return burgers.map((item, i) => {
          return (
            <Col key={i} xs={6} md={3} lg={3} xl={3}>
              <MenuItems
                src={item.img}
                h3={item.name}
                price={item.price}
                itemInfo={() => props.addBasket(item.id)}
                addItem={() => props.addBasket(item.id)}
              />
            </Col>
          );
        });
      case "sandwiches":
        return sandwiches.map((item, i) => {
          return (
            <Col key={i} xs={6} md={3} lg={3} xl={3}>
              <MenuItems
                src={item.img}
                h3={item.name}
                price={item.price}
                itemInfo={() => props.addBasket(item.id)}
                addItem={() => props.addBasket(item.id)}
              />
            </Col>
          );
        });

      default:
        return null;
    }
  };

  //CALLING THE LIST OF THE ITEMS
  return (
    <div className="Collections">
      <Container>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col>
              <Nav className="d-flex flex-row justify-content-center text-center">
                <Nav.Item>
                  <Nav.Link eventKey="first">Cakes & Pastries</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Fast Foods</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h2>Pastries</h2>
                  <Row>{findItem("pastries")}</Row>
                  <h2>Cakes</h2>
                  <Row>{findItem("cakes")}</Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <h2>Burgers</h2>
                  <Row>{findItem("burgers")}</Row>
                  <h2>Sandwiches</h2>
                  <Row>{findItem("sandwiches")}</Row>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

// export default TestMenu;
export default connect(null, { addBasket, openModal })(TestMenu);
