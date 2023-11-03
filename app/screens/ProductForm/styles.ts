import {StyleSheet} from 'react-native';
import {Colors} from '../../ui/colors';

export const FormStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    color: Colors.blue,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
});
