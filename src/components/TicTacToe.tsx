import React from 'react'
import { useAppDispatch, useAppSelector } from './store'
import './TicTacToe.css'



export function TicTacToe() {
    const state = useAppSelector((state) => state.ticTacToe)
    const dispatch = useAppDispatch();
    
    return(
        <div className="ticTacToe">
            {state.winner === "?" && <div className='title'>Aguardando jogador {state.nextPlayer}</div> }
            {state.winner === "=" && <div className='title'>Empatou</div>}
            {state.winner !==  "?" && state.winner !== "=" && <div className='title'>Vencedor: <strong>{state.winner}</strong></div>}
            
            <table>
                <tbody>
                    {state.board.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell,j) => (
                                <td onClick={() => dispatch({type:"play",payload:{i,j}})} key={j}>{cell}</td>
                            ))}
                        </tr>
                        )    
                    )}
                    
                </tbody>
            </table>
            <button onClick={() => dispatch({type:"reset"})}>Reiniciar partida</button>
        </div>
    )
}