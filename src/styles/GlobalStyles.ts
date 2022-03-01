import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /*
        Set default font
    */
    html,
    body {
        font-family: "Times New Roman", Times, serif;
    }

    /*
        Color variables
    */
    :root {
        --black-100: #000000;
        --black-090: #191919;
        --black-080: #323232;
        --black-070: #4c4c4c;
        --black-060: #666666;
        --black-050: #7f7f7f;
        --black-040: #999999;
        --black-030: #b2b2b2;
        --black-020: #cccccc;
        --black-010: #e5e5e5;
        --black-000: #ffffff;
    }
`;

export default GlobalStyles;
