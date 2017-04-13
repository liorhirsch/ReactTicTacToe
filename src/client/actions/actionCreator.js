// Add Game
function addNewGame(winner, board, time) {
    return {
        type : "ADD_NEW_GAME",
        winner,
        board, 
        time
    };
}