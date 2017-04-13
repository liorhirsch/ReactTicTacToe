import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import games from "./games";

const rootReducer = combineReducers(
    {
        games, 
        routing : routerReducer
    });

export default rootReducer;