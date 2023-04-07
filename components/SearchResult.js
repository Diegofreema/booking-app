import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import { defaultStyles, defaultStyles2 } from '../style/styles';
import { useNavigation } from '@react-navigation/native';

const SearchResult = ({ data, input, setInput }) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (
            item.place.toLowerCase().includes(!input.toLowerCase()).length === 1
          ) {
            return <Text>Destination not found</Text>;
          }
          if (item.place.toLowerCase().includes(input.toLowerCase())) {
            if (input.trim().length < 1) return null;

            return (
              <Pressable
                style={styles.pressableStyle}
                onPress={() => {
                  setInput(item.place);
                  navigation.navigate('Home', { place: item.place });
                }}
              >
                <View>
                  <Image
                    source={{ uri: item.placeImage }}
                    style={{ width: 70, height: 70 }}
                  />
                </View>
                <View style={styles.detail}>
                  <Text style={{ fontSize: 15, fontWeight: '500' }}>
                    {item.place}
                  </Text>
                  <Text style={{ marginVertical: 4 }}>
                    {item.shortDescription}
                  </Text>
                  <Text style={{ color: 'gray', fontSize: 15 }}>
                    {item.properties.length} Properties
                  </Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  pressableStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  detail: {
    marginLeft: 10,
  },
});
