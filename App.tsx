import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '@/src/features/splash/screens/splash.tsx';
import Tabs from '@/src/features/tabs/screens/tabs.tsx';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
