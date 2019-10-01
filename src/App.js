import React, { Component } from 'react';
import './App.css';
import Bookstore from './Containers/Bookstore';



class App extends Component {
  render() {
    return (
      <div className="App">
          <Bookstore/>
      </div>
    );
  }
}

export default App;
