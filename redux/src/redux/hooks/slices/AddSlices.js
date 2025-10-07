import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:["Joel"]
}

const AddSlices=createSlice({
    name:"adding",
    initialState,
    reducers:{
        addContact:(state,action)=>{ state.users.push(action.payload)}
    }
})

export const {addContact}=AddSlices.actions

export default AddSlices.reducer;