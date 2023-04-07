import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { services } from '../dummydata/data';

const Amenity = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 17, fontWeight: '600' }}>
        Most popular Facilities
      </Text>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}
      >
        {services.map((service) => (
          <Text
            style={{
              backgroundColor: '#007fff',
              color: 'white',

              margin: 10,
              borderRadius: 25,
              paddingHorizontal: 12,
              paddingVertical: 5,
              textAlign: 'center',
            }}
            key={service.id}
          >
            {service.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Amenity;

const styles = StyleSheet.create({});
