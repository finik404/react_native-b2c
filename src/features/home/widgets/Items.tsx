import React from 'react';
import {View} from 'react-native';
import {HomeTitle} from '@/src/features/home/widgets/Title';
import {UIList} from '@/src/common/widgets/List';
import {UISkeleton} from '@/src/common/widgets/Skeleton';
import {sWidth} from '@/src/util/variables';
import {useHomeItems} from '@/src/features/home/controllers/items';

interface HomeItemsProps<T> {
  style?: object;
  url: string;
  marginBottom?: number;
  title?: string;
  height?: number;
  child: (item: T) => React.ReactNode;
  skeleton?: React.ReactNode;
  loadingLength?: number;
}

export const HomeItems = <T,>({
  url,
  marginBottom = 36,
  title,
  height,
  child,
  skeleton,
  loadingLength = 5,
}: HomeItemsProps<T>) => {
  const {items, loading} = useHomeItems(url);

  return (
    <View style={[{marginBottom}]}>
      {title && <HomeTitle label={title} />}

      {loading ? (
        <UIList<T>
          height={height}
          items={Array(loadingLength)}
          child={() =>
            skeleton || (
              <UISkeleton
                width={(sWidth - 12) * 0.5}
                style={{height: '100%'}}
              />
            )
          }
          padding={24}
        />
      ) : (
        <UIList<T> height={height} items={items} child={child} padding={24} />
      )}
    </View>
  );
};
