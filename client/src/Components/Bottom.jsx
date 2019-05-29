import React, { Component } from 'react'
import style from '../bottom.css'
class Bottom extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style.bottomMain}>

        <div className={style.bottomInnerMain}>

          <div className={style.bottomFirst}>
            <svg className={style.carIcon} viewBox="0 0 19 19" width="100%" height="100%"><g fill="none" stroke="currentColor" strokeMiterlimit="10"><path d="M13.42 13.5H9.5"></path><path strokeLinecap="square" d="M4.5 5.5h10l4 3v5h-2M6.5 13.5h-2m0-6h-4"></path><circle cx="8" cy="13" r="1.5"></circle><circle cx="15" cy="13" r="1.5"></circle><path strokeLinecap="square" d="M1.5 9.5h3m-2 2h2"></path></g></svg>
            <div id="itemName" className={style.itemName} onClick={() => this.props.handleFreeShipping()}>
              FREE SHIPPING AND FREE RETURNS
            </div>
          </div>

          <div className={style.bottomFirst}>
            <img className={style.imgBottomFirst} src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw0d789009/_other/adidas_icon_creatorID_WHITE_v6.png"></img>
            <div className={style.itemName} href="/us/creatorsclub">CREATORS GET REWARDED – JOIN THE NEW ADIDAS CREATORS CLUB</div>
          </div>

        </div>


      </div>
    )
  }
}
export default Bottom