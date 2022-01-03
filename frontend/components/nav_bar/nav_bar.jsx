import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle,FaSearch, FaGlobe } from "react-icons/fa/index"

const NavBar = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div> 
            <p> Hello, {currentUser.id} </p>
            <button onClick={logout}> Logout </button>
        </div>
    ) : (
        <div>
            <Link to={"/signup"}>Sign Up</Link>
            <Link to={"/login"}>Log In</Link>
        </div>
    )

    return (
        <header className="nav-bar">
            <div className="nav-bar__left">
                <h2> iiBnB </h2>
            </div>

            <div className="nav-bar__middle">
                <input type="text"/>
                <FaSearch/>
            </div>
            <div className="nav-bar__right">
                Become a Host
                <FaGlobe/>
                {display}
                <div className="nav-bar__inner__right">
                <FaRegUserCircle/>
                </div>
            </div>
        </header>
    )

};

export default NavBar