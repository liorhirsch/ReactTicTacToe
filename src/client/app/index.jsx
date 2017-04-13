import React from 'react';
import  {Router , Route, IndexRoute, hashHistory} from "react-router";
import ReactDOM from "react-dom";

import PlayBoard from "./components/PlayBoard.jsx";
import HistoryBoard from "./components/HistoryBoard";
import Main from "./components/Main";



window.React = React;


const router = (
      <Router history = {hashHistory}>
          <Route path = "/" component = {Main}>
            <IndexRoute component = {PlayBoard}></IndexRoute>
            <Route path = "/HistoryBoard/:name" component = {HistoryBoard}></Route>
          </Route>
      </Router>
);

ReactDOM.render(router, document.getElementById('app'));
