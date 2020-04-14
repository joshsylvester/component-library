import React from "react";
import { injectIntl } from "react-intl";
const TextField = ({ name, intl }) => (
  <input
    type="text"
    name={name}
    placeholder={intl.formatMessage({ id: "placeholder" })}
  />
);

export const IntlTextField = injectIntl(TextField);
