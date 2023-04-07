import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  PixelRatio,
} from 'react-native';

const { width } = Dimensions.get('window');
const scale = width / 360;

export const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

const styles = StyleSheet.create({});
