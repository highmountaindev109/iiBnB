import React from "react";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            bio: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    updateEmail(e) {
        return e => this.setState({ email: e.target.value })
    }

    updatePassword(e) {
        return e => this.setState({ password: e.target.value })
    }
    updateFirstName(e) {
        return e => this.setState({ first_name: e.target.value })
    }
    updateLastName(e) {
        return e => this.setState({ last_name: e.target.value })
    }
    updateBio(e) {
        return e => this.setState({ bio: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    links() {
            return (
            <div>
                {/* <Link to="/login"> Log in instead </Link> */}
                {/* <br/> */}
                <button className="session-button" id="demo1" onClick={this.handleDemo}>Use a demo account instead</button>
            </div>
            )
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = {
            email: "User@Fake.com", password: "123456"
        };
        this.props.login(demoUser)
        .then(this.props.closeModal());
    }

    displayErrors() {
        return (
            <div>
                {
                    this.props.errors.map((errors, i) => <ul key={`${i}`}> {errors}</ul>)
                }
            </div>
        )

    }

    render() {
        return (
            
            <div className="forms-container">
                <form onSubmit={this.handleSubmit} className="session-form">
                    <h2> Sign up for iiBnB! </h2>
                    <h3 className="errorsh3"> {this.displayErrors()} </h3>
                        <input
                            id="email"
                            className="session-input"
                            type="text"
                            value={this.state.email}
                            onChange={this.updateEmail()}
                            placeholder="Email"
                            required
                        />
                        <input
                            id="fname"
                            className="session-input"
                            type="text"
                            value={this.state.first_name}
                            onChange={this.updateFirstName()}
                            placeholder="First Name"
                            required
                        />
                        <input
                            id='lname'
                            className="session-input" 
                            type="text"
                            value={this.state.last_name}
                            onChange={this.updateLastName()}
                            placeholder="Last Name"
                            required
                        />
                        <input
                            id="password"
                            className="session-input"
                            type="password"
                            value={this.state.password}
                            onChange={this.updatePassword()}
                            placeholder="Password"
                            required
                        />
                        <textarea
                            id="bio"
                            className="session-input"
                            value={this.state.bio}
                            onChange={this.updateBio()}
                            placeholder="Tell us about yourself!"
                        />
                    {"      "}
                    <button className="session-button" id="submit1" type="submit">{this.props.formType}</button>
                    <h3> {this.links()} </h3>
                </form>
            </div>
        )
    }

}

export default SignUpForm