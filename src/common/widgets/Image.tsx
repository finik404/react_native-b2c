import React from 'react';
import { Image } from 'react-native';
import { apiUrl } from '@/src/util/constants/privates';

interface UIImageProps {
  style?: object;
  image: string;
  width?: number;
  height?: number;
}

export const UIImage: React.FC<UIImageProps> = ({
  image,
  width = '100%',
  height,
  style,
}) => {
  return (
    <Image
      source={{ uri: `${apiUrl}${image}` }}
      style={[{ width, height: height || width }, style]}
    />
  );
};
