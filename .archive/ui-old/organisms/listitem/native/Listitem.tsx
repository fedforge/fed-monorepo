import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { ListItemProps } from './props';

export function ListItem({ title, subtitle }: ListItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
});
