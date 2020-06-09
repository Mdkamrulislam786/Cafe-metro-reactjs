import React from "react";
import HomeMain from "./Header/HeaderMain/headermain";
import MenuHome from "./Body/Menu/menu-home";
import CelebCarousel from "../widgets/Carousoul/carousole";
import { Container, Row, Col } from "react-bootstrap";
import Star from '../widgets/StarRating/starrating'

const Home = () => {
  return (
    <>
      <div>
        <HomeMain />
        <MenuHome
          className={"MenuHomeImg"}
          h3="EXPLORE"
          p="OUR DELIICOUS MENU"
          link="/MainMenu"
          linkTo="/MainMenu"
          cta="Show Me"
        />
        <Container fluid>
          <Row>
            <Col md={8}>
              <MenuHome
                className={"environment"}
                h3="EXPLORE"
                p="THE ENVIRONMENT"
                cta="Explore"
                video="Hu3XUSAcK2I"
              />
            </Col>
            <Col md={4}>
              <MenuHome
                className={"chef"}
                p="OUR CHEFS"
                cta="Show Me"
                video="7dIuLd9QoIo"
              />
            </Col>
          </Row>
        </Container>

        <MenuHome
          className={"masterkitchen"}
          h3="EXPLORE"
          p="THE MASTER KITCHEN"
          cta="Show Me"
          video="vUFEipgd2s0"
        />
        <CelebCarousel h3="CLEBRITIES" p="AT CAFE METRO" />
        <MenuHome className={"customer-reviews"} h3="HAPPY CUSTOMERS REVIEWS" cta="Show Me"
          video="vUFEipgd2s0"/>
        <Star/>
      </div>
    </>
  );
};

export default Home;
