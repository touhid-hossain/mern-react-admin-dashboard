import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../src/state/state";
import { Provider } from "react-redux";
import {api} from './state/api'
import { setupListeners } from "@reduxjs/toolkit/query";
// import store from "configstore/store";
import "./index.css";

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefault) => getDefault().concat(api.middleware)
});

setupListeners(store.dispatch)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
 