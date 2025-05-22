import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function SidebarNav({ items }: { items: string[] }) {
  return (
    <View style={styles.container}>
      {items.map((item, i) => (
        <TouchableOpacity key={i} style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 6,
  },
  text: { fontWeight: '600' },
});
