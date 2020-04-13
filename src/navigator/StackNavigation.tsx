import React, {Component} from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import SampleComponent from '../screens/SampleComponent';

const Stack = createStackNavigator();

interface StackNavigatorProps {
  routeName: string;
}

const StackNavigator = (props: StackNavigatorProps) => {
  return (
    <Stack.Navigator initialRouteName={'home'} headerMode="none">
      <Stack.Screen name={'home'} component={SampleComponent} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
