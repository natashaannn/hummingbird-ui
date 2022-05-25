//MUI imports
import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

//local imports
import { typography } from './typography';
import { switches } from './switches';
import { icon } from './icon';
import { lightcolorpalette, darkcolorpalette } from './colorpalette';
import { radiobutton } from './radiobutton';
import { checkbox } from './checkbox';
import { textfield } from './textfield';

// Theme overrides for components
const components = { components: Object.assign({}, checkbox, switches, icon, radiobutton, textfield)};

// Common settings across both light and dark themes
const commonSettings = Object.assign({}, typography, components);

// Merging light theme palette and common settings
export const lightTheme = createTheme(deepmerge( lightcolorpalette, commonSettings));

// Merging dark theme palette and common settings
export const darkTheme = createTheme(deepmerge( darkcolorpalette, commonSettings));