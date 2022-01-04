import React from "react";
import { FaBars, FaUserCircle} from "react-icons/fa/index"

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: false,
        }
    }

    handleClick = () => {
        this.setState({ display: !this.state.display})
    }

    // closeMenu = (e) => {
    //     if (!this.)
    // }

    loggedIn(){
        return (
            <div className="menu-items">
                {this.props.currentUser.first_name}
                <button className="menu-button" onClick={this.props.logout}>Logout</button>
            </div>
        )
    }

    notloggedIn(){
        return (
            <div className="menu-items">
                <button className="menu-button" onClick={this.props.login}>Login</button>
                <button className="menu-button" onClick={this.props.signup}>Signup</button>
            </div>
        )
    }


    render() {
        return (
            <div onClick={this.handleClick} id="menu">
                <div id="menu-container">
                    <FaBars/>
                    <FaUserCircle/>
                </div>
                {this.state.display && (
                    <>
                    {this.props.currentUser ? this.loggedIn() : this.notloggedIn()} 
                    </>
                )}
            </div>
        );
    } 
}


export default Menu;