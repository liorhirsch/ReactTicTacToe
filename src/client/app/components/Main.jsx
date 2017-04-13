import React, { Component } from 'react';
import "../styles/index.css";
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';

class Main extends Component {
    render () {
        return (
            <div className = "center">
                <h1> Tic Tac Toe </h1>
                {React.cloneElement(this.props.children, this.props)}
                <Alert  effect='genie' stack={{limit: 3}} position='top-right'/>
            </div>
        )
    }
}

export default Main;