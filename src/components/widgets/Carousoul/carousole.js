import React from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import "./carousole.css";
import solo from "../../../assets/celeb.jpg";
import solos from "../../../assets/celebs1.jpg";
import soloz from "../../../assets/celebz.jpg";

const CelebCarousel = (props) => {
  return (
    <div className="CelebCarousel">
      <Container fluid>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <Image src={solo}   className="carousel-img"/>
                <Carousel.Caption>
                  <h3>{props.h3}</h3>
                  <p>
                    {props.p}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
      
              <Carousel.Item>
                <Image src={solos} className="carousel-img"/>

                <Carousel.Caption>
                  <h3>JENNY</h3>
      
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={soloz}  className="carousel-img"/>

                <Carousel.Caption>
                  <h3>NAKAMORA</h3>
                
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </Col>
            <Col>
            <Carousel>
              <Carousel.Item>
                <Image src={solo}   className="carousel-img"/>
                <Carousel.Caption>
                  <h3>{props.h3}</h3>
                  <p>
                    {props.p}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
      
              <Carousel.Item>
                <Image src={solos} className="carousel-img"/>

                <Carousel.Caption>
                  <h3>JENNY</h3>
      
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={soloz}  className="carousel-img"/>

                <Carousel.Caption>
                  <h3>NAKAMORA</h3>
                
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </Col>
            <Col>
            <Carousel>
              <Carousel.Item>
                <Image src={solo}   className="carousel-img"/>
                <Carousel.Caption>
                  <h3>{props.h3}</h3>
                  <p>
                    {props.p}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
      
              <Carousel.Item>
                <Image src={solos} className="carousel-img"/>

                <Carousel.Caption>
                  <h3>JENNY</h3>
      
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src={soloz}  className="carousel-img"/>

                <Carousel.Caption>
                  <h3>NAKAMORA</h3>
                
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CelebCarousel;
