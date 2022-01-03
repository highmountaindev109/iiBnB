import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = (state) => ({
    errors: Object.values(state.errors.session),
    formType: "Sign Up"
})

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm)