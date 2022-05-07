import { combineReducers } from "redux";
import authReducer from "./authReducer";
import AnimalReducer from './AnimalReducer';



const rootReducer  = combineReducers({authReducer, AnimalReducer}) ;

export default rootReducer ;