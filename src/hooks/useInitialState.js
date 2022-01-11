import { useState } from "react";

const initialState = {
    cart:[]
}

const useInitialState = () =>{
    const [ state, setState ] = useState(initialState);

    const addToCart = (payload) =>{
        if(!state.cart.includes(payload)){
            setState({
                ...state,
                cart:[...state.cart, payload]
            })
        }
    }

    return {
        state,
        addToCart
    }
}

export default useInitialState;
