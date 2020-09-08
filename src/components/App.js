/* eslint-disable import/no-named-as-default */
//import { NavLink, Route, Router, Switch } from 'react-router-dom';
//import NotFoundPage from './NotFoundPage';
//import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import MainPage from '../pages/MainPage';

class App extends React.Component {
  render() {
    return (
      <MainPage />
    );
  }
}

export default hot(module)(App);
