import React, {FC} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../colors';

interface InputProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
  label?: string;
  styles?: StyleProp<ViewStyle>;
}

const Input: FC<InputProps> = props => {
  const {label, error = '', styles, disabled} = props;
  return (
    <View style={InputStyles.container}>
      {label && <Text style={{fontWeight: 'bold'}}>{label}</Text>}
      <TextInput
        {...props}
        style={[
          InputStyles.input,
          {
            backgroundColor: disabled ? '#e5e5e5' : 'transparent',
          },
          styles,
        ]}
        keyboardType="default"
        multiline={true}
        numberOfLines={3}
        textAlignVertical="center"
        editable={!disabled}
      />
      <Text
        style={[
          InputStyles.error,
          {
            color: error ? 'red' : 'transparent',
          },
        ]}>
        {error}
      </Text>
    </View>
  );
};

export default Input;

const InputStyles = StyleSheet.create({
  container: {
    marginBottom: 8,
    width: '100%',
  },
  input: {
    borderColor: Colors.gray,
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 8,
    maxHeight: 60,
    minHeight: 35,
    paddingHorizontal: 12,
    paddingTop: 6,
    textAlign: 'auto',
  },
  error: {
    height: 16,
  },
});
