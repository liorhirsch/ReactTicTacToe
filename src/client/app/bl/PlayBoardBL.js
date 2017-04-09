

class PlayBoardBL {
    constructor(size){
        this._size = size;
        this._amountOfSteps = 0;
        this._board = Array(size).fill().map(()=>Array(size).fill());
        this._maxSteps = Math.pow(size, 2);
    }

    handleStep(rowIndex, colIndex, sign)
    {
        if (this._board[rowIndex][colIndex])
        {
            return false;
        }

        this._board[rowIndex][colIndex] = sign;
        this._amountOfSteps++;
        return true;
    }
    checkIfTie() {
        return (this._amountOfSteps == this._maxSteps);
    }
    checkIfLastStepIsWon(row, col, sign) {
        return this.checkIfRowWin(row,sign) ||
               this.checkIfColWin(col, sign) || 
               this.checkIfAlhsonWin(row, col, sign);

    }
    checkIfRowWin(row, sign) {
        return checkIfAllVAluesEqualsToSign(this._board[row], sign);
    }
    checkIfColWin(col, sign) {
        let list = [];

        for (let index = 0; index < this._size; index++)
        {
            list.push(this._board[index][col]);
        }

        return checkIfAllVAluesEqualsToSign(list, sign);;
    }
    checkIfAlhsonWin(row, col, sign) {
        // if on alhson
        if (row == col || (col + row == this._size - 1)) {
            
            let mainAlahson = [];
            let secondAlahson = [];
            for (let index = 0; index < this._size; index++){
                mainAlahson.push(this._board[index][index]);
                secondAlahson.push(this._board[index][this._size - 1 - index]);                
            }

            return checkIfAllVAluesEqualsToSign(mainAlahson, sign) || 
                   checkIfAllVAluesEqualsToSign(secondAlahson, sign);
        }
    }
}

function checkIfAllVAluesEqualsToSign(list, sign)
{
    return list.every((element) => element == sign && element != null);
}

export default PlayBoardBL;