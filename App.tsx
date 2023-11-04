import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ProductsProvider} from './app/context/provider/ContextProvider';
import {AppNavigation} from './app/navigation/navigation';

function App(): JSX.Element {
  const client = new QueryClient();

  return (
    <ProductsProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <QueryClientProvider client={client}>
            <AppNavigation />
          </QueryClientProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </ProductsProvider>
  );
}

export default App;
