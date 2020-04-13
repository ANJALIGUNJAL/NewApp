/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import AppEntry from './src/AppEntry';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <AppEntry />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
