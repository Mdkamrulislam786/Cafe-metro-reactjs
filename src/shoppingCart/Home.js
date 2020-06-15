import React, {useState} from "react";
import MenuItems from './MenuItems'
import cake from '../images/cake-1.jpeg'
import cake1 from '../images/cake-2.jpeg'
import doughnut from '../images/doughnut-2.jpeg'
import sweets from '../images/z-sweets-3.jpeg'
//REdUX
import { connect } from 'react-redux'
import { addBasket } from '../actions/addAction'

const MainMenuHome = (props) => {
// console.log(props);

  return (
    <div className="container">
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
    src={sweets}
    h3="Sweets"
    price="160tk"
    onClick={()=>props.addBasket('sweets')}
    />
    </div>
  )
};

export default connect( null, { addBasket }) (MainMenuHome);
