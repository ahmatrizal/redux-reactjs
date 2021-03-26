import React, { Component } from 'react'
import JumbotronComponent from './component/JumbotronComponent';
import NavbarComponent from './component/NavbarComponent';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import HomeContainer from './container/HomeContainer';
import DetailUserContainer from './container/DetailUserContainer';
import EditUserContainer from './container/EditUserContainer';
import TambahUserContainer from './container/TambahUserContainer';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter >
        <Route path="/" exact>
            <HomeContainer />
          </Route>
          <Route path="/tambah" exact>
            <TambahUserContainer />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserContainer />
          </Route>
          <Route path="/Edit/:id" exact>
            <EditUserContainer />
          </Route>
          </BrowserRouter>
      </div>
    );
  }
}

