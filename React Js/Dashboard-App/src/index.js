import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import { Theme } from './theme/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={Theme}>

    <App />
  </ChakraProvider>
  
);


