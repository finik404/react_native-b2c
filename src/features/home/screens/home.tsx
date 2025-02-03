import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HomeBenefits} from '@/src/features/home/blocks/benefits.tsx';

export const HomeScreen = () => {
  return (
    <View style={[ss.container]}>
      <View style={ss.content}>
        <HomeBenefits />
      </View>
    </View>
  );
};

const ss = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 35,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
