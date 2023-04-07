import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { ModalPortal } from 'react-native-modals';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <StackNavigator />
        <ModalPortal />
        <Toast />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
