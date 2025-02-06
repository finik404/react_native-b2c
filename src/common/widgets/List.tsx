import React, {ReactElement} from 'react';
import {FlatList, View} from 'react-native';

interface Props<T> {
  style?: object;
  items: T[];
  child: (item: T) => React.ReactNode;
  spaceBetween?: number;
  padding?: number;
  height?: number;
  horizontal?: boolean;
}

export const UIList = <T,>({
  items,
  child,
  horizontal = true,
  spaceBetween = 12,
  padding = 0,
  height,
  style,
}: Props<T>) => {
  return (
    <View style={{height}}>
      <FlatList
        data={items}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[{paddingHorizontal: padding}, style]}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={{width: spaceBetween}} />}
        renderItem={({item}) => child(item) as ReactElement}
      />
    </View>
  );
};
