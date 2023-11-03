import {LucideIcon} from 'lucide-react-native';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../colors';

const buttonVariants = {
  default: {
    backgroundColor: Colors.blue,
    color: Colors.white,
  },
  destructive: {
    backgroundColor: Colors.red,
    color: Colors.white,
  },
  outline: {
    borderColor: Colors.gray,
    backgroundColor: 'transparent',
    color: Colors.blue,
  },
  link: {
    backgroundColor: 'transparent',
    color: Colors.blue,
  },
  secondary: {
    backgroundColor: Colors.yellow,
    color: Colors.black,
  },
};

export interface ButtonProps {
  variant?: keyof typeof buttonVariants;
  onPress?: () => void;
  children: React.ReactNode;
  size?: 'default' | 'small';
  icon?: LucideIcon;
  style?: StyleProp<ViewStyle>;
}

const Button = ({
  variant = 'default',
  onPress,
  children,
  icon: Icon,
  style,
}: ButtonProps) => {
  const buttonStyles: StyleProp<ViewStyle> = {
    borderRadius: variant === 'link' ? 0 : 4,
    paddingVertical: 10,
    paddingHorizontal: variant === 'link' ? 0 : 16,
    borderWidth: variant === 'outline' ? 1 : 0,
    borderColor:
      variant === 'outline'
        ? buttonVariants[variant].borderColor
        : 'transparent',
    backgroundColor:
      variant === 'link'
        ? 'transparent'
        : buttonVariants[variant].backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: variant === 'link' ? 0 : 1,
    height: variant === 'link' ? 40 : undefined,
    maxHeight: 40,
  };

  const textStyles: StyleProp<TextStyle> = {
    color: variant === 'link' ? Colors.black : buttonVariants[variant].color,
    textDecorationLine: variant === 'link' ? 'underline' : 'none',
    fontSize: variant === 'outline' ? 14 : 16,
  };

  const handlePress = () => {
    if (onPress) onPress();
  };

  return (
    <TouchableOpacity
      style={[buttonStyles, style]}
      onPress={handlePress}
      activeOpacity={0.7}>
      {Icon && (
        <View style={ButtonStyles.iconContainer}>
          <Icon />
        </View>
      )}
      <Text style={[ButtonStyles.textButton, textStyles]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const ButtonStyles = StyleSheet.create({
  textButton: {
    fontWeight: '600',
    textAlign: 'center',
  },
  iconContainer: {
    marginRight: 6,
  },
});
