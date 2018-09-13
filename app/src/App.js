import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header></Header>
        
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ben's First React Page</h1>
        </header>
        
        <body>
          <div className="AppPic">
          <ChangePic></ChangePic>
          </div>
        </body>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <h1>Ben's React Page</h1>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="App-Footer"></div>
    );
  }
}

class ChangePic extends Component {
  render() {
    let num = Math.floor(Math.random() * 10);
    return (
      <div class="evenOrOdd">
      Random Number: {num}
      <br></br>
      Is it Even?
      <div class="randomPic">{ num % 2 === 0 ?
        <img src= "http://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Up_Hand_Sign_Emoji_grande.png?v=1480481047" class= "thumbs"/> : <img src="http://cdn.shopify.com/s/files/1/1061/1924/products/White_Thumbs_Down_Sign_Emoji_grande.png?v=1480481028" class="thumbs"/>
      }</div>

      </div>
    );
  }
}
export default App;
