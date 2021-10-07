import React, { Component } from 'react';
import { Animated, Dimensions, Image, Platform, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 40 : StatusBar.currentHeight) + 75;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_PADDING = SCREEN_WIDTH > 375 ? 125 : (SCREEN_WIDTH > 250 ? SCREEN_WIDTH - 250 : 60);

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <View style={styles.all_wrapper}>
        <View style={styles.logo_wrapper} >
          <Image source={require('../../assets/logo.png')} style={styles.logo_image} ></Image>
          <Text style={styles.logo_text} >MADE FOR UAA, BY UAA</Text>
        </View>
        <TextInput
          style={[styles.input, { fontWeight: this.state.email.length ? "500" : "300" }]} placeholder='E-mail' placeholderTextColor="rgba(254, 254, 254, 0.75)"
          onChangeText={email => this.setState({ email })}
        >{this.state.email}</TextInput>
        <TextInput
          style={[styles.input, { fontWeight: this.state.password.length ? "500" : "300" }]} placeholder='Password' placeholderTextColor="rgba(254, 254, 254, 0.75)"
          secureTextEntry={true} onChangeText={password => this.setState({ password })}
        >{this.state.password}</TextInput>
        <TextInput
          style={[styles.input, { fontWeight: this.state.password.length ? "500" : "300" }]} placeholder='Confirm Password' placeholderTextColor="rgba(254, 254, 254, 0.75)"
          secureTextEntry={true} onChangeText={password => this.setState({ password })}
        >{this.state.password}</TextInput>
        <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.push('Register')}} >
          <Text style={styles.button_text} >Register</Text>
        </TouchableOpacity>
        <View style={styles.change_page_wrapper} >
          <Text style={styles.change_page_text} >Don't you have an account? </Text>
          <TouchableOpacity style={styles.change_page_button} onPress={() => {this.props.navigation.push('Login')}} >
            <Text style={styles.change_page_button_text} >Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  all_wrapper: {
    flex: 1, paddingTop: STATUS_BAR_HEIGHT, backgroundColor: "rgb(12, 12, 12)",
    alignItems: "center"
  },
  logo_wrapper: {
    marginTop: 50, marginBottom: 100, alignItems: "center"
  },
  logo_text: {
    fontWeight: "600", fontSize: 12, color: "rgb(254, 254, 254)", lineHeight: 14.5
  },
  input: {
    width: SCREEN_WIDTH - SCREEN_PADDING, height: 40, justifyContent: "center", paddingLeft: 15, 
    color: "rgba(254, 254, 254, 0.75)", fontSize: 16,
    borderColor: "rgba(248, 248, 248, 0.75)", borderWidth: 1, borderRadius: 10,
    marginBottom: 20, backgroundColor: "rgb(14, 14, 14)"
  },
  button: {
    width: SCREEN_WIDTH - SCREEN_PADDING, height: 40, justifyContent: "center", alignItems: "center",
    backgroundColor: "rgb(248, 248, 248)", borderRadius: 10,
    shadowColor: "rgba(248, 248, 248, 0.25)"
  },
  button_text: {
    color: "rgb(22, 22, 22)",
    fontWeight: "700",
    fontSize: 16
  },
  change_page_wrapper: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  change_page_text: {
    color: "rgb(254, 254, 254)",
    fontWeight: "500",
    fontSize: 14,
    marginRight: 7
  },
  change_page_button_text: {
    color: "rgba(211, 82, 47, 1)",
    fontWeight: "600",
    fontSize: 14
  }
});
 