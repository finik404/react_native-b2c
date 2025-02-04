import React from 'react';
import {FlatList, View} from 'react-native';

interface UIListProps {
  style?: object;
  items: any[];
  child: React.ComponentType<{item: any}>;
  spaceBetween?: number;
  padHor?: number;
  height?: number;
  horizontal?: boolean;
}

export const UIList: React.FC<UIListProps> = ({
  items,
  child,
  horizontal = true,
  spaceBetween = 12,
  padHor = 24,
  height,
  style,
}) => {
  return (
    <View style={{height}}>
      <FlatList
        data={items}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        style={[{paddingHorizontal: padHor}, style]}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{width: spaceBetween}} />}
        renderItem={({item}) => React.createElement(child, item)}
      />
    </View>
  );
};
