import React from 'react';
import {Image} from 'react-native';
import {apiUrl} from '@/src/util/constants/privates.ts';

interface UIImageProps {
  style?: object;
  image: string;
  width?: number;
}

export const UIImage: React.FC<UIImageProps> = ({
  image,
  width = 100,
  style,
}) => {
  return <Image source={{uri: `${apiUrl}${image}`}} style={[{width, height: width}, style]} />;
};
