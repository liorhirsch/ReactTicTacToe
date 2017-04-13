import React, { Component } from 'react';
import "../styles/index.css";

class Main extends Component {
    render () {
        return (
            <div className = "center">
                <h1> Tic Tac Toe </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

export default Main;