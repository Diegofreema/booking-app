import { Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { useLayoutEffect, useState } from 'react/cjs/react.development';
import { Avatar } from 'react-native-paper';
import { defaultIconStyles } from '../style/styles';
import { dummyData, filters } from '../dummydata/data';
import Card from '../components/Card';
import {
  BottomModal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from 'react-native-modals';

const Place = ({ route, navigation }) => {
  const { rooms, place, children, adults, selectedDate } = route.params;

  const [data, setData] = useState(dummyData);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Popular Places',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      headerStyle: {
        backgroundColor: '#003580',
        height: 110,

        shadowColor: 'transparent',
      },
      headerTintColor: '#fff',
    });
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [sortedData, setSortedData] = useState(dummyData);
  const selectedPlaces = dummyData?.filter((item) => item.place === place);
  const compare = (a, b) => {
    if (a.newPrice > b.newPrice) {
      return -1;
    } else if (a.newPrice < b.newPrice) {
      return 1;
    } else {
      0;
    }
  };
  const comparison = (a, b) => {
    if (a.newPrice < b.newPrice) {
      return -1;
    } else if (a.newPrice > b.newPrice) {
      return 1;
    } else {
      0;
    }
  };
  const applyFilter = (filter) => {
    setModalVisible(false);
    switch (filter) {
      case 'cost:High to Low':
        selectedPlaces.map((val) => val.properties.sort(compare));
        setSortedData(selectedPlaces);
        break;
      case 'cost:Low to High':
        selectedPlaces.map((val) => val.properties.sort(comparison));
        setSortedData(selectedPlaces);
        break;
      default:
        break;
    }
  };
  return (
    <View>
      <View style={styles.containerIcon}>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={{ alignItems: 'center', flexDirection: 'row' }}
        >
          <Avatar.Icon
            icon="swap-horizontal"
            style={defaultIconStyles}
            color="black"
            size={50}
          />
          <Text>Sort</Text>
        </Pressable>
        <Pressable style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Avatar.Icon
            icon="filter-variant"
            style={defaultIconStyles}
            color="black"
            size={50}
          />
          <Text>Filter</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Map', { places: selectedPlaces })}
          style={{ alignItems: 'center', flexDirection: 'row' }}
        >
          <Avatar.Icon
            icon="map-marker-check"
            style={defaultIconStyles}
            color="black"
            size={50}
          />
          <Text>Map</Text>
        </Pressable>
      </View>
      <ScrollView style={{ backgroundColor: '#f5f5f5', marginBottom: 100 }}>
        {sortedData
          ?.filter((item) => item.place === place)
          .map((item) =>
            item.properties.map((property) => (
              <Card
                key={property.id}
                rooms={rooms}
                children={children}
                adults={adults}
                selectedDate={selectedDate}
                property={property}
                available={property.rooms}
              />
            ))
          )}
      </ScrollView>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(false)}
        swipeDirection={['up', 'down']}
        footer={
          <ModalFooter>
            <Pressable
              onPress={() => applyFilter(selectedFilter)}
              style={{
                paddingRight: 10,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginVertical: 10,
              }}
            >
              <Text style={{ marginBottom: 10 }}>Apply</Text>
            </Pressable>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title={'Sort and filter'} />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
        onHardwareBackPress={() => setModalVisible(false)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(false)}
      >
        <ModalContent style={{ width: '100%', height: 200 }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                marginVertical: 10,
                flex: 2,
                height: 280,
                borderRightWidth: 1,
                borderColor: '#e0e0e0',
              }}
            >
              <Text style={{ textAlign: 'center' }}>Sort</Text>
            </View>
            <View style={{ flex: 3, margin: 10 }}>
              {filters.map((item, i) => (
                <Pressable
                  key={item.id}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 10,
                  }}
                  onPress={() => setSelectedFilter(item.filter)}
                >
                  {selectedFilter.includes(item.filter) ? (
                    <Avatar.Icon
                      icon="circle-slice-8"
                      size={20}
                      style={{ backgroundColor: 'transparent' }}
                      color="green"
                    />
                  ) : (
                    <Avatar.Icon
                      icon="circle-outline"
                      size={20}
                      style={{ backgroundColor: 'transparent' }}
                      color="black"
                    />
                  )}

                  <Text
                    style={{ fontSize: 16, fontWeight: '500', marginLeft: 6 }}
                  >
                    {item.filter}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default Place;

const styles = StyleSheet.create({
  containerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
});
