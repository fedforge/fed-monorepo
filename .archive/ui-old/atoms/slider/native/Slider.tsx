import React from 'react';
import { View, StyleSheet } from 'react-native';
import RNSlider from '@react-native-community/slider';
import type { SliderProps } from './props';

export function Slider({ value, onChange, min = 0, max = 100, step = 1 }: SliderProps) {
  return (
    <View style={styles.container}>
      <RNSlider
        style={styles.slider}
        minimumValue={min}
        maximumValue={max}
        step={step}
        value={value}
        onValueChange={onChange}
        minimumTrackTintColor="#1e40af"
        maximumTrackTintColor="#ddd"
        thumbTintColor="#1e40af"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});
