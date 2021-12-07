
import {combineReducers, createStore} from "redux";
import { dataReducer } from "./List/Reduser";
    
    const reducers=combineReducers({
        dataReducer:dataReducer})
  
    
    
    export const store=createStore(
        reducers
        )
