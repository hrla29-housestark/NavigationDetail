import React, { Component } from 'react'
import style from '../app.css'
class Search extends Component {
  constructor() {
    super()
    this.state ={
      active: false,
      search:''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCross = this.handleCross.bind(this);
  }
  handleClick() {
    this.setState({
      active: !this.state.active
    })
  }
  handleChange(event){
    this.setState({
      search: event.target.value
    })
  }
  handleCross(){
    this.setState({
      search:''
    })
  }



  render() {
    var result;
    this.state.active ? result= style.activeSearchWrapper : result= style.searchWrapper ;
    return (
      <div className={style.searchMain}>
        <div className={result}>
          <div className={style.searchIcon} onClick={() => this.handleClick()} ><img src="https://i.ya-webdesign.com/images/png-search-2.png" width="19"></img></div>
          <form className={style.formSearch} onClick={() => this.handleClick()}>
            <input className={style.inputSearch} placeholder="search" value={this.state.search} onChange={this.handleChange}/>
          </form>
          {this.state.search.length > 0 ? <div className={style.inputCross} onClick={() => this.handleCross()} >X</div> : <div className={style.inputCross}></div>}
        </div>
      </div>
    )
  }
}


export default Search