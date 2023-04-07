import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, TextInput } from 'react-native-paper';
import { defaultStyles } from '../style/styles';
import { useState } from 'react';
import { dummyData } from '../dummydata/data';
import SearchResult from '../components/SearchResult';
const SearchScreen = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState(dummyData);

  return (
    <SafeAreaView style={defaultStyles}>
      <View>
        <TextInput
          right={<TextInput.Icon icon="magnify" />}
          placeholder="Enter your destination"
          mode="outlined"
          outlineColor="#ffc72c"
          activeOutlineColor="#ffc72c"
          dense
          value={input}
          onChangeText={(text) => setInput(text)}
        />
      </View>
      <SearchResult data={data} input={input} setInput={setInput} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
