import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function FloatingButton() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Feather name="plus" size={20} color="white" />
      <Text style={styles.label}>Criar receita</Text>
    </TouchableOpacity>
  );
}
