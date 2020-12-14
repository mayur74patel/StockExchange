import React from 'react'
import Logo from './robinhood.svg'
import Add from './APMC/Add'
import './Header.css'
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
} from 'react-router-dom';
function Header() {
    return (
        <Router>
        <div className="header__wrapper">
            {/* logo */}
            <div className="header__logo">
                <img src={Logo} width={25}/>
            </div>
            {/* search */}
            <div className="header__search">
                <div className="header__searchContainer">
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            <div className="header__menuItems"> 
                <Link to={`/Add`}>Add Stocks</Link>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
            {/* menuitems */}
        </div>
        <Route path="/Add" component={Add}>
        </Route>
        </Router>
    )
}

export default Header 
