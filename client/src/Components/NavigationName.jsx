import React, { Component } from 'react'
import style from '../app.css'

class NavigationName extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style.mainmenu}>
        <div className={style.name} >
          <a className={style.label} >MEN</a>
        </div>
        <div className={style.name} >
          <a className={style.label} >WOMEN</a>
        </div>
        <div className={style.name}>
          <a className={style.label} >KIDS</a>
        </div>
        <div className={style.namespacer}></div>
        <div className={style.name} >
          <a className={style.label} >SPORTS</a>
        </div>
        <div className={style.name} >
          <a className={style.label} >BRANDS</a>
        </div>
      </div>

    )
  }

}

export default NavigationName