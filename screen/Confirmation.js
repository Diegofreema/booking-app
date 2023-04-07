import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useLayoutEffect } from 'react/cjs/react.development';
import { Avatar, Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { savedPlaces } from '../SavedUser';
const Confirmation = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Confirm ',
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
  const dispatch = useDispatch();
  const confirmBooking = () => {
    dispatch(savedPlaces(route.params));
    navigation.navigate('Home');
  };
  return (
    <View>
      <Pressable style={{ backgroundColor: 'white', margin: 10 }}>
        <View
          style={{
            marginHorizontal: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              {route.params.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                marginTop: 7,
              }}
            >
              <Avatar.Icon
                icon="star"
                size={30}
                color="green"
                style={{ backgroundColor: 'transparent' }}
              />
              <Text>{route.params.rating}</Text>
              <View
                style={{
                  backgroundColor: '#003580',
                  paddingVertical: 3,
                  borderRadius: 5,
                  width: 100,
                }}
              >
                <Text
                  style={{ textAlign: 'center', color: 'white', fontSize: 15 }}
                >
                  Genius Level
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#178169',
              paddingHorizontal: 6,
              paddingVertical: 4,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: 'white', fontSize: 13 }}>
              Travel sustainable
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 12,
            alignItems: 'center',
            gap: 60,
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 3 }}>
              Check In
            </Text>
            <Text style={{ fontSize: 15, fontWeight: '600', color: '#007ee9' }}>
              {route.params.selectedDate.startDate}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 3 }}>
              Check Out
            </Text>
            <Text style={{ fontSize: 15, fontWeight: '600', color: '#007ee9' }}>
              {route.params.selectedDate.endDate}
            </Text>
          </View>
        </View>
        <View
          style={{
            margin: 12,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 3 }}>
            Rooms and Guest
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 3 }}>
            {route.params.rooms} rooms {route.params.adults} adult{' '}
            {route.params.children} children
          </Text>
        </View>
        <Button
          onPress={confirmBooking}
          style={{
            backgroundColor: '#003580',
            padding: 5,
            width: 120,
            marginHorizontal: 12,
            marginBottom: 20,
            fontSize: 15,
            fontWeight: 'bold',
          }}
          textColor="white"
        >
          Book now!
        </Button>
      </Pressable>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({});
