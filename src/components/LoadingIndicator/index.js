import React from 'react';
import { View } from 'react-native';
import { Spinner } from '@ui-kitten/components';

const LoadingIndicator = ({ style }) => (
  <View style={style}>
    <Spinner size="small" />
  </View>
);

export default LoadingIndicator;
