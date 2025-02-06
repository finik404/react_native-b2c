import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TColors} from '@/src/util/constants/colors/colors';

interface UITextProps {
  style?: object;
  label: string;
}

export const UIText: React.FC<UITextProps> = ({label, style}) => {
  return <Text style={[ss.text, style]}>{label}</Text>;
};

const ss = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: TColors.black,
  },
});
