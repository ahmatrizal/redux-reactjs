import React, { Component } from 'react'
import JumbotronComponent from './component/JumbotronComponent';
import NavbarComponent from './component/NavbarComponent';
import { Route } from 'react-router-dom'
import HomeContainer from './container/HomeContainer';
import DetailUserContainer from './container/DetailUserContainer';
import EditUserContainer from './container/EditUserContainer';
import TambahUserContainer from './container/TambahUserContainer';


export default class App extends Component {
  state = {
    title: "AhmdR. Redux",
    users: [
      {
        id: 1,
        nama: "Ahmat Rizal",
        alamat: "Pejaten Barat",
        umur : 25,
        nohp: "0890123990",
      },
      {
        id: 2,
        nama: "Eka Novitasari",
        alamat: "Lenteng Agung",
        umur : 26,
        nohp: "082572116670",
      },
      {
        id: 3,
        nama: "Muhammad Alvariza Nabiha",
        alamat: "Kemang",
        umur : 2,
        nohp: "08100238800",
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        <Route path="/">
            <HomeContainer />
          </Route>
          <Route path="/tambah">
            <TambahUserContainer />
          </Route>
          <Route path="/detail/id=">
            <DetailUserContainer />
          </Route>
          <Route path="/Edit/id=">
            <EditUserContainer />
          </Route>
      </div>
    );
  }
}

