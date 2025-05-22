import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import type { AvatarProps } from './props';

export function Avatar({ uri, size = 48, fallback }: AvatarProps) {
  return uri ? (
    <Image source={{ uri }} style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]} />
  ) : (
    <View style={[styles.fallback, { width: size, height: size, borderRadius: size / 2 }]}>
      <Text style={styles.fallbackText}>{fallback}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#ccc',
  },
  fallback: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#888',
  },
  fallbackText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
