import { createGlobalStyle } from "styled-components";

import NexaBold from "../NexaBold.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'NexaBold';
        src: local('NexaBold'),
        url(${NexaBold}) format('opentype');
        font-style: normal;
    } 
`;
