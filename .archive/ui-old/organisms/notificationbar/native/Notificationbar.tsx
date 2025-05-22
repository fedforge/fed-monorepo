import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NotificationBarProps } from './props';

export function NotificationBar({ message }: NotificationBarProps) {
  return (
    <View style={styles.bar}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#1e40af',
    padding: 12,
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
});
