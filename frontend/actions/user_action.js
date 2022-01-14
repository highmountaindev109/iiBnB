import * as UserAPIutil from '../util/user_api_util'

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = user => ({
    type: RECEIVE_USER
})

export const fetchUser = userId => dispatch (
    UserAPIutil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
)

