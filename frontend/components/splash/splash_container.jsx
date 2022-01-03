import { connect } from "react-redux";
import Splash from "./splash"

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.currentUserId]
    };
};

export default connect(mSTP,null)(Splash)