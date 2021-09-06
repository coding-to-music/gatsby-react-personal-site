import { createGlobalStyle } from "styled-components";

import Poppins from "../Poppins-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'PoppinsRegular';
        src: local('PoppinsRegular'),
        url(${Poppins}) format('truetype');
        font-style: normal; 
    }
`;
