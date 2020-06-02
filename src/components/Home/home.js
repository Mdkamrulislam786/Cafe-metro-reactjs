import React from 'react'
import HomeMain from './Header/HeaderMain/headermain'
import MenuHome from './Body/Menu/menu-home'
import SideIconBar from '../widgets/Side-IconBar/sideiconbar'
const Home = ()=>{
    return(
        <div>
            <HomeMain/>
            <MenuHome/>
        </div>
        
    )
}

export default Home