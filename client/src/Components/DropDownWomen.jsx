import React, {Component} from 'react'
import style from '../maindropdown.css'

class DropDownWomen extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <div id="women" className={style.mainmain} onMouseEnter={() => this.props.changeView('women')} onMouseLeave={() => this.props.changeView('')} >
              
              <div className={style.maindropdown} >
                <ul className={style.ulDropDown}>
                    FEATURED
                    <li className={style.liDropDown}><a href="#" >New Arrivals</a></li>
                    <li className={style.liDropDown}><a href="#" >Best Sellers</a></li>
                    <li className={style.liDropDown}><a href="#" >Release Dates</a></li>
                    <li className="space"></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" >YEEZY</a></li>
                    <li className={style.liDropDown}><a href="#" >Nite Jogger</a></li>
                    <li className={style.liDropDown}><a href="#" >Ultraboost</a></li>
                    <li className={style.liDropDown}><a href="#" >NMD</a></li>
                    <li className={style.space}></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" className={style.special}>Sale</a></li>
                    <li className={style.liDropDown}><a href="#"className={style.special} >3 Stripe Promotion</a></li>
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw9bb3173d/_other/_navigation/30_off_3.jpg" width="172" height="80" ></img></a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    
                    
                </ul>
                
                <ul className={style.ulDropDown}>
                    SHOES
                    <li className={style.liDropDown}><a href="#" >Originals </a></li>
                    <li className={style.liDropDown}><a href="#" >Running</a></li>
                    <li className={style.liDropDown}><a href="#" >Workout</a></li>
                    <li className={style.liDropDown}><a href="#" >Basketball</a></li>
                    <li className={style.liDropDown}><a href="#" >Essentials</a></li>
                    <li className={style.liDropDown}><a href="#" >Sandals & Slides</a></li>
                    <li className={style.liDropDown}><a href="#" >Hiking</a></li>
                    <li className={style.liDropDown}><a href="#" >Tennis</a></li>
                    <li className={style.liDropDown}><a href="#" >Golf</a></li>
                    <li className={style.liDropDown}><a href="#" >Soccer</a></li>
                    <li className={style.liDropDown}><a href="#" >Voleyball</a></li>
                    <li className={style.liDropDown}><a href="#" >Sale Shoes</a></li>
                </ul>
                
                <ul className={style.ulDropDown}>
                CLOTHING
                    <li className={style.liDropDown}><a href="#" >Hoodies & Sweatshirts</a></li>
                    <li className={style.liDropDown}><a href="#" >Pants</a></li>
                    <li className={style.liDropDown}><a href="#" >Leggings & Tights</a></li>
                    <li className={style.liDropDown}><a href="#" >Sports Bras</a></li>
                    <li className={style.liDropDown}><a href="#" >Track Suits</a></li>
                    <li className={style.liDropDown}><a href="#" >Jackets & Vests</a></li>
                    <li className={style.liDropDown}><a href="#" >Short Sleeve Shirts</a></li>
                    <li className={style.liDropDown}><a href="#" >Long Sleeve Shirts</a></li>
                    <li className={style.liDropDown}><a href="#" >Dresses & Skirts</a></li>
                    <li className={style.liDropDown}><a href="#" >Shorts</a></li>
                    <li className={style.liDropDown}><a href="#" >Tank Tops</a></li>
                    <li className={style.liDropDown}><a href="#" >Sale Apparel</a></li>
                    
                </ul>
            
                    <ul className={style.ulDropDown}>
                    ACCESSORIES
                    <li className={style.liDropDown}><a href="#" >Bags & Backpacks</a></li>
                    <li className={style.liDropDown}><a href="#" >Hats & Beanies</a></li>
                    <li className={style.liDropDown}><a href="#" >Socks</a></li>
                    <li className={style.liDropDown}><a href="#" >Phone Cases</a></li>
                    <li className={style.liDropDown}><a href="#" >Sunglasses</a></li>
                    <li className={style.liDropDown}><a href="#" >Balls</a></li>
                    <li className={style.liDropDown}><a href="#" >Watches</a></li>
                    <li className={style.liDropDown}><a href="#" >Gloves</a></li>
                    <li className={style.liDropDown}><a href="#" >All Accessories</a></li>
                    <li className={style.liDropDown}><a href="#" >Sale Accessories</a></li>

                </ul>
                
                <ul className={style.ulDropDown}>
                    SPORTS
                    <li className={style.liDropDown}><a href="#" >Running</a></li>
                    <li className={style.liDropDown}><a href="#" >Training</a></li>
                    <li className={style.liDropDown}><a href="#" >Basketball</a></li>
                    <li className={style.liDropDown}><a href="#" >Outdoor</a></li>
                    <li className={style.liDropDown}><a href="#" >Tennis</a></li>
                    <li className={style.liDropDown}><a href="#" >Golf</a></li>
                    <li className={style.liDropDown}><a href="#" >Soccer</a></li>
                    <li className={style.liDropDown}><a href="#" >Volleyball</a></li>
                    <li className={style.liDropDown}><a href="#" >Skateboarding</a></li>
                    <li className={style.liDropDown}><a href="#" >Yoga</a></li>
                    <li className={style.liDropDown}><a href="#" >Lacrosse</a></li>
                    <li className={style.liDropDown}><a href="#" >Hockey</a></li>
                    <li className={style.liDropDown}><a href="#" >College Gear</a></li>

                </ul>

            </div>
           
          </div>
        )
    }
}



export default DropDownWomen