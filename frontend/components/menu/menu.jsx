import React from "react";
import { FaBars, FaUserCircle, FaSmileWink} from "react-icons/fa/index"

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: false,
        }
        this.menuRef = React.createRef()
    }

    handleClick = () => {
        this.setState({ display: !this.state.display})
    }

    handleOutsideClick = (e) => {
        if (this.menuRef.current && !this.menuRef.current.contains(e.target)) {
            this.setState({display: false})
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown',this.handleOutsideClick);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown',this.handleOutsideClick);
    }


    loggedIn(){
        return (
            <div className="menu-item">
                <button className="menu-button">{this.props.currentUser.first_name}'s Profile</button>
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
            <div  className="menu-container" onClick={this.handleClick} ref={this.menuRef}>
                <div className="menu-icon">
                    <FaBars/>
                    {this.props.currentUser ? ( 
                            <>
                                {this.props.currentUser.photoUrl ? <img src={this.props.currentUser.photoUrl} className="profilepic"/> : <FaSmileWink/> }
                            </>
                    ): <FaUserCircle/> }

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