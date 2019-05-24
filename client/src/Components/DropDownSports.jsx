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
           
                        <ul className={style.ulDropDown}>
                    RUNNING
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw4fba440c/_other/_navigation/UB19_FLY_NAV.jpg" width="172" height="80" ></img></a></li>
                    <li className={style.liDropDown}><a href="#" >Shoes</a></li>
                    <li className={style.liDropDown}><a href="#" >Clothing</a></li>
                    <li className={style.liDropDown}><a href="#" >Accessories</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" >Ultraboost</a></li>
                    <li className={style.liDropDown}><a href="#" >Alphabounce</a></li>
                    <li className={style.liDropDown}><a href="#" >Pureboost</a></li>
                    <li className={style.liDropDown}><a href="#" >Boston Marathon</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" className={style.special}>all Running</a></li>
                    
                </ul>
                
                <ul className={style.ulDropDown}>
                    SOCCER
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw43da7dfe/_other/_navigation/Nav-image-redirect-nemeziz-v1.jpg" width="172" height="80" ></img></a></li>
                    <li className={style.liDropDown}><a href="#" >Shoes </a></li>
                    <li className={style.liDropDown}><a href="#" >Clothing</a></li>
                    <li className={style.liDropDown}><a href="#" >Accessories</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" >Predator</a></li>
                    <li className={style.liDropDown}><a href="#" >X</a></li>
                    <li className={style.liDropDown}><a href="#" >Nemeziz</a></li>
                    <li className={style.liDropDown}><a href="#" >Copa</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" className={style.special} >all Soccer</a></li>
                </ul>
                
                <ul className={style.ulDropDown}>
                OUTDOOR
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dwf8c4e6c2/_other/_navigation/outdoor_navbar.jpg" width="172" height="80" ></img></a></li>
                    <li className={style.liDropDown}><a href="#" >Shoes</a></li>
                    <li className={style.liDropDown}><a href="#" >Clothing</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" >TERREX</a></li>
                    <li className={style.liDropDown}><a href="#" >Hiking Boots</a></li>
                    <li className={style.liDropDown}><a href="#" >Winter Jackets</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" className={style.special} >all Outdoor</a></li>
                    
                </ul>
                
                    <ul className={style.ulDropDown}>
                    BASKETBALL
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dwd9a3db0c/_other/_navigation/Adidas_navigation_thumbnail_nextlevel_172x80.jpg" width="172" height="80" ></img></a></li>
                    <li className={style.liDropDown}><a href="#" >Shoes</a></li>
                    <li className={style.liDropDown}><a href="#" >Clothing</a></li>
                    <li className={style.liDropDown}><a href="#" >Accessories</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" >James Harden</a></li>
                    <li className={style.liDropDown}><a href="#" >Damian Lillard</a></li>
                    <li className={style.liDropDown}><a href="#" >Marquee Boost</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" className={style.special} >all Basketball</a></li>
                

                </ul>
                
                <ul className={style.ulDropDown}>
                    FOOTBALL
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw1420fa52/_other/_navigation/DeAndre-WebNav.jpg" width="172" height="80" ></img></a></li>
                    <li className={style.liDropDown}><a href="#" >Cleats</a></li>
                    <li className={style.liDropDown}><a href="#" >Clothing</a></li>
                    <li className={style.liDropDown}><a href="#" >Accessories</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" >Compression</a></li>
                    <li className={style.liDropDown}><a href="#" >Freak Cleats</a></li>
                    <li className={style.liDropDown}><a href="#" >Adizero Cleats</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" className={style.special} >all Football</a></li>

                </ul>

                <ul className={style.ulDropDown}>
                    OTHER SPORTS
                    <li className={style.liDropDown}><a href="#" >Training</a></li>
                    <li className={style.liDropDown}><a href="#" >Skateboarding</a></li>
                    <li className={style.liDropDown}><a href="#" >Snowboarding</a></li>
                    <li className={style.liDropDown}><a href="#" >Tennis</a></li>
                    <li className={style.liDropDown}><a href="#" >Golf</a></li>
                    <li className={style.liDropDown}><a href="#" >Hockey</a></li>
                    <li className={style.liDropDown}><a href="#" >Baseball</a></li>
                    <li className={style.liDropDown}><a href="#" >Lacrosse</a></li>
                    <li className={style.liDropDown}><a href="#" >Volleyball</a></li>
                    <li className={style.liDropDown}><a href="#" >Yoga</a></li>
                    <li className={style.liDropDown}><a href="#" >Weightlifting</a></li>
                    <li className={style.liDropDown}><a href="#" className={style.special} >Boxing</a></li>

                </ul>
            </div>
          </div>
        )
    }
}



export default DropDownSports