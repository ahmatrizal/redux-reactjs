import React, { Component } from 'react'
import JumbotronComponent from './component/JumbotronComponent';
import NavbarComponent from './component/NavbarComponent';

export default class App extends Component {
  state = {
    title : "AhmdR. Redux"
  }
  render() {
  return (
    <div className="App">
      <NavbarComponent />
      <JumbotronComponent title={this.state.title} />
    </div>
  );
}
}

