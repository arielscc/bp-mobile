import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Product} from '../services/types';

export enum SCREENS {
  HOME = 'Home',
  PRODUCT_DETAILS = 'ProductDetails',
  PRODUCT_FORM = 'ProductForm',
}

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.PRODUCT_DETAILS]: {details: Product};
  [SCREENS.PRODUCT_FORM]: {details?: Product};
};

export type ScreenNames = keyof RootStackParamList;

export type MainRouteProps<ScreenName extends ScreenNames> = RouteProp<
  RootStackParamList,
  ScreenName
>;

export type MainNavigationProps = StackNavigationProp<
  RootStackParamList,
  ScreenNames
>;
