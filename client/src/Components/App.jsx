import React, { Component } from 'react'
import style from '../app.css'
import NavigationName from './NavigationName.jsx';
import Top from './Top.jsx'
import DropDownMen from './DropDownMen.jsx';
import DropDownWomen from './DropDownWomen.jsx';
import DropDownKid from './DropDownKid.jsx';
import DropDownSports from './DropDownSports.jsx'


class App extends Component {
  constructor() {
    super()
    this.state = {
      view: ""
      
    }
    this.changeView = this.changeView.bind(this);

  }
  changeView(option){
    this.setState({
      view: option
    },console.log(this.state.view))
  }
  rendering(){
    const { view } = this.state;
    if(view === "men"){
      return <DropDownMen changeView={this.changeView}/>;
    }else if(view === "women"){
      return <DropDownWomen changeView={this.changeView}/>;
    }else if(view === "kids"){
      return <DropDownKid changeView={this.changeView}/>;
    }else if(view === "sports"){
      return <DropDownSports changeView={this.changeView}/>;
    }else{
      return;
    }
  }



  render() {
    return (
      <div className={style.header}>
        <div>
          <Top />
        </div>
        <div className={style.main}>
          <div className={style.inner}>
            <a className={style.logo}>
            <span className={style.only}>adidas</span>
            </a>
            <NavigationName changeView={this.changeView}/>
            <div>Search</div>
            <div>Shopping Cart</div>
          </div>
        </div>
        {this.rendering()}
      </div>

    )
  }
}

export default App

