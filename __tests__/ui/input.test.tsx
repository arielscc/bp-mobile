import {render} from '@testing-library/react-native';
import React from 'react';
import Input from '../../app/ui/components/Input';

test('renders and interacts with Input correctly', () => {
  const onChangeText = jest.fn();

  const {getByText, getByDisplayValue} = render(
    <Input
      label="Test Input"
      value={'test_value'}
      onChangeText={onChangeText}
      disabled={false}
      error="error message"
    />,
  );

  expect(getByText(/Test Input/i)).toBeTruthy();
  expect(getByDisplayValue(/test_value/i)).toBeTruthy();
  expect(getByText(/error message/i)).toBeTruthy();
});
