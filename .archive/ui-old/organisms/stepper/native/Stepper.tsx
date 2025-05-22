import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { StepperProps } from './props';

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <View style={styles.row}>
      {steps.map((label, i) => (
        <View key={i} style={styles.stepContainer}>
          <Text style={[styles.step, i === currentStep && styles.activeStep]}>
            {i + 1}
          </Text>
          <Text style={styles.label}>{label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  stepContainer: { alignItems: 'center' },
  step: {
    backgroundColor: '#ccc',
    borderRadius: 999,
    width: 24,
    height: 24,
    textAlign: 'center',
    color: '#fff',
  },
  activeStep: { backgroundColor: '#1e40af' },
  label: { marginTop: 4, fontSize: 12 },
});
