import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import Home from "../Reducers/Home";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
export const history = createBrowserHistory();
export default createStore(
  combineReducers({ Home, router: connectRouter(history) }),
  applyMiddleware(thunk)
);
