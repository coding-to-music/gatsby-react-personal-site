import { createGlobalStyle } from "styled-components";

import Manrope from "../Manrope-VariableFont_wght.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'ManropeLight';
        src: local('ManropeLight'),
        url(${Manrope}) format('truetype');
        font-weight: 300;
        font-style: normal; 
    }
`;
