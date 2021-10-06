import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.all_wrapper}></View>
    );
  }
}

const styles = StyleSheet.create({
  all_wrapper: {
    flex: 1, backgroundColor: "rgb(22, 22, 22)"
  }
});
