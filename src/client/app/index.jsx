import React from 'react';
import ReactDOM from 'react-dom';
import PlayBoard from "./components/PlayBoard.jsx";
import "./styles/index.css";

window.React = React;

class App extends React.Component {
  render () {
    return (
      <div className = "center">
        <h1> Tic Tac Toe </h1>
        <PlayBoard amountOfRows = {3} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
