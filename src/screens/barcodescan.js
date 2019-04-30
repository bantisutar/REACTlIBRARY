import React, {Component} from 'react';
import {Button,TextInput, StyleSheet, Text, View, Image} from 'react-native';



export default class Barcodescan extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeading}>Write us by filling the form below</Text>
   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:5
  },
  iconimage: {
    width:30,
    height:30,
    marginTop:5
  },
  textHeading:{
    fontWeight:'bold',
    fontSize:18,
    textAlign: 'center',
    marginTop: 20,
  }
});