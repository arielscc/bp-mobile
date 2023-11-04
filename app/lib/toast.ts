import Toast from 'react-native-root-toast';
import {Colors} from '../ui/colors';

export const successToast = (text: string, position = -80) => {
  Toast.show(text, {
    duration: Toast.durations.LONG,
    position,
    hideOnPress: true,
    backgroundColor: Colors.white,
    opacity: 1,
    containerStyle: {
      width: '100%',
      borderWidth: 1,
      borderColor: Colors.blue,
      borderRadius: 8,
    },
    textStyle: {
      color: Colors.blue,
      fontSize: 18,
      fontWeight: '700',
    },
    shadowColor: 'rgba(0,0,0,0.25)',
  });
};
