import React, { Component } from 'react';
import './App.css';
import { BackTop } from 'antd';
import Head from './layout/Head'
import Home from './views/Home/Home'
class App extends Component {
  render() {
    return (
      <div className="App">
        <BackTop />
        <Head></Head>
        <div className="App-content">
          <Home></Home>
        </div>
        <header className="App-header">
          <p>Bonjour react</p>
        </header>
      </div>
    );
  }
}
export default App;

