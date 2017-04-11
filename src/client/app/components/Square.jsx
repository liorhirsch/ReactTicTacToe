import React from 'react';
import "../styles/SquareStyle.css";

class Square extends React.Component{
    constructor() {
        super();
        this.state = {
            value : "",
            isGameFinished : false
        }
    }
    onClick () {
        if (!this.state.isGameFinished) {
            this.props.handleTurn();
        }
    }
    componentWillReceiveProps(props) {
        this.setState({isGameFinished : props.isGameFinished});        
        this.setState({value : props.value});
    }
    render () {
        return (
            <div className = {!this.state.isGameFinished ? 'square clickable' : 'square no-clickable'} 
                 onClick = {this.onClick.bind(this)}>
                {this.state.value}
            </div>
        );
    }
}

export default Square;



