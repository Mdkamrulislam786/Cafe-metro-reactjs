import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";

export const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 5,
          zIndex:100
      }}
  />
);


const Footer = () => (
  <footer id="ContactUs" className="footer">
    <div>
      <Row>
        <Col>
          <div className="footer-logo">
            <p className="rotate"> New </p>

            <h1 class="detail">
              Cafe <span class="name">Metro</span>
            </h1>

            <p className="footerP">Pizaria Pastry Grill</p>
          </div>
        </Col>
        <Col>
          <div>
            <h4>MONDAY-FRIDAY</h4>
            <p>10am-11pm</p>
            <h4>SATURDAY</h4>
            <p>11am-11pm</p>
            <h4>SUNDAY</h4>
            <p>11am-10pm</p>
          </div>
        </Col>
        <Col>
          <div>
            <address>
              <h4>CONTACT & ADDRESS</h4>
              <p>
                809 Thana Road <br /> Savar-1340 Dhaka
                <span><u/></span>
              </p>
              <ColoredLine color="red"/>
              <h4>CALL NOW</h4>
              <p>Telephone: 01834681791</p>
              <p>Telephone: 01834681791</p>
              <p>Email: New-cafe-metro@gmail.com</p>
            </address>
            
          </div>
        </Col>
      </Row>
    </div>
  </footer>
);
export default Footer

