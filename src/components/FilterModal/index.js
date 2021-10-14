/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { View, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { Button, CheckBox, Text } from '@ui-kitten/components';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import categories from '../../constants/categories';

export default function FilterModal({
  visible,
  setVisible,
  categoryState,
  setCategoryState,
  initialState,
}) {
  const [checkedItems, setCheckedItems] = useState(initialState);

  const closeModal = () => setVisible(false);

  const onClearFilters = () => {
    setCheckedItems(Array(initialState.length).fill(false));

    setCategoryState(
      categories.map((item) => ({
        id: item.id,
        label: item.label,
        checked: false,
      }))
    );

    closeModal();
  };

  const onFilterApply = () => {
    const filters = checkedItems.map((item, idx) => ({
      ...categoryState[idx],
      checked: item,
    }));

    setCategoryState(filters);

    closeModal();
  };

  const onCheckboxChange = (nextChecked, itemIndex) => {
    const updatedList = checkedItems.map((item, idx) => {
      if (itemIndex === idx) {
        return nextChecked;
      }

      return item;
    });

    setCheckedItems(updatedList);
  };

  return (
    <>
      <Modal
        visible={visible}
        animationType="slide"
        transparent
        statusBarTranslucent
        onDismiss={closeModal}
      >
        <View style={styles.backdrop}>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                hitSlop={{ top: 16, bottom: 16, right: 16, left: 16 }}
                onPress={closeModal}
              >
                <Feather name="chevron-down" color="#E4E4E4" size={28} />
              </TouchableOpacity>
            </View>

            <ScrollView>
              <Text category="h5" style={styles.title}>
                Filtros
              </Text>

              {categoryState.map(({ id, label }, index) => (
                <CheckBox
                  key={id}
                  style={styles.categoryCheckbox}
                  checked={checkedItems[index]}
                  onChange={(val) => onCheckboxChange(val, index)}
                >
                  {label}
                </CheckBox>
              ))}
            </ScrollView>
            <Button style={styles.clearFilters} onPress={onFilterApply}>
              Filtrar
            </Button>

            {checkedItems.find((i) => i === true) && (
              <Button
                style={styles.clearFilters}
                appearance="ghost"
                onPress={onClearFilters}
              >
                Limpar filtros
              </Button>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
}
