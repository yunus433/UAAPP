import React, { Component } from 'react';
import { Animated, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// import * as Localization from 'expo-localization';

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavigationButtonPressed: false
    };
  }

  render() {
    return (
      <View style={styles.all_wrapper}>
        {/* <View></View>
        <View></View>
        <View></View>
        <View style={} >

        </View>
        <Pressable
          style={[styles.navigation_button, {  }]}
          onPress={() => {this.setState({ isNavigationButtonPressed: true })}}
        >
        </Pressable>
        <Pressable
          style={[styles.navigation_menu_close_button, { display: (this.state.isNavigationButtonPressed ? 'flex' : 'none') }]}
          onPress={() => { this.setState({ isNavigationButtonPressed: false }) }}
        ></Pressable> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  all_wrapper: {
    flex: 1, paddingTop: STATUS_BAR_HEIGHT, backgroundColor: "rgb(248, 248, 248)"
  },
  navigation_menu_close_button: {
    width: "100%", position: "absolute",
    top: 0, bottom: 0, left: 0, right: 0
  },
  navigation_button: {
    position: "absolute", width: 60, height: 60,
    left: "50%", bottom: 40, marginLeft: -30,
    borderRadius: 30, backgroundColor: "rgb(51, 51, 102)"
  }
});
