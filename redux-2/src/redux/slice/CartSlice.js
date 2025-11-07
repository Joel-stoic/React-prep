import {createSlice} from "@reduxjs/toolkit"

const initialState={
    cart:0
}

const cartSlice=createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addCart:(state,action)=>{state.cart+=1},
        removeCart:(state,action)=>{state.cart-=1}
    }
})

export const {addCart,removeCart} =cartSlice.actions
export default cartSlice.reducer