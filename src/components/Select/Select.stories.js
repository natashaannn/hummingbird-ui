import React from 'react';
import { Select, ThemeProvider, InputLabel, MenuItem,FormControl } from '@mui/material';
import { lightTheme } from '../../theme/theme';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    disabled : {
      control : 'boolean',
    },
    label : {
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
   
    <FormControl variant={args.variant} sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>{args.label}</InputLabel>
        <Select {...args}>  
          <MenuItem value=""> <em>None</em> </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </FormControl>

</ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  size: 'medium',
  label : 'Label',
  variant:'filled',
  helperText: 'Helper Text',
  placeholder: 'Place Holder',
  disabled : false,
  error: false,
};
