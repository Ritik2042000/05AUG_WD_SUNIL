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
        text: "",
        category: "all",
        company: "all",
        colors: "all",
        maxPrice: 0,
        price : 0,
        minPrice : 0,
      },
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
    const sortingItems = (event) => {
        let userData = event.target.value;
        return dispatch({ type: 'GET_SORT_VALUE', payload: userData });
    }
    
    //for search bar in filtersection
    const updateFilterValue = (event) => {
        // let name = e.target.name;
        // let value = e.target.value;
        // return dispatch({ type: 'SEARCH_BAR_VALUE', payload: {name,value} });
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: "SEARCH_BAR_VALUE", payload: { name, value } });      
    };

    //for Clear The Filters 
    const clearFilters = () => {
        dispatch({type:'CLEAR_FILTERS'})
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
        <FilterContex.Provider value={{ ...state, setGridView, setListView, sortingItems,updateFilterValue,clearFilters }}>
            {children}
        </FilterContex.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContex)
}



