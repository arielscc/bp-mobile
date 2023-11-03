import {FlashList} from '@shopify/flash-list';
import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import NoResults from '../../assets/no-results.svg';
import ProductItem from '../../components/ProductItem';
import Search from '../../components/Search';
import {data} from '../../services/data';
import {Product} from '../../services/types';
import {CommonStyles} from '../../ui/globals';
import {HomeStyles} from './styles';

const Home = () => {
  const [products, setProducts] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');

  const {bottom} = useSafeAreaInsets();

  useEffect(() => {
    const timeout = setTimeout(searchProduct, 200);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const searchProduct = () => {
    const results = data.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setProducts(results);
  };

  const productRenderItem = useCallback(
    ({item}: {item: Product}) => <ProductItem product={item} />,
    [products],
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={{
        marginBottom: bottom,
      }}>
      <View style={CommonStyles.container}>
        <Search value={searchTerm} onChangeText={text => setSearchTerm(text)} />
        {products.length ? (
          <View style={HomeStyles.flashlist}>
            <FlashList
              data={products}
              keyExtractor={item => item.id}
              renderItem={productRenderItem}
              estimatedItemSize={58}
              estimatedListSize={{
                height: 58,
                width: Dimensions.get('screen').width,
              }}
              ItemSeparatorComponent={() => (
                <View style={HomeStyles.separator} />
              )}
            />
          </View>
        ) : (
          <View style={HomeStyles.noResultsImage}>
            <NoResults width={200} height={200} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
