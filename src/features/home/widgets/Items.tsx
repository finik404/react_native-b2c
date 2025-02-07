import React from 'react';
import {View} from 'react-native';
import {HomeTitle} from '@/src/features/home/widgets/Title';
import {UIList} from '@/src/common/widgets/List';
import {UISkeleton} from '@/src/common/widgets/Skeleton';
import {sWidth} from "@/src/util/variables";

interface HomeItemsProps<T> {
  style?: object;
  marginBottom?: number;
  title?: string;
  height?: number;
  items: T[];
  child: (item: T) => React.ReactNode;
  skeleton?: React.ReactNode;
  loading: boolean;
  loadingLength?: number;
}

export const HomeItems = <T,>({
  marginBottom = 36,
  title,
  height,
  items,
  child,
  loading,
  skeleton,
  loadingLength = 5,
}: HomeItemsProps<T>) => {
  return (
    <View style={[{marginBottom}]}>
      {title && <HomeTitle label={title} />}

      {loading ? (
        <UIList<T>
          height={height}
          items={Array(loadingLength)}
          child={() =>
            skeleton || <UISkeleton width={(sWidth - 12) * 0.5} style={{height: '100%'}} />
          }
          padding={24}
        />
      ) : (
        <UIList<T> height={height} items={items} child={child} padding={24} />
      )}
    </View>
  );
};
