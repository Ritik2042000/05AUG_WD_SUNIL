import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './Context/ProductContext';
import { FilterContextProvider } from './Context/FilterContex';
import { CartProvider } from './Context/cartContext';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain="dev-bj3pi7a81zjhz5kw.us.auth0.com"
        clientId="iLjVJmEruDYkdpYkcAMUYBh2EiNQ6fUx"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}>
        <AppProvider>
            <FilterContextProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </FilterContextProvider>
        </AppProvider>
    </Auth0Provider >
);

