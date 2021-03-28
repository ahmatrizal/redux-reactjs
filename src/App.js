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
          <Route path="/" exact component={HomeContainer} />
          <Route path="/tambah" exact component={TambahUserContainer} />
          <Route path="/detail/:id" exact component={DetailUserContainer} />
          <Route path="/Edit/:id" exact component={EditUserContainer} />
        </BrowserRouter>
      </div>
    );
  }
}

