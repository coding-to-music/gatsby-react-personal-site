import { createGlobalStyle } from "styled-components";

import Poppins from "../Poppins-Black.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'),
        url(${Poppins}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;
