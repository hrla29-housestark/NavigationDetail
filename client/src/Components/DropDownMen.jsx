import React, {Component} from 'react'
import style from '../maindropdown.css'

class DropDownMen extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
          <div className={style.mainmain} onMouseEnter={() => this.props.changeView('men')} onMouseLeave={() => this.props.changeView('')} >

           <div className={style.maindropdown}  >
              <ul>
                FEATURED
                <li><a href="#" >New Arrivals</a></li>
                <li><a href="#" >Best Sellers</a></li>
                <li><a href="#" >Release Dates</a></li>
                <li className={style.space}></li>
                <li className={style.seperator}>&nbsb;</li>
                <li><a href="#" >YEEZY</a></li>
                <li><a href="#" >Nite Jogger</a></li>
                <li><a href="#" >Ultraboost</a></li>
                <li><a href="#" >NMD</a></li>
                <li><a href="#" >Damian Lillard</a></li>
                <li><a href="#" >Golf Collection</a></li>
                <li className={style.seperator}>&nbsb;</li>
                <li><a href="#" className={style.special}>Sale</a></li>
                <li><a href="#"className={style.special} >3 Stripe Promotion</a></li>
                <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw9bb3173d/_other/_navigation/30_off_3.jpg" width="172" height="80" ></img></a></li>
              </ul>
              
              <ul>
                SHOES
                <li><a href="#" >Originals </a></li>
                <li><a href="#" >Running</a></li>
                <li><a href="#" >Soccer</a></li>
                <li><a href="#" >Basketball</a></li>
                <li><a href="#" >Football</a></li>
                <li><a href="#" >Skateboarding</a></li>
                <li><a href="#" >Workout</a></li>
                <li><a href="#" >Essentials</a></li>
                <li><a href="#" >Sandals & Slides</a></li>
                <li><a href="#" >Hiking</a></li>
                <li><a href="#" >Golf</a></li>
                <li><a href="#" >Tennis</a></li>
                <li><a href="#" >Baseball</a></li>
                <li><a href="#" >Sale Shoes</a></li>
              </ul>
              
              <ul>
              CLOTHING
                <li><a href="#" >Pants</a></li>
                <li><a href="#" >Hoodies & Sweatshirts</a></li>
                <li><a href="#" >Jackets & Vests</a></li>
                <li><a href="#" >Track & Suits</a></li>
                <li><a href="#" >Short Sleeve Shirts</a></li>
                <li><a href="#" >T-shirts</a></li>
                <li><a href="#" >Long Sleeve Shirts</a></li>
                <li><a href="#" >Jerseys</a></li>
                <li><a href="#" >Tights</a></li>
                <li><a href="#" >Shorts</a></li>
                <li><a href="#" >Tank Tops</a></li>
                <li><a href="#" >Sale Apparel</a></li>
                
              </ul>
              
                <ul>
                ACCESSORIES
                <li><a href="#" >Bags & Backpacks</a></li>
                <li><a href="#" >Hats & Beanies</a></li>
                <li><a href="#" >Socks</a></li>
                <li><a href="#" >Underwear</a></li>
                <li><a href="#" >Phone Cases</a></li>
                <li><a href="#" >Sunglassesv</a></li>
                <li><a href="#" >Balls</a></li>
                <li><a href="#" >Watches</a></li>
                <li><a href="#" >Gloves</a></li>
                <li><a href="#" >All Accessories</a></li>
                <li><a href="#" >Sale Accessories</a></li>

              </ul>
              
              <ul>
                SPORTS
                
                <li><a href="#" >Running</a></li>
                <li><a href="#" >Soccer</a></li>
                <li><a href="#" >Basketball</a></li>
                <li><a href="#" >Football</a></li>
                <li><a href="#" >Skateboarding</a></li>
                <li><a href="#" >Training</a></li>
                <li><a href="#" >Outdoor</a></li>
                <li><a href="#" >Tennis</a></li>
                <li><a href="#" >Hockey</a></li>
                <li><a href="#" >Baseball</a></li>
                <li><a href="#" >Lacrosse</a></li>
                <li><a href="#" >Volleyball</a></li>
                <li><a href="#" >Weightlifting</a></li>
                <li><a href="#" >College Gear</a></li>
                
              </ul>

  
  
            </div>
        </div>
        )
    }
}



export default DropDownMen