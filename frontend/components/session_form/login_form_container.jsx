import { connect } from "react-redux";
import { login,clearErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { openModal, closeModal} from "../../actions/modal_action";

const mSTP = (state) => ({
    errors: Object.values(state.errors.session),
    formType: "Log In"
})

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    openModal: signup => dispatch(openModal(signup)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(LoginForm)