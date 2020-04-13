import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class SampleScreen extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Welcome to Delivery App </Text>
      </View>
    );
  }
}
const CartEmptyStyles = StyleSheet.create({});
export default SampleScreen;
