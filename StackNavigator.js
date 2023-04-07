import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import { Avatar } from 'react-native-paper';
import SaveScreen from './screen/SaveScreen';
import BookingScreen from './screen/BookingScreen';
import SearchScreen from './screen/SearchScreen';
import Place from './screen/Place';
import ProfileScreen from './screen/ProfileScreen';
import Map from './screen/Map';
import PropertyInfo from './screen/PropertyInfo';
import Room from './screen/Room';
import User from './screen/User';
import Confirmation from './screen/Confirmation';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const iconStyle = {
  color: '#003580',
  style: { backgroundColor: 'transparent' },
  size: 50,
};
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Avatar.Icon icon="home" {...iconStyle} />
            ) : (
              <Avatar.Icon icon="home-outline" {...iconStyle} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SaveScreen}
        options={{
          tabBarLabel: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Avatar.Icon icon="heart" {...iconStyle} />
            ) : (
              <Avatar.Icon icon="heart-outline" {...iconStyle} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarLabel: 'Booking',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Avatar.Icon icon="bell" {...iconStyle} />
            ) : (
              <Avatar.Icon icon="bell-outline" {...iconStyle} color="black" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Avatar.Icon icon="account" {...iconStyle} />
            ) : (
              <Avatar.Icon
                icon="account-outline"
                {...iconStyle}
                color="black"
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={BottomTab} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Place" component={Place} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen
          name="Info"
          component={PropertyInfo}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Room"
          component={Room}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Confirm"
          component={Confirmation}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
