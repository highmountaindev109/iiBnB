import { connect } from "react-redux";
import { login, signup, clearErrors } from "../../actions/session_actions";
import SignUpForm from "./signup_form";
import { openModal, closeModal} from "../../actions/modal_action";
import { withRouter } from "react-router-dom";

const mSTP = (state) => ({
    errors: Object.values(state.errors.session),
    formType: "Sign Up"
})

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
})

export default withRouter(connect(mSTP, mDTP)(SignUpForm))