function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Select } from 'semantic-ui-react';
import FormsyDropdown from './FormsyDropdown';
export default (function (props) {
  return /*#__PURE__*/React.createElement(FormsyDropdown, _extends({
    inputAs: Select
  }, props));
});