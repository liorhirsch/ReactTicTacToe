import React from 'react';
import  {Router , Route, IndexRoute, hashHistory} from "react-router";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store, {history} from "../store"

import PlayBoard from "./components/PlayBoard.jsx";
import HistoryBoard from "./components/HistoryBoard";
import App from "./components/App";



window.React = React;


const router = (
  <Provider store = {store}>    
      <Router history = {history}>
          <Route path = "/" component = {App}>
            <IndexRoute component = {PlayBoard}></IndexRoute>
            <Route path = "/HistoryBoard/:name" component = {HistoryBoard}></Route>
          </Route>
      </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('app'));
