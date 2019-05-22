import React, { Component } from "react"
import style from '../newsletter.css'

class NewsletterSignUp extends Component {
  constructor() {
    super()
  }



  render() {
    return (
      <div>
        <div className={style.newspaperMain}>
          <div className={style.newspaperLine1}>

            <div className={style.subscribe}>
              <div className={style.innerSubscribe}>
                <div className={style.rootSubscribe}>
                  <span><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/default/dwb5c087f6/logo/mail.png" width="88" heigth="88" ></img></span>
                  <div><span>SUBSCRIBE FOR EMAIL TO STAY UP TO DATE</span></div>
                </div>
              </div>
            </div>

            <div className={style.subscribe}>
              <div className={style.innerSubscribe}>
                <div className={style.rootSubscribe}>
                  <span><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/default/dw4984bd3d/logo/percent.png" width="88" heigth="88" ></img></span>
                  <div><span>SAVE 15% ON YOUR NEXT ORDER</span></div>
                </div>
              </div>
            </div>

            <div className={style.subscribe}>
              <div className={style.innerSubscribe}>
                <div className={style.rootSubscribe}>
                  <span><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/default/dw539f50c4/logo/star.png" width="88" heigth="88" ></img></span>
                  <div><span>EXCLUSIVE OFFERS & PROMOTIONS</span></div>
                </div>
              </div>
            </div>

          </div>

          <div className={style.part2}>
            <form>
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
                      <label className={style.checkboxLabel}>
                        <input type="checkbox" className={style.inputCheckBox} checked />
                        <span className={style.spanCheckBox}>Yes, I am over 13 years old</span>
                        <span className={style.spanLabelInput}>*</span>
                        <button className={style.buttonCheckBox}>?</button>
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
                  <svg className={style.icon}>
                    <path stroke="white" store-width="1" d="M1 8 H100" />
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