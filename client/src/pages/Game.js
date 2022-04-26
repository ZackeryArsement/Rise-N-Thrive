import classes from './Game.module.css'

import { useContext } from 'react';

import React from 'react'
import GameList from '../components/PageComponents/game/GameList'
import { ColorContext } from '../store/color-context'

const Game = () => {

    const [textColor, , theme] = useContext(ColorContext)

    return (
    <div className={`${classes.flex} page`} style={{ backgroundColor: theme }}>
        <GameList />
    </div>
)}

export default Game