/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Navigations from './src/Navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persister, store } from './src/redux/store';
import Loader from './src/Components/Loader';

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <View style={styles.container}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <Loader />
          <Navigations />
        </View>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
