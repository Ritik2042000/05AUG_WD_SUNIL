import { createContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
    cart: [],
    total_item:'',
    total_amount : '',
    shipping_fee:50000,
}
const CartProvider = ({childern}) => {


    const [state,dispatch] = useReducer(reducer,initialstate);
    const addToCart = (id,color,amount,product) => {
            dispatch({type:'ADD_TO_CART',payload:{id,color,amount,product} })
    }

    return <CartContext.Provider value={{...state,addToCart}}>{childern}</CartContext.Provider>
}

export { CartProvider }