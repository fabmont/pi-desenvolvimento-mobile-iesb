import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import Pages from './src/pages';

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <Pages />
  </ApplicationProvider>
);
