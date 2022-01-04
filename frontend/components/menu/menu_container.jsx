import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Menu from "./menu.jsx"
import { openModal,closeModal } from "../../actions/modal_action.js";
import { logout } from "../../actions/session_actions.js";

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    signup: () => dispatch(openModal('signup')),
    login: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal()),
})

export default withRouter(connect(mSTP, mDTP)(Menu));