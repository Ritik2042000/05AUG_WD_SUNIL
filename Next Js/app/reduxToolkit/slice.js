const { createSlice, nanoid } = require("@reduxjs/toolkit")


const initialState = {
    users:[]
}

const slice  = createSlice({
    name:'UserInformation',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            console.log(action);
            const data = {
                id:nanoid(),
                name:action.payload
            }
            state.users.push(data)
        }
    }
})

export const  {addUser} = slice.actions;
export default slice.reducer