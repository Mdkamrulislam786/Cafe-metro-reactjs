import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap' 
import './MenuMain/menuhome.css'

const MenuHome =()=>(
    <>
    <Container fluid="xlg lg md sm xs">
    <div className="MenuHomeImg">
        <Link to="/MainMenu">
       <h3>EXPLORE</h3>
       <p>OUR DELIICOUS MENU</p>
        </Link>
    </div>
    </Container>
    </>
)

export default MenuHome