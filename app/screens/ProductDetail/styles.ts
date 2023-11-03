import {StyleSheet} from 'react-native';
import {Colors} from '../../ui/colors';

export const DetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 4 / 3,
  },
  imageView: {
    backgroundColor: '#e5e5e5',
    padding: 16,
  },
  image: {
    height: '100%',
    objectFit: 'contain',
  },
  productDetailContainer: {
    backgroundColor: Colors.white,
    borderBlockColor: 'teal',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    flex: 1,
    marginTop: -28,
    padding: 16,
  },
  name: {
    color: Colors.blue,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  id: {
    color: Colors.neutral,
    fontSize: 14,
    textAlign: 'center',
  },
  descContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  description: {
    color: Colors.blue,
    flex: 2 / 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    color: Colors.neutral,
    fontSize: 16,
  },
  dates: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  dateTitle: {
    color: Colors.blue,
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 16,
  },
});
