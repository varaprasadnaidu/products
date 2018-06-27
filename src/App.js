import React, { Component } from 'react';
import './App.css'; 
import ControlledExpansionPanels from './components/abc/products'
 import User from './components/user/user'
//import Details from './components/Details/details'

class App extends Component {
  render() {
    return (
      <div className="container">
      <h2>Product Details</h2>
         {/* <User />  */}
         <ControlledExpansionPanels/> 
        
      </div>
    );
  }
}

export default App;
