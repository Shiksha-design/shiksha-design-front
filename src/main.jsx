import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store, persistor } from "./Redux/Store/configureStore";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme, { colors } from "./Config/theme";
import { injectStore } from "./utils/api";

injectStore(store);

const appTheme = theme(colors);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
