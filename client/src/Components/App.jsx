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
import DropDownSearch from './DropDownSearch.jsx'
import axios from 'axios'
import FreeShippingAndReturns from './FreeShippingAndReturns.jsx';
import Bottom from './Bottom.jsx'
import ShoppingCart from './ShoppingCart.jsx';
import Logo from './Logo.jsx';

class App extends Component {
  constructor() {
    super()
    this.state = {
      products:[],
      view: "",
      signUp: false,
      q:'',
      shipping: false,
      check: true
    }
    this.changeView = this.changeView.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleFreeShipping = this.handleFreeShipping.bind(this);
    this.changeCheckBox = this.changeCheckBox.bind(this);
  }
  componentDidMount(){
    this.fetchProducts();
  }
  fetchProducts(){
    axios
      .get('/api/nav')
      .then(data => {
        console.log(data.data);
        this.setState({
          products: data.data
        })
      })
      .catch(err => console.log('Error getting data',err))
  }
  changeCheckBox() {
    this.setState({
      check: !this.state.check 
    })
  }

  changeView(option){
    this.setState({
      view: option
    })
  }
  handleSignUp(){
    this.setState({
      signUp: !this.state.signUp
    })
  }
  handleSearchChange(option){
    this.setState({
      q: option
    })
  }
  renderSearch(){
    const { view , q } = this.state;
    var filterProducts = this.state.products.filter(product => {
      return product.category.toLowerCase().indexOf(q) !== -1;
    });
    const filterCategory = [];
    filterProducts.forEach(product => {
      filterCategory.push({category: product.category, productNumber: product.productNumber})
    });
    if(q.length > 2 && view ==='' && filterProducts.length > 0){
      return <DropDownSearch products={filterProducts.slice(0,4)} categories={filterCategory.slice(0,7)} q={this.state.q}/>
    }else {
      return;
    }
  }
  handleFreeShipping(){
    this.setState({
      shipping: !this.state.shipping,
      q:''
    })
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
        <div id="signup">
          <Top handleSignUp={this.handleSignUp}/>
        </div>
        {this.state.signUp ? <NewsletterSignUp changeCheckBox={this.changeCheckBox} check={this.state.check}/> : ""}
        <div className={style.main}>
          <div className={style.inner}>
            <Logo signUp={this.state.signUp}/>
            <NavigationName changeView={this.changeView} />
            <Search handleSearchChange={this.handleSearchChange}/>
            <ShoppingCart />
          </div>
        </div> 
        {this.state.view === "" && !this.state.signUp ? <Bottom  handleFreeShipping ={this.handleFreeShipping}  /> : ''}
        {this.rendering()}
        {this.renderSearch()}
        {this.state.shipping ?  <FreeShippingAndReturns handleFreeShipping={this.handleFreeShipping} /> : ''}
      </div>

    )
  }
}

export default App














