import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import { defaultIconStyles } from '../style/styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressableStyle}>
        <Avatar.Icon
          icon="bed-queen-outline"
          style={defaultIconStyles}
          size={40}
        />
        <Text style={{ color: 'white' }}>Stays</Text>
      </Pressable>
      <Pressable style={styles.pressable}>
        <Avatar.Icon icon="airplane" style={defaultIconStyles} size={40} />
        <Text style={{ color: 'white' }}>Flights</Text>
      </Pressable>
      <Pressable style={styles.pressable}>
        <Avatar.Icon icon="car" style={defaultIconStyles} size={40} />
        <Text style={{ color: 'white' }}>Car Rental</Text>
      </Pressable>
      <Pressable style={styles.pressable}>
        <Avatar.Icon icon="taxi" style={defaultIconStyles} size={40} />
        <Text style={{ color: 'white' }}>Taxi</Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#003580',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  pressableStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    padding: 6,
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
