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

    updateEmail(e) {
        return e => this.setState({ email: e.target.value })
    }

    updatePassword(e) {
        return e => this.setState({ password: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    links() {
            return (
                <div>
                    <Link to="/signup"> Sign up for a new account here! </Link>
                    <br/>
                    <button onClick={this.handleDemo}>Use a demo account instead</button>
                </div>
            )
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = {
            email: "User@Fake.com", password: "123456"
        };

        this.props.processForm(demoUser);
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
            <div className="_forms">
                <h3> {this.links()} </h3>
                <form onSubmit={this.handleSubmit}>
                    <h1>{this.props.formType}</h1>
                    <h3> {this.displayErrors()} </h3>
                    <label> Email: {"  "}
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.updateEmail()}
                        />
                    </label>
                    <label> Password: {"  "}
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.updatePassword()}
                        />
                    </label>
                    {"      "}
                    <button type="submit">{this.props.formType}</button>
                </form>
            </div>
        )
    }

}

export default LogInForm