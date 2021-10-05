/* eslint-disable react/style-prop-object */
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { StatusBar } from 'expo-status-bar';

import Pages from './src/pages';
import theme from './src/constants/theme.json';

export default () => (
  <>
    <StatusBar animated style="dark" />
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Pages />
    </ApplicationProvider>
  </>
);
