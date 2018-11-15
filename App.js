import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './components/Login';
import Register from './components/Register';
import Donator from './components/Donator';
import Donee from './components/Donee';
import LoginForm from './components/LoginForm';
import Donatorprofile from './components/Donatorprofile';
import Doneeprofile from './components/Doneeprofile';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Login/> */}
        <AppStackNavigator />
      </View>
    );
  }
}


const AppStackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },

    Register:{
      screen: Register
    },

    Donator:{
      screen: Donator
    },

    Donee:{
      screen:Donee
    },

    LoginForm:{
      screen:LoginForm
    },

    Donatorprofile:{
      screen:Donatorprofile
    },

    Doneeprofile:{
      screen:Doneeprofile
    }
  },
  {
    initialRouteName: 'Login',
  }
) 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
