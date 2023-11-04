import {useNavigation} from '@react-navigation/native';
import {ChevronRight} from 'lucide-react-native';
import React, {FC, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useProductsContext} from '../context/provider/ContextProvider';
import {MainNavigationProps, SCREENS} from '../navigation/types';
import {Product} from '../services/types';
import {Colors} from '../ui/colors';

type ProductItemProps = {
  product: Product;
};

const ProductItem: FC<ProductItemProps> = ({product}) => {
  const navigation = useNavigation<MainNavigationProps>();
  const {id, name} = product;

  const {setProduct} = useProductsContext();

  return (
    <TouchableOpacity
      onPress={() => {
        setProduct(product);
        navigation.navigate(SCREENS.PRODUCT_DETAILS, {
          details: product,
        });
      }}
      activeOpacity={0.7}>
      <View style={ProductItemStyles.container}>
        <View>
          <Text style={ProductItemStyles.name}>{name}</Text>
          <Text style={ProductItemStyles.id}>{id}</Text>
        </View>

        <ChevronRight width={18} height={18} color={Colors.neutral} />
      </View>
    </TouchableOpacity>
  );
};

export default memo(ProductItem);

const ProductItemStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  name: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '500',
  },
  id: {
    fontSize: 12,
    color: Colors.neutral,
  },
});
