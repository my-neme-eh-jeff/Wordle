import React,  { useContext } from 'react'
import { AppContext } from '../App'

export default function Letter({letterPos, attempVal}) {
    const {board} = useContext(AppContext)
    const letter = board[attempVal][letterPos]
    return <div className="letter"> {letter}</div>

}

