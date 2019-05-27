import React, { Component } from 'react'
import style from '../app.css'

class ShoppingCart extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className={style.shopMain}>
        <div className={style.shoppingCartMain}>
          <svg className={style.shoppingCartSvg} viewBox="0 0 16 24" width="100%" height="100%">
            <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2">
              <path d="M1 7h14v14H1z"></path><path d="M11 10V3H5v7"></path>
            </g>
          </svg>
        </div>

      </div>
    )
  }
}

export default ShoppingCart



