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
            <ul>
                FEATURED
                
                <li><a href="#" >New Arrivals</a></li>
                <li><a href="#" >Best Sellers</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li><a href="#" >Ultraboost</a></li>
                <li><a href="#" >Nite Jogger</a></li>
                <li><a href="#" >NMD</a></li>
                <li><a href="#" >adicolor</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li><a href="#" className={style.special}>Sale</a></li>
                <li><a href="#"className={style.special} >3 Stripe Promotion</a></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.longseperator}>&nbsb;</li>
                
            </ul>
            
            <ul>
                YOUTH<br></br>
                (AGE 8-14)
                <li><a href="#" >Boys Shoes </a></li>
                <li><a href="#" >Girls Shoes</a></li>
                <li><a href="#" >Originals Shoes</a></li>
                <li><a href="#" >Sport Shoes</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li><a href="#" >Bots Clothing</a></li>
                <li><a href="#" >Girls Clothing</a></li>
                <li><a href="#" >Hoodies & Sweatshirts</a></li>
                <li><a href="#" >Pants & Shorts</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li><a href="#" >Sale</a></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.longseperator}>&nbsb;</li>
                <li><a href="#" className={style.special}>all Youth</a></li>
                
                
            
            </ul>
            
            <ul>
                CHILDREN<br></br>
                (AGE 4-8)
                <li><a href="#" >Boys Shoes</a></li>
                <li><a href="#" >Girls Shoes</a></li>
                <li><a href="#" >Originals Shoes</a></li>
                <li><a href="#" >Sports Shoes</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li><a href="#" >Boys Clothing</a></li>
                <li><a href="#" >Girls Clothing</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li><a href="#" >Sale</a></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.space}></li>
                <li className={style.longseperator}>&nbsb;</li>
            <li><a href="#" className={style.special}>all Children</a></li>

                
            </ul>
            
                <ul>
                BABY & TODDLER<br></br>
                (AGE 0-4)
                <li><a href="#" >Shoes</a></li>
                <li><a href="#" >Clothing</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li><a href="#" >Sale</a></li>
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
                <li><a href="#" className={style.special}>All Baby & Toddler</a></li>

            </ul>
  
            <ul>
                ACCESSORIES
                
                <li><a href="#" >Socks</a></li>
                <li><a href="#" >Hats & Beanies</a></li>
                <li><a href="#" >Balls</a></li>
            </ul>

  
  
            </div>
          </div>
        )
    }
}



export default DropDownKid