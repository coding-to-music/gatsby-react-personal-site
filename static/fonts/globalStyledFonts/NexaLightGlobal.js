import { createGlobalStyle } from "styled-components";

import NexaLight from "../NexaLight.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'NexaLight';
        src: local('NexaLight'),
        url(${NexaLight}) format('opentype');
        font-weight: bold;
        font-style: normal; 
    }
`;
