import React, { Component } from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import {resetGamesHistory} from "../../actions/actionCreator";

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
        let pointsPerPlayer = {X : 0, O : 0};

        if (props.games.length > 0) {
            props.games.reduce((obj, val) => {
                obj[val.winner]++;
                return obj;
            }, pointsPerPlayer);
        }

        this.setState({total : pointsPerPlayer});
    }
    resetHistory() {
        this.props.resetGamesHistory();
    }
    render () {
        return (
            <div>
                <h1>Points Board</h1>
                <button onClick={() => this.resetHistory()}>Reset History</button>
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

function mapStateToProps(state){
    return {
        games : state.games
    }
}

function mapDispatchToProps(dispatch) {
    return {
        resetGamesHistory : () => dispatch(resetGamesHistory())
    }
}


const PointsBoardWithGames = connect(mapStateToProps, mapDispatchToProps)(PointsBoard);

export default PointsBoardWithGames