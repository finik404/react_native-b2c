import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import * as Progress from 'react-native-progress';
import {useAtom} from "jotai";
import {countAtom, incrementCountAtom} from "@/src/features/tabs/controllers/tabs.ts";

const Tabs = () => {
  const [count] = useAtom(countAtom);
  const [, incrementCount] = useAtom(incrementCountAtom);

  return (
    <View style={[styles.container]}>
      <View style={styles.content}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Count: {count}</Text>
        <Button title="Increment" onPress={incrementCount} />
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
