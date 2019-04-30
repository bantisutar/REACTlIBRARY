import React, {Component} from 'react';
import {Button,TextInput, StyleSheet, Text, View, Image} from 'react-native';
import { Col, Grid } from "react-native-easy-grid";
import Colors from "../assets/colors/colors"

export default class Login extends Component {
  
  constructor(props){
    super(props);
    this.state = { email: '',password:''};
  }
  onPressSubmit=()=>{
   
       this.props.navigation.navigate('App');
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeading}>Write us by filling the form below</Text>
        <Grid style={{padding: 5,marginTop:20}}>
          <Col size={0.4}>
              <Image
                style={styles.iconimage}
                source={require('../assets/icons/contact.png')}
              />
          </Col>
          <Col size={3.6}>
              <TextInput
                style={{height: 40}}
                onChangeText={(text) => this.setState({email:text})}
                value={this.state.email}
                placeholder={'Email Address'}
                keyboardType={'email-address'}
              />
          </Col>
        </Grid>

        <Grid style={{padding: 5,marginTop:40}}>
          <Col size={0.4}>
              <Image
                style={styles.iconimage}
                source={require('../assets/icons/phone.png')}
              />
          </Col>
          <Col size={3.6}>
              <TextInput
                style={{height: 40}}
                onChangeText={(text) => this.setState({password:text})}
                value={this.state.password}
                placeholder={'Enter password'}
                keyboardType={'number-pad'}
              />
          </Col>
        </Grid>

        <TextInput
          style={{height: 150,marginTop:5}}
          multiline = {true}
          numberOfLines = {5}
          placeholder={'Your Message'}
          onChangeText={(text) => this.setState({message:text})}
          value={this.state.message}/>

        <Button
          onPress={this.onPressSubmit}
          title="Submit"
          color={Colors.primary}
          accessibilityLabel="Submit your Message"/>
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