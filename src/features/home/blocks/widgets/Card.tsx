import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BenefitCard = data => {
  console.log('data');
  console.log(data.data?.attributes);

  return (
    <View style={[ss.container]}>
      <View style={ss.content}>
        <Text style={ss.content}>{data?.data?.attributes?.text}</Text>
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
