import "./i18n";
import React from "react";
import { BrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import "./fonts.css";
import "./index.css";
import { AppThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { store } from "./store/rootState";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    </AppThemeProvider>
  </React.StrictMode>
);
