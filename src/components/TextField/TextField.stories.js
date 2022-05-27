import React from 'react';
import { TextField, ThemeProvider, InputAdornment, IconButton, FormControl, InputLabel, FilledInput, FormHelperText } from '@mui/material';
import { lightTheme } from '../../theme/theme';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    disabled : {
      control : 'boolean',
    },
    label : {
      control : 'text',
    },
    helperText: {
      control : 'text',
    },
    placeholder	: {
      control : 'text',
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary','success','error','info','warning'],
      control: { type: 'select' },
    },
    error: {
      control : 'boolean',
    },
    variant: {
      options: ['filled', 'outlined','standard'],
      control: { type: 'select' },
    },
  },
}

const Template = (args) =>
<ThemeProvider theme={lightTheme}>
    <TextField {...args} />
    <br/>

    {/* <TextField {...args}
      InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
    />
    <TextField {...args}
      InputProps={{endAdornment: 
          <InputAdornment position="end"> 
            <IconButton> <Visibility/> </IconButton>
          </InputAdornment>
        }}
    />
    <br/> */}

  <FormControl sx={{width: 200 }}{...args}>
    <InputLabel {...args}>{args.label}</InputLabel>
    <FilledInput {...args}
      endAdornment={
        <InputAdornment position="end">
          <IconButton disabled={args.disabled} edge="end">
            <Visibility />
          </IconButton>
        </InputAdornment>
      }
    />
    <FormHelperText>{args.helperText}</FormHelperText>
  </FormControl>

  <FormControl sx={{width: 200 }}{...args}>
    <InputLabel {...args}>{args.label}</InputLabel>
    <FilledInput {...args}
      startAdornment={<InputAdornment position="start">$</InputAdornment>}
    />
    <FormHelperText>{args.helperText}</FormHelperText>
  </FormControl>

</ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  size: 'medium',
  label : 'Label',
  variant:'filled',
  helperText: 'Helper Text',
  placeholder: 'Value',
  disabled : false,
  error: false,
};
