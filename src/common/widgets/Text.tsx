import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TColors} from '@/src/util/constants/colors/colors';

interface UITextProps {
  style?: object;
  text: string;
}

export const UIText: React.FC<UITextProps> = ({text, style}) => {
  return <Text style={[ss.text, style]}>{text}</Text>;
};

const ss = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: TColors.black,
  },
});
