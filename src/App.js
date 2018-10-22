import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from "./components/CartHeader.jsx";
import CartFooter from "./components/CartFooter.jsx";
import CartItems  from "./components/CartItems.jsx";
import AddItem  from "./components/AddItem.jsx";
import CartItemComponent from "./components/CartItemComponent.jsx";

class App extends Component {
  
  state  = {
     cartItemsList : [],
    products : [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ]
  }

  addItem = (id, quantity) => {
    
    this.setState((prevState)=>{
      
      const state = prevState;
      const products = state.products;
  
      for(let i = 0; i < products.length; i++){
        const product = products[i];
        if(product.id === id){

          const newItem = {product, quantity};

          state.cartItemsList.push(newItem);
          
          return state;
        
        }
      
      }

    });


  }

  render () {
    return (
      <div className="App"> 
        <CartHeader />
        <CartItems cartItemsList={this.state.cartItemsList} />
        <AddItem products={this.state.products} addItem={this.addItem}/>
        <CartFooter />
      </div>
    );
  }

}
  


export default App;
