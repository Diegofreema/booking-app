import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import { useLayoutEffect } from 'react/cjs/react.development';
import { normalize } from '../components/Normalize';
import { Avatar } from 'react-native-paper';
import Amenity from '../components/Amenity';

const PropertyInfo = ({ route, navigation }) => {
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
      title: name,
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
  const difference = oldPrice - newPrice;
  const offerPrice = (Math.abs(difference) / oldPrice) * 100;
  return (
    <ScrollView>
      <Pressable style={{ flexDirection: 'row', flexWrap: 'wrap', margin: 10 }}>
        {photos.slice(0, 5).map((photo, i) => (
          <View key={i} style={{ margin: 6 }}>
            <Image
              style={{
                width: 115,
                height: 80,
                borderRadius: 4,
              }}
              source={{ uri: photo.image }}
            />
          </View>
        ))}
        <Pressable style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', marginLeft: 20 }}>Show more</Text>
        </Pressable>
      </Pressable>

      <View
        style={{
          marginHorizontal: 12,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
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
            <Text>{rating}</Text>
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
      <Text
        style={{
          borderColor: '#E0e0e0',
          borderWidth: 1,
          height: 1,
          marginTop: 15,
        }}
      ></Text>
      <Text
        style={{
          marginTop: 20,
          fontWeight: '500',
          fontSize: 17,
          marginHorizontal: 12,
        }}
      >
        Price for 1 Night and {adults} adults
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          marginTop: 4,
          marginHorizontal: 12,
        }}
      >
        <Text
          style={{
            color: 'red',
            textDecorationLine: 'line-through',
            fontSize: 20,
          }}
        >
          ${oldPrice * adults}
        </Text>
        <Text style={{ color: 'black', fontSize: 20 }}>
          ${newPrice * adults}
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 12,
          marginTop: 7,
          backgroundColor: 'green',
          paddingHorizontal: 4,
          paddingVertical: 5,
          width: 78,
          borderRadius: 4,
        }}
      >
        <Text style={{ textAlign: 'center', color: 'white' }}>
          {offerPrice.toFixed(0)}% OFF
        </Text>
      </View>
      <Text
        style={{
          borderColor: '#E0e0e0',
          borderWidth: 1,
          height: 1,
          marginTop: 15,
        }}
      ></Text>
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
            {selectedDate.startDate}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 3 }}>
            Check Out
          </Text>
          <Text style={{ fontSize: 15, fontWeight: '600', color: '#007ee9' }}>
            {selectedDate.endDate}
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
          {rooms} rooms {adults} adult {children} children
        </Text>
      </View>
      <Text
        style={{
          borderColor: '#E0e0e0',
          borderWidth: 1,
          height: 1,
          marginTop: 15,
        }}
      ></Text>
      <Amenity />
      <Text
        style={{
          borderColor: '#E0e0e0',
          borderWidth: 1,
          height: 1,
          marginTop: 15,
        }}
      ></Text>
      <Pressable
        style={{
          backgroundColor: '#6c84ee',
          marginBottom: 30,
          paddingVertical: 20,
          width: '95%',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
        onPress={() =>
          navigation.navigate('Room', {
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
          })
        }
      >
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 17 }}>
          Select Availability
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default PropertyInfo;

const styles = StyleSheet.create({});
