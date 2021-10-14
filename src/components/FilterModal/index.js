/* eslint-disable react/style-prop-object */
import React from 'react';
import { View, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { Button, CheckBox, Text } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import categories from '../../constants/categories';

export default function FilterModal({ visible, setVisible }) {
  return (
    <>
      <StatusBar style="light" animated />
      <Modal
        visible={visible}
        animationType="slide"
        transparent
        statusBarTranslucent
        on
      >
        <View style={styles.backdrop}>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                hitSlop={{ top: 16, bottom: 16, right: 16, left: 16 }}
                onPress={() => setVisible(false)}
              >
                <Feather name="x-circle" color="#E4E4E4" size={22} />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <Text category="h5" style={styles.title}>
                Filtros
              </Text>

              {categories.map(({ id, label }) => (
                <CheckBox key={id} style={styles.categoryCheckbox}>
                  {label}
                </CheckBox>
              ))}
            </ScrollView>
            <Button>Filtrar</Button>
          </View>
        </View>
      </Modal>
    </>
  );
}
