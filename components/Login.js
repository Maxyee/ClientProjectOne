import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
    
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.loginContainer}>
                {/* <Image resizeMode="contain" style={styles.logo} source={require('../../components/images/logo-dark-bg.png')} /> */}
            </View>

            <View style={styles.formContainer}>
                   <LoginForm/>
            </View>
            
      </KeyboardAvoidingView>
    
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    }
});
