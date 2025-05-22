import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function FormGroup({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.group}>
      <Text style={styles.label}>{label}</Text>
      {children}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  group: { marginBottom: 12 },
  label: { fontWeight: '600', marginBottom: 4 },
  error: { color: 'red', fontSize: 12, marginTop: 2 },
});
