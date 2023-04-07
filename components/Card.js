import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Card = ({
  rooms,
  children,
  selectedDate,
  adults,
  property,
  available,
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable
        onPress={() =>
          navigation.navigate('Info', {
            name: property.name,
            rating: property.rating,
            oldPrice: property.oldPrice,
            newPrice: property.newPrice,
            photos: property.photos,
            rooms: rooms,
            adults: adults,
            children: children,
            selectedDate: selectedDate,
            availableRooms: property.rooms,
          })
        }
        style={styles.card}
      >
        <View>
          <Image
            style={{ height: height / 4, width: width / 3, flex: 1 }}
            source={{ uri: property.image }}
          />
        </View>
        <View style={{ padding: 10 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContents: 'space-between',
            }}
          >
            <Text style={{ width: 200 }}>{property.name}</Text>
            <Avatar.Icon
              icon="heart-outline"
              size={30}
              style={{ backgroundColor: 'transparent' }}
              color="red"
            />
          </View>
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
              color="black"
              style={{ backgroundColor: 'transparent' }}
            />
            <Text>{property.rating}</Text>
            <View
              style={{
                backgroundColor: '#6cb4ee',
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
          <Text
            style={{
              width: 210,
              marginTop: 6,
              color: 'gray',
              fontWeight: 'bold',
            }}
          >
            {property.address.length > 50
              ? property.address.substr(0, 50)
              : property.address}
            ...
          </Text>
          <Text style={{ marginTop: 4, fontWeight: '500', fontSize: 15 }}>
            Price for 1 Night and {adults} adults
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: 'red',
                textDecorationLine: 'line-through',
                fontSize: 12,
              }}
            >
              ${property.oldPrice * adults}
            </Text>
            <Text style={{ color: 'black', fontSize: 12 }}>
              ${property.newPrice * adults}
            </Text>
          </View>
          <View style={{ marginTop: 6 }}>
            <Text style={{ fontSize: 16, color: 'gray' }}>Deluxe Room</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>
              Hotel Room : 1 bed
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#6082b6',
              paddingVertical: 3,
              borderRadius: 5,
              width: 120,
              paddingHorizontal: 4,
              marginTop: 4,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
              }}
            >
              Limited time deal
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 15,
    backgroundColor: 'white',
    elevation: 6,
  },
});
