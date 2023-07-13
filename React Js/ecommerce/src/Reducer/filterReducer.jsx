import React from 'react';

const filterReducer = (state, action) => {

    switch (action.type) {
        case 'LOAD_FILTER_PRODUCTS':
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],

            }

        case 'SET_GRID_VIEW':
            return {
                ...state,
                grid_view: true,

            }

        case 'SET_LIST_VIEW':
            return {
                ...state,
                grid_view: false,
            }

        case 'GET_SORT_VALUE':
            // let userSortValue = document.getElementById('sort');
            // let sort_value = userSortValue.options[userSortValue.selectedIndex].value
            // console.log(sort_value);
            return {
                ...state,
                sorting_value: action.payload
            }

        case 'SORTING_PRODUCTS':
            const { filter_products, sorting_value } = state
            let newSortData;
            let temSortProduct = [...filter_products];

            const sortProductsByPrice = (a, b) => {

                if (sorting_value === 'lowest') {
                    return a.price - b.price;
                }

                if (sorting_value === 'highest') {
                    return b.price - a.price;
                }

                if (sorting_value === 'a-z') {
                    return a.name.localeCompare(b.name)
                }
                if (sorting_value === 'z-a') {
                    return b.name.localeCompare(a.name)
                }
            }
            newSortData = temSortProduct.sort(sortProductsByPrice)
            return {
                ...state,
                filter_products: newSortData,
            }

        case 'SEARCH_BAR_VALUE':
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }

        case 'SEARCH_FILTER_PRODUCTS':

            let { all_products } = state;
            let temFilterProduct = [...all_products];

            const { text, category, company } = state.filters;

            if (text) {
                temFilterProduct = temFilterProduct.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                })
            }
            if (category !== "all") {
                temFilterProduct = temFilterProduct.filter((curElm) => {
                    return curElm.category === category
                })
            }
            if (company !== "all") {
                temFilterProduct = temFilterProduct.filter((curElm) => {
                    return curElm.company.toLowerCase() === company.toLowerCase()
                })
            }

            return {
                ...state,
                filter_products: temFilterProduct,
            }


        default:
            return state;

    }


};
// console.log([...action.payload]);

export default filterReducer;