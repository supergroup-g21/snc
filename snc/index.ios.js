import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Home from './pages/Home';
import Login from './pages/Login';
import newChallenge from './pages/newChallenge';
import Dashboard from './pages/Dashboard';

class snc extends Component {
  constructor() {
    super();
    this.state = {
      fbAuth: false,
    }
    this.updateAuth = this.updateAuth.bind(this);
  }

  updateAuth() {
    this.setState({ fbAuth: true });
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial={true} />
          <Scene key="login" component={Login} title="Login" />
          <Scene key="dashboard" component={Dashboard} title="Dashboard" />
          <Scene key="newChallenge" component={newChallenge} title="New Challenge" />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6E2B0'
  }
});

AppRegistry.registerComponent('snc', () => snc);
