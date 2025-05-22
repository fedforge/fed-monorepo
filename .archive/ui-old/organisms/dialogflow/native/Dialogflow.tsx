import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { DialogFlowProps } from './props';

export function DialogFlow({ steps, currentStep }: DialogFlowProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>{steps[currentStep]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  prompt: { fontSize: 16, fontWeight: '500' },
});
