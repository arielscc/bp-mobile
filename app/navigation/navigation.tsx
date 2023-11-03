import {createStackNavigator} from '@react-navigation/stack';

import Header from '../components/Header';
import Home from '../screens/Home';
import ProductDetail from '../screens/ProductDetail';
import ProductForm from '../screens/ProductForm';
import {Colors} from '../ui/colors';
import {SCREENS} from './types';

const Stack = createStackNavigator();
export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name={SCREENS.PRODUCT_DETAILS}
        component={ProductDetail}
        options={{
          cardStyle: {
            backgroundColor: Colors.white,
          },
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name={SCREENS.PRODUCT_FORM}
        component={ProductForm}
        options={{
          header: () => <Header />,
        }}
      />
    </Stack.Navigator>
  );
};
