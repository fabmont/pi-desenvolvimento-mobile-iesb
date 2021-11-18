import { Button } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';

const CardFooter = ({ onOk, onCancel, disableSubmit, ...props }) => (
  <View
    {...props}
    style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 10 }}
  >
    <Button
      style={{ marginRight: 10 }}
      size="small"
      status="basic"
      onPress={onCancel}
    >
      Cancelar
    </Button>
    <Button size="small" onPress={onOk} disabled={disableSubmit}>
      Adicionar
    </Button>
  </View>
);

export default CardFooter;
