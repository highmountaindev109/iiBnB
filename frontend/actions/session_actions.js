import * as APIUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS"

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
})



export const login = user => dispatch => (
    APIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveErrors(error.responseJSON))
        )
)

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()),
            error => dispatch(receiveErrors(error.responseJSON))
        )
)

export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
            error => dispatch(receiveErrors(error.responseJSON))
        )
)

export const clearErrors = () => dispatch => (
    dispatch(clearSessionErrors())
)