// TODO - FARKLI RECULERS BİR ARAYA POPLANDIĞI BÖLÜM
import {combineReducers} from "redux";
import counterReducer from "./counterReducer";

const reducers = combineReducers({
    counterReducer,
})
export default reducers;