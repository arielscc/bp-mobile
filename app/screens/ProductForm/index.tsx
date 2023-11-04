import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {ListRestart, Save} from 'lucide-react-native';
import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useProductsContext} from '../../context/provider/ContextProvider';
import {successToast} from '../../lib/toast';
import {addYearToDate} from '../../lib/utils';
import {validationSchema} from '../../lib/validationSchema';
import {MainNavigationProps} from '../../navigation/types';
import {Product} from '../../services/types';
import {Colors} from '../../ui/colors';
import Button from '../../ui/components/Button';
import CustomDatePicker from '../../ui/components/DatePicker';
import Input from '../../ui/components/Input';
import {FormStyles} from './styles';

const initialState = {
  id: '',
  name: '',
  description: '',
  logo: '',
  date_release: new Date(),
  date_revision: addYearToDate(new Date()),
};

const ProductForm = () => {
  const [showDateReleasePicker, setShowDateReleasePicker] = useState(false);
  const [showDateRevisionPicker, setShowDateRevisionPicker] = useState(false);

  const {product, updateProduct, addProduct} = useProductsContext();

  const navigation = useNavigation<MainNavigationProps>();

  const onSubmit = (values: Product | typeof initialState) => {
    const parseValues = {
      ...values,
      date_release: new Date(values.date_release).toISOString(),
      date_revision: new Date(values.date_revision).toISOString(),
    };

    if (product) {
      updateProduct(parseValues);
      successToast('El producto se actualizó correctamente');
    } else {
      addProduct(parseValues);
      successToast('El producto se agregó correctamente');
    }

    setTimeout(() => {
      navigation.goBack();
    }, 500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 85 : 0}
      style={FormStyles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{flex: 1}}>
        <>
          <Text style={FormStyles.title}>Formulario de Registro</Text>

          <Formik
            initialValues={product ? product : initialState}
            onReset={() => (product ? product : initialState)}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={values => onSubmit(values)}>
            {({
              handleChange,
              handleBlur,
              setFieldValue,
              values,
              resetForm,
              errors,
              submitForm,
            }) => (
              <View>
                <Input
                  onChangeText={handleChange('id')}
                  onBlur={handleBlur('id')}
                  value={values.id}
                  label="ID de Producto:"
                  error={errors.id}
                  disabled={product ? true : false}
                />
                <Input
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  label="Nombre:"
                  error={errors.name}
                />
                <Input
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={values.description}
                  label="Descripción:"
                  error={errors.description}
                />
                <Input
                  onChangeText={handleChange('logo')}
                  onBlur={handleBlur('logo')}
                  value={values.logo}
                  label="Logo:"
                  inputMode="url"
                  error={errors.logo}
                />
                <CustomDatePicker
                  title="Fecha de lanzamiento:"
                  value="date_release"
                  date={values.date_release}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  setShowDatePicker={setShowDateReleasePicker}
                  showDatePicker={showDateReleasePicker}
                  error={errors.date_release as string}
                  initialDate={new Date()}
                />
                <CustomDatePicker
                  title="Fecha de revisión:"
                  value="date_revision"
                  date={values.date_revision}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                  setShowDatePicker={setShowDateRevisionPicker}
                  showDatePicker={showDateRevisionPicker}
                  error={errors.date_revision as string}
                  initialDate={addYearToDate(values.date_release)}
                />
                <View>
                  <Button
                    icon={() => <Save color={Colors.white} />}
                    onPress={async () => {
                      submitForm();
                    }}
                    style={{
                      marginTop: 8,
                    }}>
                    Guardar
                  </Button>
                  <Button
                    icon={() => <ListRestart color={Colors.black} />}
                    onPress={resetForm}
                    variant="secondary"
                    style={{
                      marginTop: 8,
                    }}>
                    Reiniciar
                  </Button>
                </View>
              </View>
            )}
          </Formik>
        </>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProductForm;
