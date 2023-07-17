import React from 'react';
import { useFilterContext } from '../Context/FilterContex';
import GridView from './GridView';
import ListViews from './ListViews.jsx';

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext()
  // console.log(filter_products, 'in products list');

  if (grid_view === true) {
    return <GridView products={filter_products} />
  }
  if (grid_view === false) {
    return <ListViews products={filter_products} />
  }
};

export default ProductList;