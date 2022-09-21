import React from 'react'
import './TicTacToe.css'

export function TicTacToe() {
    return(
        <div className="ticTacToe">
            <div className='title'>Aguardando jogador X</div>
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}