import React, { useState } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, StyleSheet } from 'react-native';
import type { AccordionProps } from './props';

export function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen(!open);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggle} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {open && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { padding: 10, backgroundColor: '#eee' },
  title: { fontWeight: 'bold' },
  content: { padding: 10, backgroundColor: '#fafafa' },
});
