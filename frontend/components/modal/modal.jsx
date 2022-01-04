import React from "react";
import { openModal,closeModal } from "../../actions/modal_action";
import { connect } from "react-redux";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";

const Modal = ({modal, closeModal}) => {
    if(!modal) {
        return null;
    }
    
    let component;
    
    switch (modal) {
        case 'login':
            component = <LoginFormContainer/>
            break;
        case 'signup':
            component = <SignupFormContainer/>
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mSTP = state => ({
    modal: state.ui.modal
})

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP,mDTP)(Modal)