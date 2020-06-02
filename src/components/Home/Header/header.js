import React from 'react';
import './header.css'
import SideNav from './sidenav/sidenav'
import SideIconBar from '../../widgets/Side-IconBar/sideiconbar'

const Header = (props) => {

    return (
        <header id='header'>
            <div>
                <SideNav/>               
            </div>
        </header>
    )


}

export default Header;