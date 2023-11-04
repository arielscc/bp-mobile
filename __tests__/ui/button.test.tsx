import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import Button from '../../app/ui/components/Button';

describe('Button', () => {
  test('renders correctly and responds to onPress', () => {
    const onPressMock = jest.fn();

    const {getByText} = render(
      <Button onPress={onPressMock} variant="default">
        Test Button
      </Button>,
    );

    const button = getByText('Test Button');
    expect(button).toBeTruthy();

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});
