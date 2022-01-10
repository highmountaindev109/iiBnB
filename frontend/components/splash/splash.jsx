import React from "react";
import { Link } from "react-router-dom";

const Splash = ({currentUser}) => {
    return (
        <>
            <div className="splash">
                <div>
                    <div>
                        <h1 className="flexible_text"> Not sure where to go? Perfect.</h1>
                        <div className="button-wrapper">
                            <Link to={`/listings`} className="flexible_button"> I'm Flexible </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* //////////////// */}
            <div className="splashrecs">

            </div>
        </>
    )
}

export default Splash