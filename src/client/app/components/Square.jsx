import React from 'react';

class Square extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value : props.value,
            isGameFinished : props.isGameFinished
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

Square.defaultProps = {
    value : "",
    isGameFinished : false
};

export default Square;



