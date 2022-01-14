import React from "react";
import { Link } from "react-router-dom";
import MenuContainer from "../menu/menu_container";
import SearchBar from "../search/search_bar";

const NavBar = ({ currentUser, logout }) => {
    return (
        <header className="nav-bar">
            <div className="nav-bar-left">
                <Link to={"/"} className="logo-container"> 
                    <img className='logo-icon' src={window.logo_url}></img>
                    <span className='logo-text'>iiBnB</span>
                </Link> 
            </div>

            <div className="nav-bar-middle">
                <SearchBar />
            </div>
            <div className="nav-bar-right">
                <MenuContainer/>
            </div>
        </header>
    )

};

export default NavBar