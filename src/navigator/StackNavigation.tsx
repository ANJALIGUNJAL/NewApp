import React, {Component} from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Dimensions} from 'react-native';
import DrawerContent from './DrawerContent';
import SampleComponent from '../screens/SampleComponent';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

interface StackNavigatorProps {
  routeName: string;
}

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={'home'} headerMode="none">
      <Stack.Screen name={'home'} component={SampleComponent} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = (props: StackNavigatorProps) => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: Dimensions.get('screen').width / 1.4,
      }}
      edgeWidth={props.routeName === 'home' ? 40 : 0}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name={'App'} component={AppStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
