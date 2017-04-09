import React from 'react';
import "../styles/SquareStyle.css";

class Square extends React.Component{
    constructor() {
        super();
        this.state = {
            value : ""
        }
    }
    onClick () {        
        var sign = this.props.handleTurn();
        if (sign) {
            this.setState({value : sign});
        }
    }
    render () {
        return (
            <div className = "square" onClick = {this.onClick.bind(this)}>
                {this.state.value}
            </div>
        );
    }
}

export default Square;



