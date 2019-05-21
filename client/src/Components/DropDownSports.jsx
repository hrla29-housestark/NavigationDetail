import React, {Component} from 'react'
import style from '../maindropdown.css'

class DropDownSports extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
          <div className={style.mainmain} onMouseEnter={() => this.props.changeView('sports')} onMouseLeave={() => this.props.changeView('')} >

           <div className={style.maindropdown} >
           
                        <ul>
                    RUNNING
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw4fba440c/_other/_navigation/UB19_FLY_NAV.jpg" width="172" height="80" ></img></a></li>
                    <li><a href="#" >Shoes</a></li>
                    <li><a href="#" >Clothing</a></li>
                    <li><a href="#" >Accessories</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" >Ultraboost</a></li>
                    <li><a href="#" >Alphabounce</a></li>
                    <li><a href="#" >Pureboost</a></li>
                    <li><a href="#" >Boston Marathon</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" className={style.special}>all Running</a></li>
                    
                </ul>
                
                <ul>
                    SOCCER
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw43da7dfe/_other/_navigation/Nav-image-redirect-nemeziz-v1.jpg" width="172" height="80" ></img></a></li>
                    <li><a href="#" >Shoes </a></li>
                    <li><a href="#" >Clothing</a></li>
                    <li><a href="#" >Accessories</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" >Predator</a></li>
                    <li><a href="#" >X</a></li>
                    <li><a href="#" >Nemeziz</a></li>
                    <li><a href="#" >Copa</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" className={style.special} >all Soccer</a></li>
                </ul>
                
                <ul>
                OUTDOOR
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dwf8c4e6c2/_other/_navigation/outdoor_navbar.jpg" width="172" height="80" ></img></a></li>
                    <li><a href="#" >Shoes</a></li>
                    <li><a href="#" >Clothing</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" >TERREX</a></li>
                    <li><a href="#" >Hiking Boots</a></li>
                    <li><a href="#" >Winter Jackets</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" className={style.special} >all Outdoor</a></li>
                    
                </ul>
                
                    <ul>
                    BASKETBALL
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dwd9a3db0c/_other/_navigation/Adidas_navigation_thumbnail_nextlevel_172x80.jpg" width="172" height="80" ></img></a></li>
                    <li><a href="#" >Shoes</a></li>
                    <li><a href="#" >Clothing</a></li>
                    <li><a href="#" >Accessories</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" >James Harden</a></li>
                    <li><a href="#" >Damian Lillard</a></li>
                    <li><a href="#" >Marquee Boost</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" className={style.special} >all Basketball</a></li>
                

                </ul>
                
                <ul>
                    FOOTBALL
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw1420fa52/_other/_navigation/DeAndre-WebNav.jpg" width="172" height="80" ></img></a></li>
                    <li><a href="#" >Cleats</a></li>
                    <li><a href="#" >Clothing</a></li>
                    <li><a href="#" >Accessories</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" >Compression</a></li>
                    <li><a href="#" >Freak Cleats</a></li>
                    <li><a href="#" >Adizero Cleats</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" className={style.special} >all Football</a></li>

                </ul>

                <ul>
                    OTHER SPORTS
                    <li><a href="#" >Training</a></li>
                    <li><a href="#" >Skateboarding</a></li>
                    <li><a href="#" >Snowboarding</a></li>
                    <li><a href="#" >Tennis</a></li>
                    <li><a href="#" >Golf</a></li>
                    <li><a href="#" >Hockey</a></li>
                    <li><a href="#" >Baseball</a></li>
                    <li><a href="#" >Lacrosse</a></li>
                    <li><a href="#" >Volleyball</a></li>
                    <li><a href="#" >Yoga</a></li>
                    <li><a href="#" >Weightlifting</a></li>
                    <li><a href="#" className={style.special} >Boxing</a></li>

                </ul>
            </div>
          </div>
        )
    }
}



export default DropDownSports