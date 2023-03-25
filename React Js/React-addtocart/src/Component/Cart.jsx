import React, { createContext, useReducer } from 'react';
import './cart.css'
import { products } from './products'
import Mainfile from './Mainfile'

export const CartContex = createContext();
const initialstate = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
}
const reducer = (state, action) => {
    if(action.type === "REMOVE_ITEM"){
        return{
            ...state,
            item:state.item.filter((curElem) =>{
                return curElem.id != action.paylod;
            })
        }
    }
    if(action.type === "CLEAR_ITEM"){
        return{
            ...state,
            item:[] }
    }
    if (action.type === "INCREMENT") {
        const updatedCart = state.item.map((curElem)=>{
            if (curElem.id === action.paylod) {
                return {...curElem , quantity: curElem.quantity + 1}
            }
            return curElem;
        })
        return {...state, item: updatedCart}
    }
    if (action.type === "DECREMENT") {
        const updatedCart = state.item.map((curElem)=>{
            if (curElem.id === action.paylod) {
                return {...curElem , quantity: curElem.quantity - 1}
            }
            return curElem;

        }).filter((curElem) => {
            return curElem.quantity != 0;
        })
        return {...state, item: updatedCart}
    }

    return state;
}
const Cart = () => {
    // const [item, setItem] = useState(products)
    const [state, dispatch] = useReducer(reducer, initialstate);
    const deleteItem = (id) => {
        return dispatch({
            type:"REMOVE_ITEM",
            paylod: id,
        })
    }
    const clearCart = (id) => {
        return dispatch({
            type:"CLEAR_ITEM",
            
        })
    }
    const increment = (id) => {
        return dispatch({
            type:'INCREMENT',
            paylod:id,
        });
    };
    const decrement = (id) => {
        return dispatch({
            type:'DECREMENT',
            paylod:id,
        });

    }
    return (
        <CartContex.Provider value={{ ...state, deleteItem,clearCart,increment,decrement }}>
            <Mainfile />
        </CartContex.Provider>
    );
};

export default Cart;