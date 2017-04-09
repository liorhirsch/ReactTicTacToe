import React from 'react';
import ReactDOM from 'react-dom';
import PlayBoard from "./components/PlayBoard.jsx";

window.React = React;

class App extends React.Component {
  render () {
    return (
      <div>
        <h1> Tic Tac Toe </h1>
        <PlayBoard amountOfProps = "3"/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
