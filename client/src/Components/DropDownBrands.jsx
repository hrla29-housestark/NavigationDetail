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
                <ul className={style.ulDropDown}>
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dwa369c7b5/_other/_navigation/text_originals.png" width="172" height="30" ></img></a></li>
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw07306ddc/_other/_navigation/nav-niteJogger_172x80.jpg" width="172" height="80" ></img></a></li>
                    <li className={style.liDropDown}><a href="#" >Shoes</a></li>
                    <li className={style.liDropDown}><a href="#" >Clothing</a></li>
                    <li className={style.liDropDown}><a href="#" >Accessories</a></li>
                    <li className={style.liDropDown}><a href="#" >New Arrivals</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" >YEEZY</a></li>
                    <li className={style.liDropDown}><a href="#" >P.O.D.System</a></li>
                    <li className={style.liDropDown}><a href="#" >NMD</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" className={style.special}>all adidas Originals</a></li>
                    
                </ul>
                
                <ul className={style.ulDropDown}>
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw6d6cce30/_other/_navigation/adidas-logo-menu-2.jpg" width="172" height="30" ></img></a></li>
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw0cb88569/_other/_navigation/WDN-Thumbnail-Image-2-172x80.jpg" width="172" height="80" ></img></a></li>
                    <li className={style.liDropDown}><a href="#" >Men's Clothing </a></li>
                    <li className={style.liDropDown}><a href="#" >Women's Clothing</a></li>
                    <li className={style.liDropDown}><a href="#" >New Arrivals</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" >Z.N.E</a></li>
                    <li className={style.liDropDown}><a href="#" >ID</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" className={style.special} >all Athletics</a></li>
                </ul>
                
                <ul className={style.ulDropDown}>
                    
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw0114e977/_other/_navigation/SM.png" width="172" height="30" ></img></a></li>
                
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dwb4c3da53/_other/_navigation/brand-nav-aSMC-update-mar01.jpg" width="172" height="80" ></img></a></li>
                    <li className={style.liDropDown}><a href="#" >Shoes</a></li>
                    <li className={style.liDropDown}><a href="#" >Clothing</a></li>
                    <li className={style.liDropDown}><a href="#" >Accessories</a></li>
                    <li className={style.liDropDown}><a href="#" >New Arrivals</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" >Tennis</a></li>
                    <li className={style.liDropDown}><a href="#" >Trainning</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#"className={style.special} >all adidas by Stella McCartney</a></li>
                    
                </ul>
                
                    <ul className={style.ulDropDown}>
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dwe6dfb774/_other/_navigation/skateheaderline.jpg" width="172" height="30" ></img></a></li>
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dwe63cf1f0/_other/_navigation/H21966-Insley_instagram_2B-450606_top-nav.jpg" width="172" height="80" ></img></a></li>
                    <li className={style.liDropDown}><a href="#" >Shoes</a></li>
                    <li className={style.liDropDown}><a href="#" >Clothing</a></li>
                    <li className={style.liDropDown}><a href="#" >New Arrivals</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" >3MC</a></li>
                    <li className={style.liDropDown}><a href="#" >Matchcourt</a></li>
                    <li className={style.liDropDown}><a href="#" >Busenitz</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#"className={style.special} >all Skateboarding</a></li>
                

                </ul>
                
                <ul className={style.ulDropDown}>
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw2f47d4ad/_other/_navigation/for-the-oceans-sustainability-header-navigation-logo-v2.jpg" width="172" height="30" ></img></a></li>
                    <li className={style.liDropDown}><a href="#" ><img src="https://www.adidas.com/on/demandware.static/-/Sites-adidas-US-Library/en_US/dw4ad84540/_other/_navigation/for-the-oceans-sustainability-header-navigation-thumbnail-v2.jpg" width="172" height="80" ></img></a></li>
                    <li className={style.liDropDown}><a href="#" >Ocean Plastic</a></li>
                    <li className={style.liDropDown}><a href="#" >Recycled Polyester</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" className={style.special}>all Recycled Materials</a></li>
                </ul>

                <ul className={style.ulDropDown}>
                    COLLECTIONS
                    <li className={style.liDropDown}><a href="#" >Superstar</a></li>
                    <li className={style.liDropDown}><a href="#" >Stan Smith</a></li>
                    <li className={style.liDropDown}><a href="#" >EQT</a></li>
                    <li className={style.liDropDown}><a href="#" >Gazelle</a></li>
                    <li className={style.liDropDown}><a href="#" >Campus</a></li>
                    <li className={style.liDropDown}><a href="#" >Tubular</a></li>
                    <li className={style.liDropDown}><a href="#" >Samba</a></li>
                    <li className={style.liDropDown}><a href="#" >I-5923</a></li>
                    <li className={style.seperator}>&nbsb;</li>
                    <li className={style.liDropDown}><a href="#" className={style.special}>adicolor Clothing</a></li>

                </ul>
                     
            </div>
          </div>
        )
    }
}



export default DropDownBrands