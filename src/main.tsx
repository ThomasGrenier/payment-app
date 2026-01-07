import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./features/common/styles/theme";
import { GlobalStyles } from "./features/common/styles/GlobalStyle";
import { I18nProvider } from "./features/common/i18n/i18n.provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </I18nProvider>
  </StrictMode>,
);
