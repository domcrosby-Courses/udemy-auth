import React, { Component } from "react";
import { Text, View } from "react-native";
import firebase from "firebase";
import { apiKey } from "react-native-dotenv";
import { Header } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

export default class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: apiKey,
      authDomain: "auth-31ea8.firebaseapp.com",
      databaseURL: "https://auth-31ea8.firebaseio.com",
      projectId: "auth-31ea8",
      storageBucket: "auth-31ea8.appspot.com",
      messagingSenderId: "428613674804"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View>
        <Header headerText={"Auth"} />
        <LoginForm />
      </View>
    );
  }
}
