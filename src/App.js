import React, { Component } from 'react';
import './App.css';
import { BackTop } from 'antd';
import Head from './layout/Head'
import Foot from './layout/Foot'
import router from './router/index'
import {HashRouter,Route,Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BackTop />
        <Head></Head>
        <div className="App-content">
          <HashRouter>
              <Switch>
                  {
                    router.map((route, i) =>
                      <Route exact key={i} path={route.path} component={route.component}/>
                    )
                  }
              </Switch>
          </HashRouter>
        </div>
        <Foot></Foot>
      </div>
    );
  }
}
export default App;

