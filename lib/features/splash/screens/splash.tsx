import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

const SplashScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View
      style={[styles.container, {width: screenWidth, height: screenHeight}]}>
      <View style={styles.content}>
        <Image
          style={styles.img}
          source={require('../../../../assets/icon.png')}
        />
        <ActivityIndicator
          size={50}
          color="#0000ff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 25,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
