import { combineReducers } from "redux";
import soundReducer from "./soundReducer";

const reducers = combineReducers({
  sound: soundReducer,
});

export default reducers;
