import React, { Component } from 'react'
import style from '../app.css'
import NavigationName from './NavigationName.jsx';
import Top from './Top.jsx'
import DropDownMen from './DropDownMen.jsx';
import DropDownWomen from './DropDownWomen.jsx';
import DropDownKid from './DropDownKid.jsx';
import DropDownSports from './DropDownSports.jsx'
import NewsletterSignUp from './NewsletterSignUp.jsx';
import DropDownBrands from './DropDownBrands.jsx';
import Search from './Search.jsx';


class App extends Component {
  constructor() {
    super()
    this.state = {
      view: "",
      signUp: false,
    }
    this.changeView = this.changeView.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }
  changeView(option){
    this.setState({
      view: option
    },console.log(this.state.view))
  }
  handleSignUp(){
    this.setState({
      signUp: !this.state.signUp
    },console.log("clicked"))
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
    }else if(view === "brands"){
      return <DropDownBrands changeView={this.changeView}/>;
    }
    else{
      return;
    }
  }



  render() {
    return (
      <div className={style.header}>
        <div>
          <Top handleSignUp={this.handleSignUp}/>
        </div>
        {this.state.signUp ? <NewsletterSignUp /> : ""}
        <div className={style.main}>
          <div className={style.inner}>
          {this.state.signUp ? <a className={style.active}>
            <span className={style.only}>adidas</span>
            </a> : <a className={style.logo}>
            <span className={style.only}>adidas</span>
            </a>}

            <NavigationName changeView={this.changeView} />
            <Search />
            <div>Cart</div>
          </div>
        </div>
        {this.rendering()}
      </div>

    )
  }
}

export default App

