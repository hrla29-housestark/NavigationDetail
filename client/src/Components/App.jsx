import React, { Component } from 'react'
import style from '../app.css'
import NavigationName from './NavigationName.jsx';
import Top from './Top.jsx'


class App extends Component {
  constructor() {
    super()

  }


  render() {
    return (
      <div className={style.header}>
        <div>
          <Top />
        </div>
        <div className={style.main}>
          <div className={style.inner}>
            <a className={style.logo}>
            <span className={style.only}>adidas</span>
            </a>
            <NavigationName />
            <div>Search</div>
            <div>Shopping Cart</div>
          </div>
        </div>
      </div>

    )
  }
}

export default App

