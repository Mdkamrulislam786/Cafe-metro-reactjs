import React, { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import "./sideiconbar.css";

const SideIconBar = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <>
      <div className="icon-bar">
        <a href="https://www.youtube.com/watch?v=PT2_F-1esPk&list=RDk2qgadSvNyU&index=27" rel="noopener noreferrer" target="_blank" className="facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a className="phone" ref={target} onClick={() => setShow(!show)}>
          <i className="fas fa-phone-alt"></i>
        </a>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              Cafe-Metro: +8801826291501 <br /> +8801826291501
            </Tooltip>
          )}
        </Overlay>

        <a href="https://www.youtube.com/watch?v=PT2_F-1esPk&list=RDk2qgadSvNyU&index=27" rel="noopener noreferrer" target="_blank"  className="youtube">
          <i className="fa fa-youtube"></i>
        </a>
        <a href="https://www.youtube.com/watch?v=PT2_F-1esPk&list=RDk2qgadSvNyU&index=27" rel="noopener noreferrer" target="_blank"  className="linkedin">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default SideIconBar;
