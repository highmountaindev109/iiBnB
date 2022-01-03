import React from "react";
import { Link } from "react-router-dom";

const Splash = ({currentUser}) => {
    return (
        <div
            className="splash"
        >
            <div>
                <div>
                    <h1 className="flexible_text"> Not sure where to go? Perfect.</h1>
                    <span className="button_wrapper">
                        <button className="flexible_button"> I'm Flexible </button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Splash