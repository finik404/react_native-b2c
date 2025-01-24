import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import CustomIcon from '@/src/Icon.tsx';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Splash Screen
const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainTabs'); // Перенос на основной экран с табами
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Splash Screen</Text>
    </View>
  );
};

// Home Screen
const HomeScreen = ({navigation}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home Screen</Text>
    <CustomIcon name={'\uf007'} />
    <CustomIcon name={'fa-regular fa-house'} />
    <CustomIcon name={'0xf007'} />
    <FontAwesome icon={SolidIcons.smile} />
    <Button
      title="Go to Nested Screen"
      onPress={() => navigation.navigate('NestedTab')}
    />
  </View>
);

// Nested Screen with BottomNavigation
const NestedScreen = ({navigation}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Nested Screen with BottomNavigation</Text>
    <Button
      title="Go to Another Screen"
      onPress={() => navigation.navigate('Another')}
    />
  </View>
);

// Screen without BottomNavigation
const AnotherScreen = ({navigation}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Screen with BottomNavigation</Text>
    <Button
      title="Go to Screen Without BottomNavigation"
      onPress={() => navigation.navigate('NoBottomNav')}
    />
  </View>
);

// Screen completely outside BottomNavigation
const NoBottomNavScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Screen Without BottomNavigation</Text>
  </View>
);

// Nested Stack Navigator for one of the tabs
const NestedStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Nested"
      component={NestedScreen}
      options={{headerShown: true}}
    />
    <Stack.Screen
      name="Another"
      component={AnotherScreen}
      options={{headerShown: true}}
    />
  </Stack.Navigator>
);

// Main Bottom Tabs Navigator
const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      // tabBarIcon: ({focused, color, size}) => {
      //   let iconName;
      //
      //   // Устанавливаем иконки для каждого маршрута
      //   if (route.name === 'Home') {
      //     iconName = focused ? 'home' : 'home-outline';
      //   } else if (route.name === 'Settings') {
      //     iconName = focused ? 'settings' : 'settings-outline';
      //   }
      //
      //   // Возвращаем компонент иконки
      //   return <Ionicons name={iconName} size={size} color={color} />;
      // },
      tabBarActiveTintColor: '#007BFF', // Активный цвет
      tabBarInactiveTintColor: 'gray', // Неактивный цвет
      tabBarStyle: {
        backgroundColor: '#FFFFFF', // Цвет фона нижнего меню
        borderTopWidth: 2, // Бордер сверху
        borderTopColor: '#E0E0E0', // Цвет бордера
        paddingBottom: 5, // Отступ снизу
        paddingTop: 5, // Отступ сверху
        paddingHorizontal: 10, // Отступы по краям
      },
      tabBarLabelStyle: {
        fontSize: 12, // Размер текста
        fontWeight: 'bold', // Толщина текста
      },
      tabBarItemStyle: {
        marginHorizontal: 10, // Отступ между элементами
      },
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen
      name="NestedTab"
      component={NestedStack}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
);

// Root Stack Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen
          name="NoBottomNav"
          component={NoBottomNavScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
