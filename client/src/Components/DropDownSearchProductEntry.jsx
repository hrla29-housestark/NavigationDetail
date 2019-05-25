import React  from 'react'
import style from '../dropdownsearch.css'

const DropDownSearchProductEntry = (props) => {
    return (
        <li className={style.productDescription}>
                <div><img src={props.product.imageUrl} width="90" height= "90" ></img></div>
                  <div className={style.productProperty}>
                    <span className={style.spanProperty}>{props.product.productType}</span>
                    <span className={style.spanProperty}>{props.product.productName}</span>
                    <span className={style.spanProperty}>${props.product.price}</span>
                    <span className={style.spanProperty}>{props.product.rating}<span>   {props.product.comments}</span></span>
                </div>
         </li>
    )
}
export default DropDownSearchProductEntry 