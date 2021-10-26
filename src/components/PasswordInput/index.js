import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon, Input } from '@ui-kitten/components';

export default function PasswordInput(props) {
  const [secureEntry, setSecureEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureEntry(!secureEntry);
  };

  const renderIcon = (iconProps) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...iconProps} name={secureEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      {...props}
      accessoryRight={renderIcon}
      secureTextEntry={secureEntry}
    />
  );
}
