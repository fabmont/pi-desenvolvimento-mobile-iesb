import React from 'react';
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

export default function Toolbar({
  title,
  subtitle,
  accessoryLeft,
  accessoryRight,
  hasBackButton = false,
}) {
  const { goBack } = useNavigation();

  const renderBackAction = () => (
    <TopNavigationAction
      onPress={goBack}
      icon={(props) => <Icon name="arrow-back" {...props} />}
    />
  );

  return (
    <TopNavigation
      alignment="center"
      title={title}
      subtitle={subtitle}
      accessoryLeft={hasBackButton ? renderBackAction : accessoryLeft}
      accessoryRight={accessoryRight}
      style={{ borderBottomWidth: 1, borderBottomColor: '#E4E4E4' }}
    />
  );
}
