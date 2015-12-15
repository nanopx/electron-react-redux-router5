import styler from 'react-styling/flat';
import colors from './colorPalette';

const buttonStyle = styler
`
  background-color: ${colors.blue}
`;

export const buttonMixin = (baseStyle = {}) => {
  return Object.assign({}, buttonStyle, baseStyle);
};
