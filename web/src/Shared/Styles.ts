import { createGlobalStyle } from 'styled-components';

export const StyleGlobal = createGlobalStyle`
  *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  html, body, #root{
    height: 100%;
    width: 100%;
  }
  body{
    font-family: 'Roboto', sans-serif;
  }

  input[type="search"]::placeholder {
    color: #fff;    
  } 
  input[type="search"]:-ms-input-placeholder {
    color: #fff;      
  } 
  input[type="search"]::-ms-input-placeholder {
    color: #fff;      
  }
`;
