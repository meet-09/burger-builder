import React from 'react'
import Aux from '../../hoc/Auxillary'
import classes from './Layout.module.css'

const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar,Sidebar,Backdrawer</div>
            <main className = {classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout