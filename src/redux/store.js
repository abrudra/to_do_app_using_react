import { createStore, applyMiddleware } from "redux";
import { addToDoReducer } from "./reducer/reducers";
import logger from "redux-logger";

export let store = createStore(addToDoReducer, applyMiddleware(logger));
