import {useNavigation, useRoute} from '@react-navigation/native';
import {Edit, Trash} from 'lucide-react-native';
import React, {useState} from 'react';
import {Alert, Image, Pressable, ScrollView, Text, View} from 'react-native';
import EnhancedImageViewing from 'react-native-image-viewing/dist/ImageViewing';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useProductsContext} from '../../context/provider/ContextProvider';
import {formatDate} from '../../lib/utils';
import {
  MainNavigationProps,
  MainRouteProps,
  SCREENS,
} from '../../navigation/types';
import {Colors} from '../../ui/colors';
import Button from '../../ui/components/Button';
import {DetailsStyles} from './styles';

const ProductDetail = () => {
  const [imageVisible, setImageVisible] = useState(false);
  const {bottom} = useSafeAreaInsets();

  const route = useRoute<MainRouteProps<SCREENS.PRODUCT_DETAILS>>();
  const {details} = route.params;

  const navigation = useNavigation<MainNavigationProps>();
  const {product, deleteProduct} = useProductsContext();
  const {id, name, description, logo, date_release, date_revision} = product!;

  const DeleteProductAlert = () =>
    Alert.alert('Alerta!', `Estas seguro de eliminar el producto ${id}`, [
      {
        text: 'Cancelar',
      },
      {
        text: 'Eliminar',
        onPress: () => {
          deleteProduct(id);
          navigation.goBack();
        },
        style: 'destructive',
      },
    ]);

  return (
    <ScrollView
      style={[
        DetailsStyles.container,
        {
          paddingBottom: bottom,
        },
      ]}
      bounces={false}>
      <View style={DetailsStyles.imageContainer}>
        <Pressable
          onPress={() => setImageVisible(true)}
          style={DetailsStyles.imageView}>
          <Image
            source={{uri: logo}}
            style={DetailsStyles.image}
            accessible
            accessibilityLabel={`daily image: ${name}`}
            loadingIndicatorSource={{
              cache: 'force-cache',
            }}
          />
        </Pressable>
        {imageVisible && (
          <EnhancedImageViewing
            images={[
              {
                uri: logo,
              },
            ]}
            imageIndex={0}
            visible={imageVisible}
            onRequestClose={() => setImageVisible(false)}
            animationType="slide"
            backgroundColor={Colors.black}
            doubleTapToZoomEnabled
          />
        )}
      </View>

      <View style={DetailsStyles.productDetailContainer}>
        <Text style={DetailsStyles.name}>{name}</Text>
        <Text style={DetailsStyles.id}>ID de producto: {id}</Text>

        <View style={DetailsStyles.descContainer}>
          <Text style={DetailsStyles.description}>Descripción</Text>
          <Text style={DetailsStyles.content}>{description}</Text>
        </View>

        <View style={DetailsStyles.dates}>
          <View>
            <Text style={DetailsStyles.dateTitle}>Fecha liberación</Text>
            <Text>{formatDate(date_release)}</Text>
          </View>
          <View>
            <Text style={DetailsStyles.dateTitle}>Fecha de revisión</Text>
            <Text>{formatDate(date_revision)}</Text>
          </View>
        </View>

        <Button
          onPress={() => {
            navigation.navigate(SCREENS.PRODUCT_FORM, {
              details,
            });
          }}
          icon={() => <Edit width={18} height={18} color={Colors.white} />}
          style={{
            marginTop: 8,
          }}>
          Editar
        </Button>
        <Button
          variant="destructive"
          onPress={DeleteProductAlert}
          icon={() => <Trash width={18} height={18} color={Colors.white} />}
          style={{
            marginTop: 8,
          }}>
          Eliminar
        </Button>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
