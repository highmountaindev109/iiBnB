import React from "react";
import { FaAlignRight, FaBars, FaUserCircle} from "react-icons/fa/index"

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

    loggedIn(){
        return (
            <div className="menu-item">
                <button className="menu-button">{this.props.currentUser.first_name} Profile</button>
                <button className="menu-button" > Messages </button>
                <button className="menu-button" > Reservations </button>
                <button className="menu-button" > Saved Trips </button>
                <button className="menu-button" onClick={this.props.logout}>Log out</button>
            </div>
        )
    }

    notloggedIn(){
        return (
            <div className="menu-item">
                <button className="menu-button" onClick={this.props.login}>Log in</button>
                <button className="menu-button" onClick={this.props.signup}>Sign up</button>
                <button className="menu-button" onClick={this.props.demo}>Demo User</button>
            </div>
        )
    }


    render() {
        return (
            <div onClick={this.handleClick} className="menu-container">
                <div className="menu-icon">
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