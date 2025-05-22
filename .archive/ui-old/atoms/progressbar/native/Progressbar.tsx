import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { ProgressBarProps } from './props';

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { width: `${progress}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
  },
  bar: {
    height: 8,
    backgroundColor: '#1e40af',
    borderRadius: 4,
  },
});
