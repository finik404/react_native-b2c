import React from 'react';
import {View} from 'react-native';
import {HomeTitle} from '@/src/features/home/widgets/Title';
import {UIList} from '@/src/common/widgets/List';

interface HomeItemsProps<T> {
  style?: object;
  marginBottom?: number;
  title?: string;
  height?: number;
  items: T[];
  child: (item: T) => React.ReactNode;
}

export const HomeItems = <T,>({
  marginBottom = 36,
  title,
  height,
  items,
  child,
}: HomeItemsProps<T>) => {
  return (
    <View style={[{marginBottom}]}>
      {title && <HomeTitle label={title} />}

      <UIList<T> height={height} items={items} child={child} padding={24} />
    </View>
  );
};
