import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle,FaSearch, FaGlobe } from "react-icons/fa/index"
import { openModal } from "../../actions/modal_action";
import MenuContainer from "../menu/menu_container";

const NavBar = ({ currentUser, logout }) => {
    return (
        <header className="nav-bar">
            <div className="nav-bar__left">
                <h2>
                    <Link to={"/"}> iiBnB </Link> 
                </h2>
            </div>

            <div className="nav-bar__middle">
                <input type="text"/>
                <FaSearch/>
            </div>
            <div className="nav-bar__right">
                <button>Become a Host</button>
                <MenuContainer/>
            </div>
        </header>
    )

};

export default NavBar