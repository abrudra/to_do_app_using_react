import { createStore} from "redux";
import { addToDoReducer } from "./reducer/reducers";

export let store = createStore(addToDoReducer);
