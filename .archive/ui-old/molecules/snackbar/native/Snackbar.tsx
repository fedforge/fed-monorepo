import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { SnackbarProps } from './props';

export function Snackbar({ message, duration = 3000 }: SnackbarProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <View style={styles.bar}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#1e40af',
    padding: 12,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
