import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';

const Tabs = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.content}>
        <Progress.Circle
          size={40}
          indeterminate={true}
          color={'blue'}
          borderWidth={2}
          strokeCap={'round'}
        />
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
