import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { useLayoutEffect, useState } from 'react/cjs/react.development';
import { Avatar } from 'react-native-paper';
import Amenity from '../components/Amenity';

const Room = ({ route, navigation }) => {
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
      title: 'Available rooms',
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
  const [selected, setSelected] = useState([]);
  return (
    <>
      <ScrollView>
        {availableRooms.map((room, index) => (
          <Pressable
            style={{ margin: 10, backgroundColor: 'white', padding: 10 }}
            key={index}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{ fontSize: 17, color: '#007fff', fontWeight: '500' }}
              >
                {room.name}
              </Text>
              <Avatar.Icon
                icon="information"
                style={{ backgroundColor: 'transparent' }}
                size={40}
                color={'#007fff'}
              />
            </View>
            <Text style={{ marginTop: 3 }}>Pay at the property</Text>
            <Text style={{ marginTop: 3, color: 'green', fontSize: 15 }}>
              Free cancellation available
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: 'red',
                  textDecorationLine: 'line-through',
                }}
              >
                ${oldPrice}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                }}
              >
                ${newPrice}
              </Text>
            </View>
            <Amenity />
            {selected.includes(room.name) ? (
              <Pressable style={styles.selectStyle}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#316ce7',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  SELECTED
                </Text>
                <Pressable onPress={() => setSelected([])}>
                  <Avatar.Icon
                    icon="close-circle-outline"
                    size={40}
                    color="red"
                    style={{ backgroundColor: 'transparent' }}
                  />
                </Pressable>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(room.name)}
                style={{
                  borderColor: '#007fff',
                  borderWidth: 3,
                  borderRadius: 5,
                  padding: 8,
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#007fff',
                  }}
                >
                  Select
                </Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>
      {selected.length > 0 && (
        <Pressable
          onPress={() =>
            navigation.navigate('User', {
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
          <Text
            style={{
              backgroundColor: '#007fff',
              padding: 8,
              marginBottom: 30,
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: 3,
              marginHorizontal: 15,
            }}
          >
            Reserve
          </Text>
        </Pressable>
      )}
    </>
  );
};

export default Room;

const styles = StyleSheet.create({
  selectStyle: {
    borderColor: '#318ce3',
    borderWidth: 3,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#f088ff',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
