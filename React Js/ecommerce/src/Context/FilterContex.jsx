import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../Reducer/filterReducer'
import { useProductContext } from './ProductContext';


const FilterContex = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: 'lowest',
    filters: {
        text: '',

    }
};

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext()
    // console.log(products);

    const [state, dispatch] = useReducer(reducer, initialState);


    //<---------- All Functions -------->

    // for grid view
    const setGridView = () => {
        return dispatch({ type: 'SET_GRID_VIEW' });
    }

    // for list view
    const setListView = () => {
        return dispatch({ type: 'SET_LIST_VIEW' });
    }

    //for sorting function
    const sortingItems = (e) => {
        let userData = e.target.value
        return dispatch({ type: 'GET_SORT_VALUE', payload: userData });
    }
    
    //for search bar in filtersection
    const updateFilterValue = (e) => {
        let searchItemName = e.target.name;
        let searchItemValue = e.target.value;
        return dispatch({ type: 'SEARCH_BAR_VALUE', payload: {searchItemName,searchItemValue} });
    }


    //<--------- USE EFFECT HOOKS --------->


    //for sorting data 
    useEffect(() => {
        dispatch ({type:'SEARCH_FILTER_PRODUCTS'})
        dispatch({ type: 'SORTING_PRODUCTS' });
    }, [products, state.sorting_value,state.filters])

    // to load all the products for grid and list view
    useEffect(() => {
        dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
        // console.log(products, 'in use effect');
    }, [products])


    return (
        <FilterContex.Provider value={{ ...state, setGridView, setListView, sortingItems,updateFilterValue }}>
            {children}
        </FilterContex.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContex)
}