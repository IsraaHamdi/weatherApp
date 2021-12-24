import { createStore } from "redux";
import cityReducer from "./reducers/city";
const store = createStore(cityReducer);


export default store;