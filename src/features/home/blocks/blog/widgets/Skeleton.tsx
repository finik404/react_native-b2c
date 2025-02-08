import React from 'react';
import { StyleSheet, View } from 'react-native';
import { UISkeleton } from '@/src/common/widgets/Skeleton';

// # --------------- PostCardSkeleton --------------- #
export const PostCardSkeleton = () => {
  return (
    <View style={ss.card}>
      <UISkeleton style={ss.img} height={168} />
      <UISkeleton style={ss.text} />
      <UISkeleton width={150} />
    </View>
  );
};

// # --------------- Styles --------------- #
const ss = StyleSheet.create({
  card: {
    width: 240,
  },
  img: {
    marginBottom: 20,
  },
  text: {
    marginBottom: 10,
  },
});
