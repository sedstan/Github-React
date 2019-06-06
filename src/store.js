import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import {createPromise} from "redux-promise-middleware";
import reducers from "./reducers";
import "./index.scss";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancer(applyMiddleware(createPromise(), thunk, createLogger())));

export default store;
