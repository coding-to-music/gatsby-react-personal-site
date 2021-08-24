import { createGlobalStyle } from "styled-components";

import NexaBold from "../NexaBold.otf";
import NexaLight from "../NexaLight.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Nexa';
        src: local('Nexa'), local('Nexa'),
        url(${NexaBold}) format('opentype'),
        url(${NexaLight}) format('opentype');
        font-weight: 300;
        font-style: normal;
    }
`;
