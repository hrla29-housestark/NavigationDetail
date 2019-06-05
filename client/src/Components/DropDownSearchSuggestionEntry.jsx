import React  from 'react'
import style from '../dropdownsearch.css'

const DropDownSearchSuggestionEntry = (props) => {
    const len = props.q.length;
    let x = props.category.category.toLowerCase().indexOf(props.q)
    return (
        <li className={style.suggestionLabel}>
                <span>{props.category.category.slice(0,x)}<strong className={style.strong}>{ props.q}</strong>{props.category.category.slice(x+len)}</span>
                <span className={style.labelSpan}>({props.category.productNumber})</span>
        </li>
    )
}
export default DropDownSearchSuggestionEntry 