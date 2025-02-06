import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HomeTitle} from '@/src/features/home/widgets/Title';
import {UIList} from '@/src/common/widgets/List';

interface HomeItemsProps {
  style?: object;
  marginBottom?: number;
  title?: string;
  height?: number;
  items: any[];
  child: React.ComponentType<{item: any}>;
}

export const HomeItems: React.FC<HomeItemsProps> = ({
  marginBottom = 36,
  title,
  height,
  items,
  child,
}) => {
  return (
    <View style={[{marginBottom}, ss.container]}>
      {title && <HomeTitle label={title} />}

      <UIList height={height} items={items} child={child} padding={24} />
    </View>
  );
};

const ss = StyleSheet.create({
  container: {},
});
