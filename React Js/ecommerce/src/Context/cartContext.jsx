import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/cartReducer'


const CartContext = createContext();

const getCartDataLocalStorage = () => {
    let newCartData = localStorage.getItem('ecommCart')
    // if (newCartData === []) {
    //     return []
    // } else {
    //     return JSON.parse(newCartData)
    // }
    const parsedData = JSON.parse(newCartData);
    if(!Array.isArray(newCartData)) return [];
    return newCartData
}

const initialState = {
    // cart: [],
    cart: getCartDataLocalStorage(),
    total_item: '',
    total_price: '',
    shipping_fee: 50000,
}
    
const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    // <--------  All Functions  --------->

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } })
    }

    // remove item function
    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id })    
    }

    // For Clear Cart 

    const clearCart = () => {
        dispatch({type:'CLEAR_CART'})
    }

    // for increment and Decrement in cart

    const setDecrease = (id) => {
        dispatch ({type: 'SET_DECREMENT',payload: id})    
    }

    const setIncrease = (id) => {
        dispatch ({type: 'SET_INCREMENT',payload: id})    
    }

        // <---------- Use Effect ---------->
    useEffect (()=> {
        // dispatch ({type:'CART_TOTAL_ITEMS'});
        // dispatch ({type:'CART_TOTAL_PRICE'});
        dispatch ({type:'CART_TOTAL_PRICE_ITMES'});
        localStorage.setItem('ecommCart',JSON.stringify(state.cart))
    },[state.cart])


    return (
        <CartContext.Provider value={{ ...state, addToCart,removeItem,clearCart,setDecrease,setIncrease }}>
            {children}
        </CartContext.Provider>
    )
}
const useCartContext = () => {
    return useContext(CartContext)
}
export { CartProvider , useCartContext }

