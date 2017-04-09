import React from 'react';
import ReactDOM from 'react-dom';
import Square from "./Square.jsx";
import "../styles/SquareStyle.css";
import PlayBoardBL from "../bl/PlayBoardBL";

const SIZE = 3;

class PlayBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            currSign: "X"
        }

        this.playBoardBL = new PlayBoardBL(SIZE);
    }
    handleTurn(row, col) {
        var oldSign = this.state.currSign;

        // if step valid
        if (this.playBoardBL.handleStep(row, col, this.state.currSign)) {
            var newSign = this.state.currSign == "X" ? "O" : "X";
            this.setState({ currSign: newSign });

        }
        else {
            return false;
        }

        if (this.playBoardBL.checkIfLastStepIsWon(row, col, oldSign)) {
            alert(oldSign + " WON");
        }
        if (this.playBoardBL.checkIfTie()) {
            alert("TIE");
        }

        return oldSign;

    }
    render() {
        return (
            <div>
                {
                    Array(SIZE).fill(null).map((x, rowIndex) => {
                        return (
                            <div key={"row" + rowIndex} className="row-class">
                                {Array(SIZE).fill(null).map((a, colIndex) => {
                                    return (<Square handleTurn={this.handleTurn.bind(this, rowIndex, colIndex)}
                                        sign={this.state.currSign}
                                        key={rowIndex * SIZE + colIndex} />);
                                })}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


export default PlayBoard;
