import React from "react";
import { Link } from "react-router-dom";

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal)

    }

    links() {
            return (
                <div>
                    <button className="session-button" id="demo1" onClick={this.handleDemo}>Use a demo account instead</button>
                </div>
            )
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = {
            email: "User@Fake.com", password: "123456"
        };

        this.props.processForm(demoUser).then(this.props.closeModal());
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
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <h2> Welcome back to iiBnB!</h2>
                    <h3 className="errorsh3"> {this.displayErrors()} </h3>
                        <input
                            id="signin-email"
                            className="session-input"
                            type="text"
                            value={this.state.email}
                            onChange={this.updateEmail()}
                            placeholder="Email"
                        />
                        <input
                            id="signin-password"
                            className="session-input"
                            type="password"
                            value={this.state.password}
                            onChange={this.updatePassword()}
                            placeholder="Password"
                        />
                    <button className="session-button" id="submit1" type="submit">{this.props.formType}</button>
                    <h3> {this.links()} </h3>
                </form>
            </div>
        )
    }
    
}

export default LogInForm