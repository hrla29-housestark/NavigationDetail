import React, { Component } from 'react'
import style from '../app.css'

class Top extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className={style.headertop}>
        <div className={style.headerinner}>
          <a className={style.customerinfo} href="#" >HELP</a>
          <div className={style.spacer}></div>
          <a className={style.customerinfo} href="#">ORDER TRACKER AND RETURNS</a>
          <div className={style.spacer}></div>
          <em onClick={() => this.props.handleSignUp()}>
            <a className={style.newsletter} href="#" >NEWSLETTER SIGNUP</a>
          </em>
          <div className={style.loginspacer} ></div>
          <a className={style.customerinfo} href="#">
          LOG IN
            <svg className={style.loginSvg}  viewBox="0 0 20 24" width="20px" height="27px">
              <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2">
                <path d="M19 20.5L15.63 16H4.38L1 20.5"></path>
                <circle cx="10" cy="8.5" r="4.5"></circle>
              </g>
            </svg>
          </a>

        </div>
      </div>
    )
  }
}


export default Top


