const { createSlice, nanoid, current } = require("@reduxjs/toolkit")


const initialState = {
    users: JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : []
}

const slice = createSlice({
    name: 'UserInformation',
    initialState,
    reducers: {
        addUser: (state, action) => {
            // console.log(action);
            const data = {
                id: nanoid(),
                name: action.payload
            }
            state.users.push(data);
            let userData = JSON.stringify(current(state.users))
            localStorage.setItem('users', userData)
        },
        removeUser: (state, action) => {
            const data = state.users.filter((data) => {
                return data.id !== action.payload
            })
            state.users = data;
            let updatedList = JSON.stringify((data));
            localStorage.setItem('users', updatedList);
        }
    }
})

export const { addUser, removeUser } = slice.actions;
export default slice.reducer