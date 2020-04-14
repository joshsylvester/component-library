import React from "react";
import TextField from './TextField';
import { injectIntl } from "react-intl";

const TextFieldUsingIntl = ({ name, intl }) => (
  <TextField
    name={name}
    placeholder={intl.formatMessage({ id: "placeholder" })}
  />
);

const IntlTextField = injectIntl(TextFieldUsingIntl);

export default IntlTextField;
