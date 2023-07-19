import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './Context/ProductContext';
import { FilterContextProvider } from './Context/FilterContex';
import { CartProvider } from './Context/cartContext';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));

const clientId =process.env.REACT_APP_CLIENT_ID
const dominId = process.env.REACT_APP_AUTH_DOMIAN

root.render(
    <Auth0Provider
        domain={dominId}
        clientId={clientId }
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

