import {createGlobalStyle} from 'styled-components';
export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #2D2831;
    color: #fff;
  }

   body, input, button {
     font-family: 'Roboto', sans-serif;
     font-size: 16px;

   }

   button{
     cursor: pointer;
   }
`;
