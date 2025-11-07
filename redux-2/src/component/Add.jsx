import { useState } from "react"
import { useDispatch } from "react-redux"
import { addCart } from "../redux/slice/CartSlice"
import { removeCart } from "../redux/slice/CartSlice"
const Add = () => {

    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch(addCart(1));
    };
    const handleRemove=()=>{
        dispatch(removeCart(1))
    }

    return (
        <div style={{ marginTop: 20 }}>
            Add cart <br />
            <button onClick={handleChange}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}

export default Add