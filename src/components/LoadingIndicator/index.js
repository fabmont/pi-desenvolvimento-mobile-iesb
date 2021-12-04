import React from 'react';
import { View } from 'react-native';
import { Spinner } from '@ui-kitten/components';

const LoadingIndicator = ({ style, status }) => (
  <View style={style}>
    <Spinner size="small" status={status || 'control'} />
  </View>
);

export default LoadingIndicator;
