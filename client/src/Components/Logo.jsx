import React from 'react'
import style from '../app.css'

const Logo = (props) => {
    var result;
    if(props.signUp){
        result = style.active
    }else {
        result = style.logo
    }
    return(
         <a className={result}>
            <span className={style.only}>adidas</span>
         </a>
    )
}

export default Logo