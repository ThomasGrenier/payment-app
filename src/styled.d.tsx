import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: {
        white: string;
        black: string;
      };
      brand: {
        primary: string;
      };
      info: {
        success: string;
        warning: string;
        error: string;
      };
      border: {
        default: string;
        selected: string;
      };
      backgroundColor: {
        app: string;
        card: string;
        gray: string;
        hover: string;
        selected: string;
      };
    };
    radius: {
      xs: string;
      md: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    typography: {
      size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      weight: {
        bold: number;
      };
    };
  }
}
