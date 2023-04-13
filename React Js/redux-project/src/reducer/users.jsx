
import { RETRIVE_ALL_USERS, RETRIVE_LOGIN_USERS } from "../actions/type.js"
const initialState = {}
const userReducer = (users = initialState, action) => {
    const { type, payload } = action
    switch  (type) {
        case RETRIVE_ALL_USERS:
            console.log('called RETRIVE USER');
            return { ...payload }
        case RETRIVE_LOGIN_USERS:
            console.log('called RETRIVE USER');
            return { ...payload.data.Data }
        default:
            return users
    }
}
export const selectUser = (state) => state.users

export default userReducer;