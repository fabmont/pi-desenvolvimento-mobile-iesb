import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function FloatingButton({ onPress, label, iconName }) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Feather name={iconName} size={20} color="white" />
      {label && !!label.length && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
}
