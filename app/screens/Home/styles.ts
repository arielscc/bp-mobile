import {StyleSheet} from 'react-native';
import {Colors} from '../../ui/colors';

export const HomeStyles = StyleSheet.create({
  flashlist: {
    borderColor: Colors.gray,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: Colors.gray,
  },
  noResultsImage: {
    alignItems: 'center',
    display: 'flex',
    height: 400,
    justifyContent: 'center',
    width: '100%',
  },
});
