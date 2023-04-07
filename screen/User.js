import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { useLayoutEffect, useState } from 'react/cjs/react.development';
import { TextInput } from 'react-native-paper';
import Toast from 'react-native-toast-message';

const User = ({ navigation, route }) => {
  const {
    name,
    rating,
    oldPrice,
    newPrice,
    photos,
    rooms,
    adults,
    children,
    selectedDate,
    availableRooms,
  } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'User Details',
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: '#003580',
        height: 110,

        shadowColor: 'transparent',
      },
      headerTintColor: 'white',
    });
  }, []);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const userDetail = () => {
    if (
      firstName.trim().length < 1 ||
      lastName.trim().length < 1 ||
      email.trim().length < 1 ||
      number.trim().length < 1
    ) {
      return Toast.show({
        type: 'error',
        text1: 'Hello',
        text2: 'Please fill in all fields!',
      });
    }
    if (!email.includes('@')) {
      return Toast.show({
        type: 'error',
        text1: 'Please enter a valid email address',
      });
    }

    navigation.navigate('Confirm', {
      name,
      rating,
      oldPrice,
      newPrice,
      photos,
      rooms,
      adults,
      children,
      selectedDate,
      availableRooms,
    });
  };
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <View style={{ gap: 20, flex: 1 }}>
        <TextInput
          label="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
          underlineColor="transparent"
        />
        <TextInput
          underlineColor="transparent"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          label="Last Name"
        />
        <TextInput
          underlineColor="transparent"
          value={email}
          onChangeText={(text) => setEmail(text)}
          label="Email"
          keyboardType="email-address"
        />
        <TextInput
          label="Phone Number"
          underlineColor="transparent"
          value={number}
          onChangeText={(text) => setNumber(text)}
          keyboardType="numeric"
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Text
              style={{
                fontSize: 20,
                color: 'red',
                textDecorationLine: 'line-through',
              }}
            >
              ${oldPrice}
            </Text>
            <Text
              style={{
                fontSize: 20,
              }}
            >
              ${newPrice}
            </Text>
          </View>
          <Text>You have saved ${oldPrice - newPrice} </Text>
        </View>
        <Pressable onPress={userDetail}>
          <Text
            style={{
              backgroundColor: '#007fff',
              padding: 10,
              fontSize: 20,
              color: 'white',
              borderRadius: 5,
            }}
          >
            Final step
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
