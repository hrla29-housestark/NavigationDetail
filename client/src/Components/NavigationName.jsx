import React, { Component } from 'react'
import style from '../app.css'

class NavigationName extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style.mainmenu} >
        <div className={style.name} onMouseEnter={() => this.props.changeView('men')} onMouseLeave={() => this.props.changeView('')}>
          <p className={style.label} >MEN</p>
        </div>
        <div className={style.name} onMouseOver={() => this.props.changeView('women')} onMouseLeave={() => this.props.changeView('')}>
          <p className={style.label} >WOMEN</p>
        </div>
        <div className={style.name} onMouseOver={() => this.props.changeView('kids')} onMouseLeave={() => this.props.changeView('')} >
          <p className={style.label} >KIDS</p>
        </div>
        <div className={style.namespacer}></div>
        <div className={style.name} onMouseOver={() => this.props.changeView('sports')} onMouseLeave={() => this.props.changeView('')}>
          <p className={style.label} >SPORTS</p>
        </div>
        <div className={style.name} onMouseOver={() => this.props.changeView('brands')} onMouseLeave={() => this.props.changeView('')}>
          <p className={style.label} >BRANDS</p>
        </div>
      </div>

    )
  }

}

export default NavigationName