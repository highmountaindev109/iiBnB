import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle,FaSearch, FaGlobe } from "react-icons/fa/index"
import { openModal } from "../../actions/modal_action";
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
                {/* <FaSearch className="icon"/> */}
            </div>
            <div className="nav-bar-right">
                {/* <button>Become a Host</button>   */}
                <MenuContainer/>
            </div>
        </header>
    )

};

export default NavBar