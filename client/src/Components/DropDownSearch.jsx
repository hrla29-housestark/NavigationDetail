import React, { Component } from 'react'
import style from '../dropdownsearch.css'
import DropDownSearchProductEntry from './DropDownSearchProductEntry.jsx'
import DropDownSearchSuggestionEntry from './DropDownSearchSuggestionEntry.jsx'

class DropDownSearch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style.searchMainDropDown}>

        <div className={style.searchRow}>
          <div className={style.searchColumn1}>
            <ul className={style.suggestions}>
              <li className={style.headingLabel}>SUGGESTIONS</li>
              {this.props.categories.map((category,index) => <DropDownSearchSuggestionEntry category={category} q={this.props.q} key={index}/>)}
            </ul>
            <div className={style.seeAll}>See all "{this.props.q}"</div>
          </div>
          
          <div className={style.searchColumn2}>
            <ul className={style.products}>
              <li className={style.productHeadingLabel}>Products</li>
              
              {this.props.products.map((product,index) => <DropDownSearchProductEntry product={product} key={index}/> )}
              
            
      </ul >
    </div >
  </div >
  
</div >
        )
  }
}


export default DropDownSearch