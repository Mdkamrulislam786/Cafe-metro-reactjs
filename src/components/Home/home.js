import React from 'react'
import HomeMain from './Header/HeaderMain/headermain'
import MenuHome from './Body/Menu/menu-home'
import {Container, Row, Col} from 'react-bootstrap'
const Home = ()=>{
    return(
        <div>
            <HomeMain/>
            <MenuHome
            className={"MenuHomeImg"}
            h3="EXPLORE"
            p="OUR DELIICOUS MENU"
            link="/MainMenu"
            />
            <MenuHome 
             className={"environment"}
             h3="EXPLORE"
             p="THE ENVIRONMENT"
            />
             <MenuHome 
             className={"chef"}
             p="OUR CHEFS"
            />
             <MenuHome 
             className={"masterkitchen"}
             h3="EXPLORE"
             p="THE MASTER KITCHEN"
            />
             <MenuHome 
             className={"celebs"}
             h3="THE CLEBRITIES"
             p="AT CAFE METRO"
            />
             <MenuHome 
             className={"customer-reviews"}
             p="HAPPY CUSTOMERS REVIEWS"
            />
        </div>
        
    )   
}

export default Home