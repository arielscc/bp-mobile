import {useNavigation, useRoute} from '@react-navigation/native';
import {ChevronLeft, Plus} from 'lucide-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MainNavigationProps, SCREENS} from '../navigation/types';
import {Colors} from '../ui/colors';

import Logo from '../../assets/logo-horizontal.svg';

const Header = () => {
  const {top} = useSafeAreaInsets();
  const route = useRoute();
  const navigation = useNavigation<MainNavigationProps>();
  return (
    <View
      style={[
        HeaderStyles.container,
        {
          marginTop: top,
          flexDirection: route.name === SCREENS.HOME ? 'row-reverse' : 'row',
        },
      ]}>
      {route.name !== SCREENS.HOME && (
        <TouchableOpacity activeOpacity={0.6} onPress={navigation.goBack}>
          <ChevronLeft width={28} height={28} color={Colors.blue} />
        </TouchableOpacity>
      )}
      <View style={HeaderStyles.logo}>
        <Logo width={220} />
      </View>
      {route.name === SCREENS.HOME && (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate(SCREENS.PRODUCT_FORM, {});
          }}>
          <Plus width={28} height={28} color={Colors.blue} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const HeaderStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 8,
    position: 'relative',
  },
  logo: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1,
  },
});
