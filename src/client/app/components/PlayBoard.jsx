import React from 'react';
import ReactDOM from 'react-dom';
import Square from "./Square.jsx";
import "../styles/SquareStyle.css";
import PlayBoardBL from "../bl/PlayBoardBL";
import ResetButton from "./ResetButton";

class PlayBoard extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currSign: "X",
            size : props.amountOfRows,
            isGameFinished : false,
            playBoardBL : new PlayBoardBL(props.amountOfRows)
        }
    }
    handleTurn(row, col) {
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
            alert(oldSign + " WON");
        }
        else if (this.state.playBoardBL.checkIfTie()) {
            this.setState({isGameFinished : true});
            alert("TIE");
        }

        return oldSign;
    }
    onReset() {
        this.setState({playBoardBL : new PlayBoardBL(this.state.size)});
    }
    render() {
        return (
            <div>
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

                <ResetButton handleReset={this.onReset.bind(this)}/>
            </div>
        )
    }
}


export default PlayBoard;
