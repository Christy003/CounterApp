import rootReducer from "./src/Reducers/index";
import { createStore } from "redux";
const store= createStore(rootReducer);
export default store;