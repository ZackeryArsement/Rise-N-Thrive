import {useContext} from 'react';

import classes from './Stocks.module.css'
import { ColorContext } from '../store/color-context'

const Stocks = () => {
    const [textColor, , theme] = useContext(ColorContext)

    return <div className={`${classes.flex} page`} style={{height:'94vh', backgroundColor: theme}}></div>
}

export default Stocks