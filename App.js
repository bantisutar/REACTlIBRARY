import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navigator from './src/config/routing';
export default class App extends Component {
  render() {
    return (
      <Navigator/>
    );
  }
}

