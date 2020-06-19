import React from "react";
import MenuItems from "./MenuItems";
import cake from "../images/cake-1.jpeg";
import cake1 from "../images/cake-2.jpeg";
import doughnut from "../images/doughnut-2.jpeg"
import pastry from "../assets/pastry.jpg";
//REdUX
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";

const MainMenuHome = (props) => {
  // console.log(props);

  return (
    <>

    <div>
    <h2>Cakes & Pastries</h2>
    <div className="container-menu">
    <MenuItems
    src={cake}
    h3="Choclate Cake"
    price="150tk"
    onClick={()=>props.addBasket('choclateCake')}
    />
    <MenuItems
    src={cake1}
    h3="Birthday Cake"
    price="120tk"
    onClick={()=>props.addBasket('birthdayCake')}
    />
    <MenuItems
    src={doughnut}
    h3="Doughnut"
    price="80tk"
    onClick={()=>props.addBasket('doughnut')}
    />
    <MenuItems
    src={pastry}
    h3="Blueberry-pastry"
    price="90tk"
    onClick={()=>props.addBasket('pastry')}
    />
    </div>

    <h2>Delicious Pastries</h2>
    <div className="container-menu">
    <MenuItems
    src={cake}
    h3="Choclate Cake"
    price="150tk"
    onClick={()=>props.addBasket('choclateCake')}
    />
    <MenuItems
    src={cake1}
    h3="Birthday Cake"
    price="120tk"
    onClick={()=>props.addBasket('birthdayCake')}
    />
    <MenuItems
    src={doughnut}
    h3="Doughnut"
    price="80tk"
    onClick={()=>props.addBasket('doughnut')}
    />
    <MenuItems
    src={pastry}
    h3="Blueberry-pastry"
    price="90tk"
    onClick={()=>props.addBasket('pastry')}
    />
    </div>
    </div>
    
    </>
  );
};

export default connect(null, { addBasket })(MainMenuHome);
