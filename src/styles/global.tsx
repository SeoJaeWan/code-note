import { createGlobalStyle } from "styled-components";
import { color, font } from "./theme";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    html {
        box-sizing: border-box;

        font-family:${font.family};
        font-size: ${font.size.sm};
        font-weight: ${font.weight.normal};
    }

    a {
        text-decoration: none;
        color:${color.origin.black};

        outline: none;
    }
    a:hover, a:active {
        text-decoration: none;
        color:${color.origin.black};

        background:none;
    }
`;

export default GlobalStyle;
