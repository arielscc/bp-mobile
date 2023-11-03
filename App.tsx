import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigation} from './app/navigation/navigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
