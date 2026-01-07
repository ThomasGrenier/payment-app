import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: "Montserrat", system-ui, -apple-system, BlinkMacSytemFont, "Segoe UI", "Helvetica Neue", sans-serif;
        background-color: ${({ theme }) => theme.colors.backgroundColor.app};
        color: ${({ theme }) => theme.colors.text.black};
    }
    
    button {
        font-family: inherit;
    }
`;
