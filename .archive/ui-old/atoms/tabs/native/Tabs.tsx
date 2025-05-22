import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { TabsProps } from './props';

export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onChange(index)}
          style={[styles.tab, activeTab === index && styles.activeTab]}
        >
          <Text style={styles.tabText}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderColor: 'transparent',
  },
  activeTab: {
    borderColor: '#1e40af',
  },
  tabText: {
    fontWeight: '600',
    color: '#1e40af',
  },
});
