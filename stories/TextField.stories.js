import React from 'react';
import { IntlProvider } from 'react-intl';
import { TextField, IntlTextField } from '../lib';

export default {
  title: 'TextField',
  component: TextField,
};

export const Default = () => <TextField name="cat" />;

export const Intl = () => (
  <IntlProvider locale="en">
    <IntlTextField name="intl-cat" />
  </IntlProvider>
);
