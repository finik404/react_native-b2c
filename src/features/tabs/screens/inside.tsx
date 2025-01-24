import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import * as Progress from 'react-native-progress';
import {useAtom} from "jotai";

const Tabs = () => {

  return (
    <View style={[styles.container]}>
      <View style={styles.content}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Inside</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Tabs;
