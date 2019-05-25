import React  from 'react'
import style from '../dropdownsearch.css'

const DropDownSearchSuggestionEntry = (props) => {
    const len = props.q.length;
    return (
        <li className={style.suggestionLabel}>
                <span><strong className={style.strong}>{ props.category.category.slice(0,len)}</strong>{props.category.category.slice(len)}</span>
                <span className={style.labelSpan}>({props.category.productNumber})</span>
        </li>
    )
}
export default DropDownSearchSuggestionEntry 