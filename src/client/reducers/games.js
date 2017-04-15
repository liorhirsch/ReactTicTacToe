function games(state = [], action) {
    switch (action.type) {
        case "ADD_NEW_GAME" :
            return [
                ...state,
                {winner : action.winner, board : action.board, time : action.time}
            ];
        case "RESET_GAMES":
            return [];
        default:
            return state;
    }
    
}

export default games;