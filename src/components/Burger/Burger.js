import React from 'react'
import classes from './Burger.module.css'
import BurgerIngirdient from '../Burger/BurgerIngridients/BurgerIngridients'

const burger = (props) => {
    let transformedIngridients = Object.keys(props.ingridients).map(igkey => {
        return [...Array(props.ingridients[igkey])].map((_,i) => {
            return <BurgerIngirdient key={igkey+i} type={igkey}/>
        })
    }).reduce((arr,el) => {
        return arr.concat(el)
    },[])

    if(transformedIngridients.length === 0){
        transformedIngridients = <p>Please Start adding Ingridients!!!</p>
    }

    return (
        <div className={classes.Burger} >
            <BurgerIngirdient type="bread-top" />
            {transformedIngridients}
            <BurgerIngirdient type="bread-bottom" />
        </div>
    )
}

export default burger