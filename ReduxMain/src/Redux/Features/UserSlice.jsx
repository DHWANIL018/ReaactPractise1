// Shree Ganeshay namah 

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userlist : []
}

export const UserSlice = createSlice({
    name : "userlist",
    initialState,
    reducers :{
        AddUser :(state,action)=> {
            console.log(state)
            console.log(action)
            state.userlist.push(action.payload)
        },
        DeleteUser : (state,action)=>{
            console.log(action.payload)
            const id = action.payload
            const filterData = state.userlist.filter(user=>{
                return  id != user.id
            })
            state.userlist = filterData

        }
    }
})

export const { AddUser,DeleteUser } = UserSlice.actions
export default UserSlice.reducer