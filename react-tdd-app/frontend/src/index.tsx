import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('./mocks/browser');
  worker.start();
}

const GlobalStyle = createGlobalStyle`
  input {
   ${tw`pl-2 border border-gray-500 rounded focus:outline-blue-500`}
  }
  button {
    ${tw`bg-blue-600 rounded  p-2 text-white hover:bg-blue-700`}
  }
  h1{
    ${tw`font-bold text-3xl`}
  }
  h2{
    ${tw`font-bold text-2xl`}
  }
  h3{
    ${tw`font-semibold text-xl`}
  }
  h4{
    ${tw`font-semibold text-lg`}
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
