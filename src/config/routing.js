import React, { Component } from 'react';
import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator, createAppContainer, createSwitchNavigator,createBottomTabNavigator} from 'react-navigation';
import { DrawerActions , DrawerItems } from 'react-navigation';
import {View, Text,Platform,TouchableOpacity,Image,StatusBar, ActivityIndicator} from 'react-native';
// import { Container,Content,Header, Body } from 'native-base';
import Home from '../screens/home';
import Login from '../screens/login';
import Colors from '../assets/colors/colors';
// import styles from '../config/commonStyle';
import DrawerScreen from '../components/drawerScreen';
import Contact from '../screens/contact';
import Account from '../screens/account';

import Addbook from '../screens/addbook';
import Bookdetail from '../screens/bookdetail';
import Barcodescan from '../screens/barcodescan';
import Cart from '../screens/cart';
import Changepassword from '../screens/changepassword';
import Donatebook from '../screens/donatebook';
import Invoice from '../screens/invoice';
import Notification from '../screens/notification';
import FAQ from '../screens/faq';
import Orderlog from '../screens/orderlog';
import Rewards from '../screens/rewards';
import Setpreference from '../screens/setpreference';
import Viewall from '../screens/viewall';
import Icon from 'react-native-ionicons';
import Whishlist from '../screens/whishlist';
// import {storeData,retriveData} from './storage';
import AuthLoading from '../screens/authloading';
//https://www.google.com/s2/favicons?domain=
const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
       navigationOptions: ({ navigation }) =>  ({
             headerLeft:
         <View style={{ flex : 1 , flexDirection : 'row'}}>
          <Icon style={{ paddingLeft: 10 , color: Colors.textWhite}}
            name='md-menu'navigation
            onPress={() => navigation.openDrawer()}
            size={30} />
         {/*  <Image style={{height:30 , width: 30 , marginLeft : 15, marginRight : 15}}source={require('../assets/icons/logo.png')}/> */}
          <Text style={{ color : 'white',marginLeft:20,fontSize:20 }}>Podium
          <Text style={{fontSize: 20 , color : 'orange'}}>Library</Text>
           </Text>
         </View>
         /* ,
         headerRight:
          <Icon style={{marginRight:10,color: Colors.textWhite,justifyContent: 'flex-end'}}
            name='md-notifications' navigation
            onPress={() => navigation.openDrawer()}
            size={30} />, */
        })
    },
    Account: {
      screen: Account,
       navigationOptions: ({ navigation }) =>  ({
          title: "Account Page",
        })
    }
   

},
{
    initialRouteName: 'Home',
     drawerIcon : ({tintColor})=>(
      <Image
          style={styles.iconimage}
          source={require('../assets/icons/account.png')}
        />
    ),
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.primary,
        showdownOpacity:0,
        elevation:0
      },
      //Title:"Home",
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }),
  })
const MyDrawerNavigator = createDrawerNavigator({
  Account: {
    screen: Account,
     navigationOptions: {
      drawerLabel: "Account"
     }
  },
  Orderlog: {
    screen: Orderlog,
  },
   Rewards: {
    screen: Rewards,
     navigationOptions: {
      drawerLabel: "Rewards"
     }
  },
   Donatebook: {
    screen: Donatebook,
     navigationOptions: {
      drawerLabel: "Donate Book"
     }
  },
   Whishlist: {
    screen: Whishlist,
  },
   Notification: {
    screen: Notification,
     navigationOptions: {
      drawerLabel: "Notification"
     }
  },
   Barcodescan: {
    screen: Barcodescan,
     navigationOptions: {
      drawerLabel: "Barcode Scanner"
     }
  },
   FAQ: {
    screen: FAQ,
  },
   ContactUs: {
    screen: Contact,
  },
  Home: {
    screen: HomeStack
  }
},
{
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    //contentComponent: CustomDrawerContentComponent,
    drawerWidth: 250,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
                activeBackgroundColor: Colors.colorAccent,
                activeTintColor: Colors.colorAccent,
                labelStyle: {
                    fontSize: 16,
                    //fontFamily: Fonts.light,
                    // fontWeight: 100
                    color: Colors.primaryDark,
                }
            },
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: MyDrawerNavigator,
    Auth: Login,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));


