import React from "react";
import { FaBars, FaUserCircle, FaSmile} from "react-icons/fa/index"

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


    menuItems(){
        return(
        this.props.currentUser ? (
            <div className="menu-item">
                <button className="menu-button"> <a href='#/trips'> {this.props.currentUser.first_name}'s Profile (TBA)</a></button>
                {/* <button className="menu-button" > Messages </button> */}
                {/* <button className="menu-button" > Reservations </button> */}
                <button className="menu-button" > <a href='#/new/listing'> Create Listing </a></button>
                <button className="menu-button" onClick={this.props.logout}>Log out</button>
            </div> ) : (
            <div className="menu-item">
                <button className="menu-button" onClick={this.props.login}>Log in</button>
                <button className="menu-button" onClick={this.props.signup}>Sign up</button>
                <button className="menu-button" onClick={this.props.demo}>Demo User</button>
            </div>
        )
    )}

    profileItem(){
        return(
            this.props.currentUser.photoUrl ? 
            (<img src={this.props.currentUser.photoUrl} className="profilepic"/>
            ) : (<FaSmile/>)
        )
    }

    render() {
        return (
            <div  className="menu-container" onClick={this.handleClick} ref={this.menuRef}>
                <div className="menu-icon">
                    <FaBars/>
                    {this.props.currentUser ? ( this.profileItem()
                    ): <FaUserCircle/> }
                </div>
                {this.state.display ? this.menuItems() : null}
            </div>
        );
    } 
}


export default Menu;