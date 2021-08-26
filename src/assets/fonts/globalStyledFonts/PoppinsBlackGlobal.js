import { createGlobalStyle } from "styled-components";

import Poppins from "../Poppins-Black.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'PoppinsBlack';
        src: local('PoppinsBlack'),
        url(${Poppins}) format('truetype');
        font-style: normal;
    }
`;
