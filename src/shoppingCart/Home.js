import React from "react";
import MenuItems from "./MenuItems";
import cake from "../images/cake-1.jpeg";
import cake1 from "../images/cake-2.jpeg";
import doughnut from "../images/doughnut-2.jpeg";
import pastry from "../assets/pastry.jpg";
import Burger from "../images/burger.jpg";
import Sandwich from "../images/sandwich.jpg";
import Swarma from "../images/swarma.jpg";
import SubSandwich from "../images/subsandwich.jpg";
//REDUX
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";

const MainMenuHome = (props) => {
  return (
    <>
      <div>
        <h2>Cakes & Pastries</h2>
        <div className="container-menu">
          <MenuItems
            src={cake}
            h3="Choclate Cake"
            price="150tk"
            onClick={() => props.addBasket("choclateCake")}
          />
          <MenuItems
            src={cake1}
            h3="Birthday Cake"
            price="120tk"
            onClick={() => props.addBasket("birthdayCake")}
          />
          <MenuItems
            src={doughnut}
            h3="Doughnut"
            price="80tk"
            onClick={() => props.addBasket("doughnut")}
          />
          <MenuItems
            src={pastry}
            h3="Blueberry-pastry"
            price="90tk"
            onClick={() => props.addBasket("pastry")}
          />
          <MenuItems
            src={cake}
            h3="Choclate Cake"
            price="150tk"
            onClick={() => props.addBasket("choclateCake")}
          />
          <MenuItems
            src={cake1}
            h3="Birthday Cake"
            price="120tk"
            onClick={() => props.addBasket("birthdayCake")}
          />
          <MenuItems
            src={doughnut}
            h3="Doughnut"
            price="80tk"
            onClick={() => props.addBasket("doughnut")}
          />
          <MenuItems
            src={pastry}
            h3="Blueberry-pastry"
            price="90tk"
            onClick={() => props.addBasket("pastry")}
          />
        </div>

        <h2>Fast Foods</h2>
        <div className="container-menu">
          <MenuItems
            src={Burger}
            h3="Burger"
            price="150tk"
            onClick={() => props.addBasket("choclateCake")}
          />
          <MenuItems
            src={Sandwich}
            h3="Sandwich"
            price="120tk"
            onClick={() => props.addBasket("birthdayCake")}
          />
          <MenuItems
            src={Swarma}
            h3="Swarma"
            price="80tk"
            onClick={() => props.addBasket("doughnut")}
          />
          <MenuItems
            src={SubSandwich}
            h3="SubSandwich"
            price="90tk"
            onClick={() => props.addBasket("pastry")}
          />
          <MenuItems
            src={Burger}
            h3="Burger"
            price="150tk"
            onClick={() => props.addBasket("choclateCake")}
          />
          <MenuItems
            src={Sandwich}
            h3="Sandwich"
            price="120tk"
            onClick={() => props.addBasket("birthdayCake")}
          />
          <MenuItems
            src={Swarma}
            h3="Swarma"
            price="80tk"
            onClick={() => props.addBasket("doughnut")}
          />
          <MenuItems
            src={SubSandwich}
            h3="SubSandwich"
            price="90tk"
            onClick={() => props.addBasket("pastry")}
          />
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   basketProps: state.basketState,
// });

export default connect(null, { addBasket })(MainMenuHome);
