// Add Game
export function addNewGame(winner, board, time) {
    return {
        type : "ADD_NEW_GAME",
        winner,
        board, 
        time
    };
};

export function removeGameFromHistory(id) {
        return {
            type : "REMOVE_GAME_FROM_HISTORY",
            id
        };
    }
