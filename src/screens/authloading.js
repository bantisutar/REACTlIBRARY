

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';
import Icon from 'react-native-ionicons';

export default class AuthLoading extends Component {

  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
  }
   componentDidMount() {
    this.fetchData();
   }

   fetchData() {
        var result = false;
 //     console.log(JSON.parse(result));
          this.props.navigation.navigate(result ? 'App' : 'Auth');
       
  }

   render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});