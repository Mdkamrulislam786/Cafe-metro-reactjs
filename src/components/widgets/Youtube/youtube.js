import React from "react";
import './youtube.css'

const YouTube = (props) => {
  const videoSrc =
    `https://www.youtube.com/embed/${props.video}`
  return (
    <div className="container">
      <iframe
        className="player"
        type="text/html"
        width="100%"
        height="100%"
        src={videoSrc}
        frameborder="0"
      />
    </div>
  );
};

export default YouTube;
