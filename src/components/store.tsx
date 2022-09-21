import { Action, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type CellValue = "X" | "O" | "";
export type Player = "X" | "O";
export type Winner = "X" | "O" | "?" | "=";

export type ActionPlay = PayloadAction<{i: number, j: number}, "play">;
export type ActionReset = Action<"reset">;


export interface TicTacToeState {
    nextPlayer: Player,
    winner: Winner,
    board: CellValue[][]
}

export const initialState: TicTacToeState = {
    nextPlayer: "X",
    winner: "?",
    board: [
        ["","",""],
        ["","",""],
        ["","",""],
    ]
}

export const store = configureStore({
    reducer: {
        ticTacToe: TicTacToeReducer,
    }
})

function getWinner(board:CellValue[][]): Winner{
    const players: ("X" | "O")[] = ["X","O"]
    
    for(const p of players){
        for(let i = 0; i< 3; i++){
            if(board[i][0] === p && board[i][1] === p && board[i][2] === p){
                return p
            }
            if(board[0][i] === p && board[1][i] === p && board[2][i] === p){
                return p
            }
            if(board[0][0] === p && board[1][1] === p && board[2][2] === p){
                return p
            }
            if(board[0][2] === p && board[1][1] === p && board[2][0] === p){
                return p
            }
        }
    }
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(board[i][j] === ""){
                return "?";
            }

        }
    }
    return "=";
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

function TicTacToeReducer(state: TicTacToeState | undefined = initialState , action: ActionPlay | ActionReset): TicTacToeState {
    switch(action.type){
        case "play":
            const {i,j} = action.payload;
            if(state.board[i][j] === "" && state.winner === "?"){
                const board = state.board.map((row) => row.map((cell) => cell));
                board[i][j] = state.nextPlayer;
                const winner = getWinner(board)   
                return {
                    nextPlayer: state.nextPlayer === "X" ? "O" : "X",
                    winner,
                    board,
                };
            }
            else {
                return state;
            }
            
        case "reset":
            return initialState;
    }
    return state;
}
