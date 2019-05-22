import React, {Component} from 'react'
import style from '../maindropdown.css'

class DropDownBrands extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
          <div className={style.mainmain} onMouseEnter={() => this.props.changeView('brands')} onMouseLeave={() => this.props.changeView('')} >

           <div className={style.maindropdown} >
                <ul>
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dwa369c7b5/_other/_navigation/text_originals.png" width="172" height="30" ></img></a></li>
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw07306ddc/_other/_navigation/nav-niteJogger_172x80.jpg" width="172" height="80" ></img></a></li>
                    <li><a href="#" >Shoes</a></li>
                    <li><a href="#" >Clothing</a></li>
                    <li><a href="#" >Accessories</a></li>
                    <li><a href="#" >New Arrivals</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" >YEEZY</a></li>
                    <li><a href="#" >P.O.D.System</a></li>
                    <li><a href="#" >NMD</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" className={style.special}>all adidas Originals</a></li>
                    
                </ul>
                
                <ul>
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw6d6cce30/_other/_navigation/adidas-logo-menu-2.jpg" width="172" height="30" ></img></a></li>
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw0cb88569/_other/_navigation/WDN-Thumbnail-Image-2-172x80.jpg" width="172" height="80" ></img></a></li>
                    <li><a href="#" >Men's Clothing </a></li>
                    <li><a href="#" >Women's Clothing</a></li>
                    <li><a href="#" >New Arrivals</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" >Z.N.E</a></li>
                    <li><a href="#" >ID</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" className={style.special} >all Athletics</a></li>
                </ul>
                
                <ul>
                    
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw0114e977/_other/_navigation/SM.png" width="172" height="30" ></img></a></li>
                
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dwb4c3da53/_other/_navigation/brand-nav-aSMC-update-mar01.jpg" width="172" height="80" ></img></a></li>
                    <li><a href="#" >Shoes</a></li>
                    <li><a href="#" >Clothing</a></li>
                    <li><a href="#" >Accessories</a></li>
                    <li><a href="#" >New Arrivals</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" >Tennis</a></li>
                    <li><a href="#" >Trainning</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#"className={style.special} >all adidas by Stella McCartney</a></li>
                    
                </ul>
                
                    <ul>
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dwe6dfb774/_other/_navigation/skateheaderline.jpg" width="172" height="30" ></img></a></li>
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dwe63cf1f0/_other/_navigation/H21966-Insley_instagram_2B-450606_top-nav.jpg" width="172" height="80" ></img></a></li>
                    <li><a href="#" >Shoes</a></li>
                    <li><a href="#" >Clothing</a></li>
                    <li><a href="#" >New Arrivals</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" >3MC</a></li>
                    <li><a href="#" >Matchcourt</a></li>
                    <li><a href="#" >Busenitz</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#"className={style.special} >all Skateboarding</a></li>
                

                </ul>
                
                <ul>
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw2f47d4ad/_other/_navigation/for-the-oceans-sustainability-header-navigation-logo-v2.jpg" width="172" height="30" ></img></a></li>
                    <li><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw4ad84540/_other/_navigation/for-the-oceans-sustainability-header-navigation-thumbnail-v2.jpg" width="172" height="80" ></img></a></li>
                    <li><a href="#" >Ocean Plastic</a></li>
                    <li><a href="#" >Recycled Polyester</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" className={style.special}>all Recycled Materials</a></li>
                </ul>

                <ul>
                    COLLECTIONS
                    <li><a href="#" >Superstar</a></li>
                    <li><a href="#" >Stan Smith</a></li>
                    <li><a href="#" >EQT</a></li>
                    <li><a href="#" >Gazelle</a></li>
                    <li><a href="#" >Campus</a></li>
                    <li><a href="#" >Tubular</a></li>
                    <li><a href="#" >Samba</a></li>
                    <li><a href="#" >I-5923</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li><a href="#" className={style.special}>adicolor Clothing</a></li>

                </ul>
                     
            </div>
          </div>
        )
    }
}



export default DropDownBrands