import {Color} from './colors';
import {GridVariant} from './types';

const lightPalette = {
  header: {
    primary: Color.white,
    secondary: Color.gray10,
    tertiary: Color.pink10,
    quaternary: Color.pink30,
  },
  backgroundColor: {
    primary: Color.white,
    secondary: Color.gray10,
    tertiary: Color.pink10,
    quaternary: Color.gray50,
    quinary: Color.pink30,
    senary: Color.pink20,
  },
  text: {
    primary: Color.black,
    secondary: Color.gray40,
    tertiary: Color.white,
    quaternary: Color.gray20,
    quinary: Color.gray30,
  },
  textInput: {
    primary: Color.gray20,
    secondary: Color.pink20,
  },
  icon: {
    primary: Color.gray40,
    secondary: Color.pink10,
  },
};

export const lightTheme = {
  type: 'light',
  colors: {...lightPalette},
  grid: {...GridVariant},
};
