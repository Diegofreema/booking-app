import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useState } from 'react';
import { useLayoutEffect } from 'react/cjs/react.development';
import { Avatar, TextInput, Button } from 'react-native-paper';
import Header from '../components/Header';
import DatePicker from 'react-native-date-ranges';
import { defaultIconStyles } from '../style/styles';
import {
  BottomModal,
  ModalFooter,
  ModalButton,
  ModalTitle,
  SlideAnimation,
  ModalContent,
} from 'react-native-modals';

const HomeScreen = ({ navigation, route }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const { params } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Booking.com',
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
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{ width: '80%', marginHorizontal: 30, fontSize: 20 }}
        textColor="#003580"
      >
        Submit
      </Button>
    );
  };
  const searchPlaces = (place) => {
    if (!params || !selectedDate) {
      Alert.alert('Invalid Details', 'Please enter all the details', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
    if (params && selectedDate) {
      navigation.navigate('Place', {
        rooms,
        adults,
        children,
        selectedDate,
        place,
      });
    }
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <Header />
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Pressable
              style={styles.pressableStyle}
              onPress={() => navigation.navigate('Search')}
            >
              <Avatar.Icon
                icon="magnify"
                style={defaultIconStyles}
                color="black"
                size={50}
              />
              <TextInput
                placeholder={params ? params.place : 'Enter your destination'}
                style={{ flex: 1, backgroundColor: 'transparent' }}
                activeUnderlineColor={'transparent'}
              />
            </Pressable>
            <Pressable style={styles.pressableStyle}>
              <Avatar.Icon
                icon="calendar"
                style={defaultIconStyles}
                color="black"
                size={50}
              />
              <DatePicker
                style={{
                  width: 350,
                  height: 30,
                  borderRadius: 0,
                  borderWidth: 0,
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 'auto',
                  },
                  headerStyle: {
                    backgroundColor: '#003580',
                  },
                  contentText: {
                    fontSize: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 'auto',
                  },
                }}
                centerAlign
                allowFontScaling={false}
                placeholder={'Select your date'}
                mode={'range'}
                selectedBgColor="#0047ab"
                customButton={(onConfirm) => customButton(onConfirm)}
                onConfirm={(startDate, endDate) =>
                  setSelectedDate(startDate, endDate)
                }
              />
            </Pressable>
            <Pressable
              style={styles.pressableStyle}
              onPress={() => setModalVisible(true)}
            >
              <Avatar.Icon
                icon="account-outline"
                style={{ backgroundColor: 'transparent' }}
                color="black"
                size={50}
              />
              <TextInput
                placeholder={`${rooms} room + ${adults} adults + ${children} children`}
                style={{ flex: 1, backgroundColor: 'transparent' }}
                activeUnderlineColor={'transparent'}
                placeholderTextColor="red"
              />
            </Pressable>
            <Pressable
              style={styles.pressable}
              onPress={() => searchPlaces(params.place)}
            >
              <Text style={{ color: 'white', textAlign: 'center' }}>
                Search
              </Text>
            </Pressable>
          </View>
          <Text
            style={{ marginHorizontal: 20, fontSize: 17, fontWeight: '500' }}
          >
            Travel more spend less
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: '#003584',
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginVertical: 7,
                }}
              >
                Genius
              </Text>
              <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>
                You are at genius level one in our loyalty program.
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: ' #e0e0e0',
                borderWidth: 2,
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginVertical: 7,
                }}
              >
                15% Discount
              </Text>
              <Text style={{ fontSize: 15, fontWeight: '500' }}>
                Complete 5 stays to unlock level 2.
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                borderColor: ' #e0e0e0',
                borderWidth: 2,
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginVertical: 7,
                }}
              >
                10% Discount
              </Text>
              <Text style={{ fontSize: 15, fontWeight: '500' }}>
                Enjoy discounts at participating at properties worldwide
              </Text>
            </Pressable>
          </ScrollView>
          <Pressable
            style={{
              marginTop: 40,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: '600', color: '#003580' }}>
              Booking.
            </Text>
            <Text style={{ fontSize: 30, fontWeight: '600', color: '#4f74a7' }}>
              com
            </Text>
          </Pressable>
        </ScrollView>
      </View>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(false)}
        swipeDirection={['up', 'down']}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: 'white',
                backgroundColor: '#003584',
              }}
              onPress={() => setModalVisible(false)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title={'Select rooms and Guests'} />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
        onHardwareBackPress={() => setModalVisible(false)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(false)}
      >
        <ModalContent style={{ with: '100%', height: 310 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Rooms</Text>
            <Pressable
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            >
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0',
                }}
                onPress={() => setRooms(Math.max(1, rooms - 1))}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '500',
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text>{rooms}</Text>
              </Pressable>
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0',
                }}
                onPress={() => setRooms((prev) => prev + 1)}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '500',
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Adults</Text>
            <Pressable
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            >
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0',
                }}
                onPress={() => setAdults(Math.max(2, adults - 1))}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '500',
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text>{adults}</Text>
              </Pressable>
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0',
                }}
                onPress={() => setAdults((prev) => prev + 1)}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '500',
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Children</Text>
            <Pressable
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            >
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0',
                }}
                onPress={() => setChildren(Math.max(0, children - 1))}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '500',
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text>{children}</Text>
              </Pressable>
              <Pressable
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0',
                }}
                onPress={() => setChildren((prev) => prev + 1)}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '500',
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderColor: '#ffc72c',
    borderWidth: 3,
    borderRadius: 6,
    flex: 1,
  },
  pressableStyle: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,
    borderColor: '#ffc72c',
    borderWidth: 2,
  },
  pressable: {
    paddingHorizontal: 10,
    borderColor: '#2b52be',
    backgroundColor: '#2b52be',
    borderWidth: 2,
    paddingVertical: 15,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
});
