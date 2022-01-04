import React from "react";
import { connect } from "react-redux";
import NavBar from './nav_bar'
import { logout } from "../../actions/session_actions";
import { openModal,closeModal } from "../../actions/modal_action";

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: signup => dispatch(openModal(signup)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(NavBar)