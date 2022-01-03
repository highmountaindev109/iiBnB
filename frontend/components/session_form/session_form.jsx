import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    links() {
        if (this.props.formType === "Log In") {
            return <Link to="/signup"> Sign Up Here! </Link>
        } else {
            return <Link to="/login"> Log In Here! </Link>
        }
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
            <div>
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
                    <label> First Name: {"  "}
                        <input
                            type="text"
                            value={this.state.first_name}
                            onChange={this.updateFirstName()}
                        />
                    </label>
                    <label> Last Name: {"  "}
                        <input
                            type="text"
                            value={this.state.last_name}
                            onChange={this.updateLastName()}
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

export default SessionForm