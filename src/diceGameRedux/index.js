import { combineReducers } from "redux";
import diceGameReducer from "./diceGameReducer";

const rootReducer = combineReducers({ diceGameReducer });

export default rootReducer;
