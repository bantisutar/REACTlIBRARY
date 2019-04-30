import React, {Component} from 'react';
import {Button,TextInput, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { Col, Grid } from "react-native-easy-grid";
import Colors from "../assets/colors/colors"



export default class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <View >
         <Grid style={styles.mainheader}>
          <Col style={styles.mainheaderborder}>
             <Text style={styles.headerText}>Books</Text>
          </Col>
           <Col >
             <Text style={styles.headerText}>Statinory</Text>
          </Col>
           <Col>
             <Text style={styles.headerText}>Gifts</Text>
          </Col>
          </Grid>
          </View>

          <View>
          <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false }>
      <Text style = { styles.item }>Afghanistan</Text>
      <View style = { styles.separator }/>
      <Text style = { styles.item }>Bangladesh</Text>
      <View style = { styles.separator }/>
      <Text style = { styles.item }>Canada</Text>
      <View style = { styles.separator }/>
      <Text style = { styles.item }>Denmark</Text>
      <View style = { styles.separator }/>
      <Text style = { styles.item }>Egypt</Text>
      <View style = { styles.separator }/>
      <Text style = { styles.item }>Faroe Islands</Text>
      <View style = { styles.separator }/>
     
   </ScrollView>
          </View>
          <View>
              <Image source={{uri: 'https://www.haymemoriallibrary.org/sites/haymemoriallibrary.org/files/Book%20Club%20Banner.png'}} style={{width: null, height: 150}} />
          </View>
          <View>
           <Text style={{padding:10,fontWeight:"bold"}}>New Arrivals</Text>
               <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false } style={{marginLeft:10}}>
              
               <View style={{marginRight:8}}>
                 <Image source={require('../assets/images/book1.jpg')} style={{width: null, height: 130}} />
                  <View style={{backgroundColor:"orange",padding:5}}>
                  <Text style={{fontWeight:"bold"}}>Winter Sister</Text>
                  <Text>20% Discount</Text>
                  </View>
                 </View>
                  <View style={{marginRight:8}}>
                 <Image source={require('../assets/images/book2.jpg')} style={{width: null, height: 130}} />
                  <View style={{backgroundColor:"orange",padding:5}}>
                  <Text style={{fontWeight:"bold"}}>Winter Sister</Text>
                  <Text>20% Discount</Text>
                  </View>
                 </View>
                  <View style={{marginRight:8}}>
                 <Image source={require('../assets/images/book3.jpg')} style={{width: null, height: 130}} />
                  <View style={{backgroundColor:"orange",padding:5}}>
                  <Text style={{fontWeight:"bold"}}>Winter Sister</Text>
                  <Text>20% Discount</Text>
                  </View>
                 </View>
                  <View style={{marginRight:8}}>
                 <Image source={require('../assets/images/book4.jpg')} style={{width: null, height: 130}} />
                  <View style={{backgroundColor:"orange",padding:5}}>
                  <Text style={{fontWeight:"bold"}}>Winter Sister</Text>
                  <Text>20% Discount</Text>
                  </View>
                 </View>
                  <View style={{marginRight:8}}>
                 <Image source={require('../assets/images/book5.jpg')} style={{width: null, height: 130}} />
                  <View style={{backgroundColor:"orange",padding:5}}>
                  <Text style={{fontWeight:"bold"}}>Winter Sister</Text>
                  <Text>20% Discount</Text>
                  </View>
                 </View>
                             
     
   </ScrollView>


   <Text style={{padding:10,fontWeight:"bold"}}>New Trandings</Text>
               <ScrollView horizontal = { true } showsHorizontalScrollIndicator = { false } style={{marginLeft:10,marginBottom:10}}>
              
               <View style={{marginRight:8}}>
                 <Image source={require('../assets/images/book6.jpg')} style={{width: null, height: 130}} />
                  <View style={{backgroundColor:"orange",padding:5}}>
                  <Text style={{fontWeight:"bold"}}>Winter Sister</Text>
                  <Text>20% Discount</Text>
                  </View>
                 </View>
                  <View style={{marginRight:8}}>
                 <Image source={require('../assets/images/book3.jpg')} style={{width: null, height: 130}} />
                  <View style={{backgroundColor:"orange",padding:5}}>
                  <Text style={{fontWeight:"bold"}}>Winter Sister</Text>
                  <Text>20% Discount</Text>
                  </View>
                 </View>
                  <View style={{marginRight:8}}>
                 <Image source={require('../assets/images/book8.jpg')} style={{width: null, height: 130}} />
                  <View style={{backgroundColor:"orange",padding:5}}>
                  <Text style={{fontWeight:"bold"}}>Winter Sister</Text>
                  <Text>20% Discount</Text>
                  </View>
                 </View>
                  <View style={{marginRight:8}}>
                 <Image source={require('../assets/images/book1.jpg')} style={{width: null, height: 130}} />
                  <View style={{backgroundColor:"orange",padding:5}}>
                  <Text style={{fontWeight:"bold"}}>Winter Sister</Text>
                  <Text>20% Discount</Text>
                  </View>
                 </View>
                  <View style={{marginRight:8}}>
                 <Image source={require('../assets/images/book2.jpg')} style={{width: null, height: 130}} />
                  <View style={{backgroundColor:"orange",padding:5}}>
                  <Text style={{fontWeight:"bold"}}>Winter Sister</Text>
                  <Text>20% Discount</Text>
                  </View>
                 </View>
                             
     
   </ScrollView>
          </View>
</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainheader:{
    padding: 10,
    paddingBottom:30,
    backgroundColor:Colors.primary,
    borderColor: '#d6d7da',
  },

  headerText:{
   color:Colors.colorAccent,
  },
  mainheaderborder:{
    marginLeft:20,
    borderRadius: 4,
    //borderRightWidth: 20,
    borderRightColor: 'white',
  },
  item:{
    padding:10,
     //borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'gray',
  }
});