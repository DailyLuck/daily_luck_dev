import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './actions/actions';

import logo from './logo.svg';
import './styles/App.css';

class App extends Component {
  render() {
  	this.props.dispatch(actions.changeHover('eee'));
    return (
      <div className="App">
       App
      </div>
    );
  }
}


export default connect()(App);
