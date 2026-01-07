import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundSelected: string;
      backgroundHover: string;
      success: string;
      warning: string;
      error: string;
      almaOrange: string;
      text: {
        white: string;
        black: string;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    borderRadius: string;
  }
}
