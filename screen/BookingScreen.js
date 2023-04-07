import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-paper';
const BookingScreen = ({ navigation }) => {
  const bookings = useSelector((state) => state.booking.booking);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Bookings',
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
      headerRight: () => (
        <Avatar.Icon
          icon="bell-outline"
          style={{ backgroundColor: 'transparent', marginRight: 12 }}
          color="white"
          size={40}
        />
      ),
    });
  }, []);
  return (
    <SafeAreaView>
      {bookings.length > 0 &&
        bookings.map((booking) => (
          <Pressable key={booking.name} style={styles.container}>
            <View>
              <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                {booking.name}
              </Text>
              <View style={styles.row}>
                <Avatar.Icon
                  icon={'star'}
                  size={24}
                  style={{ backgroundColor: 'transparent' }}
                  color="green"
                />
                <Text style={styles.row}>{booking.rating}</Text>
                <Text style={{ marginLeft: 3 }}>*</Text>
                <View style={styles.con}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontSize: 12,
                      fontWeight: '400',
                    }}
                  >
                    Genius Level
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      {bookings.length < 1 && (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ fontSize: 25 }}>You have no booking available!!!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    padding: 14,
    borderRadius: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  rating: {
    marginLeft: 3,
    fontSize: 15,
    fontWeight: '400',
  },
  con: {
    padding: 6,
    borderRadius: 4,
    width: 100,
    backgroundColor: '#0039a6',
    marginLeft: 4,
    borderRadius: 5,
  },
});
