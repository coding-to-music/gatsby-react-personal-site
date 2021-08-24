import { createGlobalStyle } from "styled-components";

import Roboto from "../Roboto-Black.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'),
        url(${Roboto}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;
