import React, {Component} from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  compnentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCyZkcuiKe6rWJZtbbP3id6VF2o-VPCK7w",
      authDomain: "auth-31ea8.firebaseapp.com",
      databaseURL: "https://auth-31ea8.firebaseio.com",
      projectId: "auth-31ea8",
      storageBucket: "auth-31ea8.appspot.com",
      messagingSenderId: "428613674804"
    })
  }
  render() {
    return (
      <View>
        <Header headerText={'Auth'} />
        <LoginForm />
      </View>
    );
  }
}
