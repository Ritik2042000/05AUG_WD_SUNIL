import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainRoutes from './mainRoute.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from 'react-redux';
import CustomStore from "./CustomStore.jsx";
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={CustomStore}>
        <RouterProvider router={MainRoutes} />
  </Provider>
);
