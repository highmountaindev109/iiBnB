import { connect } from "react-redux";
import { login, signup } from "../../actions/session_actions";
import SignUpForm from "./signup_form";

const mSTP = (state) => ({
    errors: Object.values(state.errors.session),
    formType: "Sign Up"
})

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
})

export default connect(mSTP, mDTP)(SignUpForm)