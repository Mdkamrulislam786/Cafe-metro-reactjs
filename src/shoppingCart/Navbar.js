import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  console.log(props);

  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <>
      <div className="header">
        <h1 className="detail">
          Cafe <span className="name">Metro</span> Shop
        </h1>
        <ul>
          <li>
            <Link to="/MainMenu-Order-Online">
              <i className="fas fa-home main-menu"></i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span>{props.basketProps.basketNumbers}</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
