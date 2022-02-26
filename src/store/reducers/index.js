import { combineReducers } from "redux";
import chat from "./chat"
//import watson from './

const rootReducer = combineReducers({
    chat,
})

export default rootReducer