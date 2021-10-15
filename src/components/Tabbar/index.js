import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export default function Tabbar({ state, navigation }) {
  return (
    <>
      <BottomNavigation
        selectedIndex={state.index}
        style={{
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          paddingBottom: getBottomSpace(),
        }}
      >
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          let iconName = 0;

          if (index === 0) {
            iconName = 'home';
          }

          if (index === 1) {
            iconName = 'heart';
          }

          if (index === 2) {
            iconName = 'person';
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          return (
            <BottomNavigationTab
              key={route.name}
              title={route.name}
              icon={(props) => <Icon {...props} name={iconName} />}
              onPressIn={onPress}
            />
          );
        })}
      </BottomNavigation>
    </>
  );
}
