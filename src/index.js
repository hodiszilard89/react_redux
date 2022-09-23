import React from "react";
import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppContainer from "./containers/AppContainer";
import reportWebVitals from "./reportWebVitals";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { reducer } from "./reducer/index";
import TodoDetail from "./components/TodoDetail";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import thunkMiddleware from "redux-thunk";

const appStore = combineReducers({
  reducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = legacy_createStore(
  appStore,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<AppContainer />} />
        <Route exact path="/detail:id" element={<TodoDetail />} />
      </Routes>
    </Router>
  </Provider>
);
reportWebVitals();
