import React, {Component} from 'react'
import style from '../maindropdown.css'

class DropDownKid extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
          <div className={style.mainmain} onMouseEnter={() => this.props.changeView('kids')} onMouseLeave={() => this.props.changeView('')} >

           <div className={style.maindropdown}  >
            <ul className={style.ulDropDown}>
                FEATURED
                
                <li className={style.liDropDown}><a href="#" >New Arrivals</a></li>
                <li className={style.liDropDown}><a href="#" >Best Sellers</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li className={style.liDropDown}><a href="#" >Ultraboost</a></li>
                <li className={style.liDropDown}><a href="#" >Nite Jogger</a></li>
                <li className={style.liDropDown}><a href="#" >NMD</a></li>
                <li className={style.liDropDown}><a href="#" >adicolor</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li className={style.liDropDown}><a href="#" className={style.special}>Sale</a></li>
                <li className={style.liDropDown}><a href="#"className={style.special} >3 Stripe Promotion</a></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.longseperator}>&nbsb;</li>
                
            </ul>
            
            <ul className={style.ulDropDown}>
                YOUTH<br></br>
                (AGE 8-14)
                <li className={style.liDropDown}><a href="#" >Boys Shoes </a></li>
                <li className={style.liDropDown}><a href="#" >Girls Shoes</a></li>
                <li className={style.liDropDown}><a href="#" >Originals Shoes</a></li>
                <li className={style.liDropDown}><a href="#" >Sport Shoes</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li className={style.liDropDown}><a href="#" >Bots Clothing</a></li>
                <li className={style.liDropDown}><a href="#" >Girls Clothing</a></li>
                <li className={style.liDropDown}><a href="#" >Hoodies & Sweatshirts</a></li>
                <li className={style.liDropDown}><a href="#" >Pants & Shorts</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li className={style.liDropDown}><a href="#" >Sale</a></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.longseperator}>&nbsb;</li>
                <li className={style.liDropDown}><a href="#" className={style.special}>all Youth</a></li>
                
                
            
            </ul>
            
            <ul className={style.ulDropDown}>
                CHILDREN<br></br>
                (AGE 4-8)
                <li className={style.liDropDown}><a href="#" >Boys Shoes</a></li>
                <li className={style.liDropDown}><a href="#" >Girls Shoes</a></li>
                <li className={style.liDropDown}><a href="#" >Originals Shoes</a></li>
                <li className={style.liDropDown}><a href="#" >Sports Shoes</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li className={style.liDropDown}><a href="#" >Boys Clothing</a></li>
                <li className={style.liDropDown}><a href="#" >Girls Clothing</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li className={style.liDropDown}><a href="#" >Sale</a></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.longseperator}>&nbsb;</li>
            <li className={style.liDropDown}><a href="#" className={style.special}>all Children</a></li>

                
            </ul>
            
                <ul className={style.ulDropDown}>
                BABY & TODDLER<br></br>
                (AGE 0-4)
                <li className={style.liDropDown}><a href="#" >Shoes</a></li>
                <li className={style.liDropDown}><a href="#" >Clothing</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li className={style.liDropDown}><a href="#" >Sale</a></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.longseperator}>&nbsb;</li>
                <li className={style.liDropDown}><a href="#" className={style.special}>All Baby & Toddler</a></li>

            </ul>
  
            <ul className={style.ulDropDown}>
                ACCESSORIES
                
                <li className={style.liDropDown}><a href="#" >Socks</a></li>
                <li className={style.liDropDown}><a href="#" >Hats & Beanies</a></li>
                <li className={style.liDropDown}><a href="#" >Balls</a></li>
            </ul>

  
  
            </div>
          </div>
        )
    }
}



export default DropDownKid