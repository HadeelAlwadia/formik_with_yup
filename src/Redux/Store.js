import { combineReducers, createStore } from "redux";
import { list } from "./List/Reducer"

const redcer=combineReducers({list});


export const store=createStore(redcer, window.devToolsExtension && window.devToolsExtension());