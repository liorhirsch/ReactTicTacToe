import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router";

import Square from "./Square.jsx";
import "../styles/SquareStyle.css";
import PlayBoardBL from "../bl/PlayBoardBL";
import ResetButton from "./ResetButton";
import Alert from 'react-s-alert';
import PointsBoard from "./PointsBoard";


class PlayBoard extends React.Component {
    constructor(props) {
        super(props);

        if (props.playBoard) {
            this.state = {
                playBoardBL : props.playBoard,
                size : props.playBoard._size,
                readOnlyMode : true,
                isGameFinished : true
            }
        }
        else {
            this.state = {
                currSign: "X",
                size : props.amountOfRows,
                isGameFinished : false,
                playBoardBL : new PlayBoardBL(props.amountOfRows),
                name: " ",
                readOnlyMode : false
            }
        }
    }
    handleTurn(row, col) {
        if (!this.state.readOnlyMode){
            var oldSign = this.state.currSign;

            // if step valid
            if (this.state.playBoardBL.handleStep(row, col, this.state.currSign)) {
                var newSign = this.state.currSign == "X" ? "O" : "X";
                this.setState({ currSign : newSign });

            }
            else {
                return false;
            }

            if (this.state.playBoardBL.checkIfLastStepIsWon(row, col, oldSign)) {
                this.setState({isGameFinished : true});
                Alert.success(oldSign + " WON");
                this.props.addNewGame(oldSign, this.state.playBoardBL, new Date().getTime());
            }
            else if (this.state.playBoardBL.checkIfTie()) {
                this.setState({isGameFinished : true});
                Alert.warning(oldSign + " WON");
                this.props.addNewGame("Tie", this.state.playBoardBL, new Date().getTime());
            }

            return oldSign;
        }
    }
    onReset() {
        this.setState({playBoardBL : new PlayBoardBL(this.state.size)});
        this.setState({isGameFinished : false});
    }
    updateName(e){
        this.setState({name : e.target.value});
    }
    
    render() {
        return (
            <div>
                {this.state.readOnlyMode ? null : 
                (
                    <div>
                        <input type = "text" onChange = {this.updateName.bind(this)}/>
                        <Link to = {`/HistoryBoard/${this.state.name}`} >History With Name</Link>                                           
                    </div>
                )}

                {
                    Array(this.state.size).fill(null).map((x, rowIndex) => {
                        return (
                            <div key={"row" + rowIndex} className="row-class">
                                {Array(this.state.size).fill(null).map((a, colIndex) => {
                                    return (<Square handleTurn={this.handleTurn.bind(this, rowIndex, colIndex)}
                                                    key= {"cell" + ((rowIndex * this.state.size) + colIndex)}
                                                    isGameFinished={this.state.isGameFinished} 
                                                    value = {this.state.playBoardBL._board[rowIndex][colIndex]}/>);
                                            
                                })}
                            </div>
                        )
                    })
                }

                {this.state.readOnlyMode ? null : 
                (
                    <div>                        
                        <ResetButton handleReset={this.onReset.bind(this)}/>
                        <PointsBoard {...this.props} />
                    </div>
                )}
                
            </div>
        )
    }
}

PlayBoard.defaultProps = {
    amountOfRows : 3
};

export default PlayBoard;
