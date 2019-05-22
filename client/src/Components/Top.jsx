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
            <a className={style.newsletter} href="#" >NEWSLETTER SINGUP</a>
          </em>
          <div className={style.loginspacer} ></div>
          <a className={style.customerinfo} href="#">LOGIN</a>

        </div>
      </div>
    )
  }
}


export default Top


