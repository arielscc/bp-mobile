import {FC} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {formatFullDate} from '../../lib/utils';
import Button from './Button';

interface DatePickerProps {
  date: string | Date;
  handleChange: any;
  setFieldValue: any;
  setShowDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
  showDatePicker: boolean;
  styles?: StyleProp<ViewStyle>;
  title: string;
  value: string;
  error?: string;
  initialDate: Date;
}
const CustomDatePicker: FC<DatePickerProps> = props => {
  const {
    date,
    handleChange,
    setFieldValue,
    setShowDatePicker,
    showDatePicker,
    title,
    value,
    error,
    initialDate,
  } = props;
  return (
    <View style={{marginBottom: 18}}>
      <Text
        style={{
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
      <Button
        variant="outline"
        onPress={() => setShowDatePicker(!showDatePicker)}
        style={{
          paddingVertical: 8,
        }}>
        {formatFullDate(date)}
      </Button>
      {showDatePicker && (
        <DatePicker
          date={new Date(date)}
          mode="datetime"
          modal
          open={showDatePicker}
          onConfirm={date => {
            setFieldValue(value, date);
            setShowDatePicker(false);
          }}
          onCancel={() => {
            setShowDatePicker(false);
          }}
          onDateChange={() => {
            handleChange(value);
            setShowDatePicker(false);
          }}
          minimumDate={initialDate}
        />
      )}
      {error && (
        <View>
          <Text style={{color: 'red'}}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomDatePicker;
