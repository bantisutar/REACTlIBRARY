import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View, Image, StatusBar} from 'react-native';
import { DrawerActions } from 'react-navigation';
 import styles from '../config/commonStyle';
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-ionicons';
// import {storeData,retriveData} from '../config/storage';
import Colors from '../assets/colors/colors';

class DrawerScreen extends Component {
 constructor(props) {
    super(props);

    this.state = {
      //Lets initialize results with the same struct we expect to receive from the api
      userInfo: []
    };
    //Using ES6 we need to bind methods to access 'this'
    //this.fetchData = this.fetchData.bind(this);
  }


  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  //  componentDidMount() {
  //   this.fetchData();
  // }

//    fetchData() {
//      retriveData('userInfo').then((result)=>{
// //      console.log(JSON.parse(result));
//             this.setState({
//               userInfo: JSON.parse(result),

//             })
//             //const userInfo = JSON.parse(result);

//        })
//   }


  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
         <StatusBar
            backgroundColor={Colors.primary}
            barStyle="light-content"/>
         <View style={styles.childcontainer}>
               <Image
           source={{uri: this.state.userInfo.profilepic}}
            //Image Style
            style={styles.menuImage}
          />
          <Text style={styles.profiletext}>{this.state.userInfo.firstname}</Text>
           <Text style={styles.profiletext1}>{this.state.userInfo.email}</Text>
            </View>
          <View>
            <View style={styles.menuItem}>
            <Icon name="md-megaphone" style={styles.iconimage} size={30} color={Colors.iconColor} />
              <Text onPress={this.navigateToScreen('Account')} style={styles.menuText}>
               Account
              </Text>
            </View>
            <View style={styles.menuItem}>
            <Icon name="md-person" style={styles.iconimage} size={30} color={Colors.iconColor} />
              <Text onPress={this.navigateToScreen('Orderlog')} style={styles.menuText}>
               Order Log
              </Text>
            </View>
            <View style={styles.menuItem}>
            <Icon name="md-card" style={styles.iconimage} size={30} color={Colors.iconColor} />
              <Text onPress={this.navigateToScreen('Rewards')} style={styles.menuText}>
              Rewards
              </Text>
            </View>
            <View style={styles.menuItem}>
            <Icon name="md-star" style={styles.iconimage} size={30} color={Colors.iconColor} />
              <Text onPress={this.navigateToScreen('Donatebook')} style={styles.menuText}>
              Donate Book
              </Text>
            </View>
            <View style={styles.menuItem}>
            <Icon name="md-share" style={styles.iconimage} size={30} color={Colors.iconColor} />
              <Text onPress={this.navigateToScreen('Whishlist')} style={styles.menuText}>
              Whishlist
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Icon name="md-mail" style={styles.iconimage} size={30} color={Colors.iconColor} />
              <Text onPress={this.navigateToScreen('Notification')} style={styles.menuText}>
             Notification
              </Text>
            </View>
             <View style={styles.menuItem}>
              <Icon name="md-mail" style={styles.iconimage} size={30} color={Colors.iconColor} />
              <Text onPress={this.navigateToScreen('Barcodescan')} style={styles.menuText}>
              Barcode Scan
              </Text>
            </View>
             <View style={styles.menuItem}>
              <Icon name="md-mail" style={styles.iconimage} size={30} color={Colors.iconColor} />
              <Text onPress={this.navigateToScreen('FAQ')} style={styles.menuText}>
              FAQ
              </Text>
          
            </View>
            <View style={styles.menuItem}>
              <Icon name="md-mail" style={styles.iconimage} size={30} color={Colors.iconColor} />
              <Text onPress={this.navigateToScreen('Contact')} style={styles.menuText}>
              Contact Us
              </Text>
          
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;