import React from 'react';
import {StyleSheet, View} from 'react-native';
import {sWidth} from '@/src/util/variables';

// # --------------- Props --------------- #
interface Props {
  style?: object;
  width?: number;
  height?: number;
  radius?: number;
}

// # --------------- UISkeleton --------------- #
export const UISkeleton: React.FC<Props> = ({
  width,
  height = 18,
  radius = 10,
  style,
}) => {
  return (
    <View
      style={[
        {width: width || sWidth, height, borderRadius: radius},
        ss.skeleton,
        style,
      ]}
    />
  );
};

// # --------------- Styles --------------- #
const ss = StyleSheet.create({
  skeleton: {
    backgroundColor: '#DFDFDF',
  },
});
