import React from 'react';
import {useContext} from 'react';

import classes from './Game.module.css'
import IndecisionApp from '../components/PageComponents/indecision/components/IndecisionApp';
import '../components/PageComponents/indecision/components/styles.css'

import { ColorContext } from '../store/color-context'

const Indecision = () => {
    const [textColor, , theme] = useContext(ColorContext)

    return (
    <div className={`${classes.flex} page`} style={{ height: '94vh', width: '100%', backgroundColor: theme }}>
        <IndecisionApp />
    </div>
)}

export default Indecision;