import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./Redux/Store/configureStore";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme, { colors } from "./Config/theme";
import { injectStore } from "./utils/api";

injectStore(store);

const appTheme = theme(colors);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
