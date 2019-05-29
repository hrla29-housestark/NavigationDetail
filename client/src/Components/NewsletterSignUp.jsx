import React, { Component } from "react"
import style from '../newsletter.css'

class NewsletterSignUp extends Component {
  constructor(props) {
    super(props)
    
  }

  


  render() {
    var result;
    this.props.check ? result = style.iconBox : result= style.iconBoxPassive ;
    return (
      <div>
        <div className={style.newspaperMain}>
          <div className={style.newspaperLine1}>

            <div className={style.subscribe}>
              <div className={style.innerSubscribe}>
                <div className={style.rootSubscribe}>
                  <span><img className={style.spanImg} src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/default/dwb5c087f6/logo/mail.png" width="88" heigth="88" ></img></span>
                  <div><span>SUBSCRIBE FOR EMAIL TO STAY UP TO DATE</span></div>
                </div>
              </div>
            </div>

            <div className={style.subscribe}>
              <div className={style.innerSubscribe}>
                <div className={style.rootSubscribe}>
                  <span ><img className={style.spanImg} src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/default/dw4984bd3d/logo/percent.png" width="88" heigth="88" ></img></span>
                  <div><span>SAVE 15% ON YOUR NEXT ORDER</span></div>
                </div>
              </div>
            </div>

            <div className={style.subscribe}>
              <div className={style.innerSubscribe}>
                <div className={style.rootSubscribe}>
                  <span><img className={style.spanImg} src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/default/dw539f50c4/logo/star.png" width="88" heigth="88" ></img></span>
                  <div><span>EXCLUSIVE OFFERS & PROMOTIONS</span></div>
                </div>
              </div>
            </div>

          </div>

          <div className={style.part2}>
            <form className={style.form}>
              <div className={style.emailInputSection}>

                <div className={style.innerEmail}>
                  <input type="email" className={style.inputEmail} />
                  <label className={style.labelInput}>EMAIL
                      <span className={style.spanLabelInput}>*</span>
                  </label>
                  <div className={style.divEmail}>For first time subscribers only</div>
                </div>

              </div>

              <div className={style.ageSection}>
                <div className={style.ageRow}>
                  <div className={style.ageRow1}>
                    <div>
                      <label className={style.checkboxLabel} >
                        <svg className={result} onClick={() => this.props.changeCheckBox()}  viewBox="0 0 16 24" width="100%" height="100%">
                          <path fill="none" stroke="currentColor" strokeMiterlimit="10"  strokeWidth="2" d="M1 13l4 4L15 7"></path>
                        </svg>
                        <span className={style.spanCheckBox}>Yes, I am over 13 years old</span>
                        <span className={style.spanLabelInput}>*</span>
                       <div className={style.buttondeneme} >?</div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.radioMenu}>
                <div className={style.genderLabel}>GENDER</div>
                <div className={style.radioButtons}>
                  <div className={style.radio}>
                    <input type="radio" className={style.radioInput} />
                    <label>Male</label>
                  </div>
                  <div className={style.radio}>
                    <input type="radio" className={style.radioInput} />
                    <label>Female</label>
                  </div>
                </div>
              </div>
              <div className={style.signup}>
                <button type="button">Sign up
                  <svg className={style.icon} viewBox="0 0 24 24" width="100%" height="100%">
                    <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <footer>
            <div>
              <span>Sign me up for the adidas emails, featuring exclusive offers, latest product info, news about upcoming events and more.Please see our</span>
              <span><a href="#">Terms & Conditions</a></span>
              <span>and</span>
              <span><a href="#">Privacy & Policy</a></span>
              <span>for more details. Selected products may be excluded from the 15% promotion.</span>
            </div>

          </footer>

        </div>

      </div>
    )
  }
}


export default NewsletterSignUp