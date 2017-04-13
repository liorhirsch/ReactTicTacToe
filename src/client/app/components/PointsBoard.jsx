import React, { Component } from 'react'
import "../styles/PointsBoard.css"

class PointsBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            total : {
                X : 0,
                O : 0
            }
        }
    }
    componentWillReceiveProps(props) {        
        if (props.games.length > 0) {
            let pointsPerPlayer = props.games.reduce((obj, val) => {
                obj[val.winner]++;
                return obj;
            },{X : 0, O : 0});

            this.setState({total : pointsPerPlayer});
        }
    }
    render () {
        return (
            <div>
                <h1>Points Board</h1>
                <div className = "group">
                    <span>X : </span>
                    <span>{this.state.total.X}</span>
                </div>
                <div className = "group">
                    <span>O : </span>
                    <span>{this.state.total.O}</span>
                </div>
            </div>
        )
    }
}

export default PointsBoard