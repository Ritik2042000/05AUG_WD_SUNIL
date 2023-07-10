import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../Reducer/filterReducer'
import { useProductContext } from './ProductContext';


const FilterContex = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
};

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext()
    console.log(products);
    
    const [state, dispatch] = useReducer(reducer, initialState);
    
    // for grid view
    const setGridView = () => {
        return dispatch({ type: 'SET_GRIDVIEW' });
    }
    
    // to load all the products for grid and list view
    useEffect(() => {
        dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
        console.log(products ,'in usa effect');
    }, [products])

    return (
        <FilterContex.Provider value={{ ...state, setGridView }}>
            {children}
        </FilterContex.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContex)
}