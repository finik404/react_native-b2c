import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const showSplash = async () => {
      const startTime = new Date();
      const elapsedTime = new Date().getTime() - startTime.getTime();

      if (elapsedTime < 2000) {
        setTimeout(() => {
          navigation.replace('home');
        }, 2000 - elapsedTime);
      } else {
        navigation.replace('home');
      }
    };

    showSplash();
  }, [navigation]);

  return (
    <View style={[styles.container]}>
      <View style={styles.content}>
        <Image
          style={styles.img}
          source={require('../../../../assets/icon.png')}
        />
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

export default SplashScreen;
