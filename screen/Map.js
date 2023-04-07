import { StyleSheet, Text, View, Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React from 'react';
import { useRef, useEffect } from 'react/cjs/react.development';

const Map = ({ route }) => {
  const { places } = route.params;
  const coordinates = [];

  useEffect(() => {
    const details = places.map((place) =>
      place.properties.map((property) => {
        coordinates.push({
          latitude: Number(property.latitude),
          longitude: Number(property.longitude),
        });
      })
    );
    mapView.current.fitToCoordinates(coordinates, {
      edgePadding: {
        top: 100,
        left: 100,
        bottom: 100,
        right: 100,
      },
    });
  }, []);

  const mapView = useRef(null);
  return (
    <View>
      <MapView ref={mapView} style={{ width: '100%', height: '100%' }}>
        {places.map((place) =>
          place.properties.map((property) => (
            <Marker
              key={property.id}
              title={property.name}
              coordinate={{
                latitude: Number(property.latitude),
                longitude: Number(property.longitude),
              }}
            >
              <Pressable
                style={{
                  backgroundColor: '#003580',
                  paddingHorizontal: 7,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  ${property.newPrice}
                </Text>
              </Pressable>
            </Marker>
          ))
        )}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({});
