import {createStore, compose} from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import {hashHistory} from "react-router";

import games from "./data/GamesHistory";
import rootReducer from "./reducers/index";

const defaultState = {
    games
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(hashHistory, store);

export default store;
