import React from 'react';
import { Select, ThemeProvider, InputLabel, MenuItem, FormControl, FormHelperText } from '@mui/material';
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
    helperText : {
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
   
    <FormControl {...args} variant={args.variant} sx={{ minWidth: 200 }}>
        <InputLabel {...args}>{args.label}</InputLabel>
        <Select {...args}>  
          <MenuItem value=""> <em>None</em> </MenuItem>
          <MenuItem value={1}>Placeholder</MenuItem>
          <MenuItem value={2}>Placeholder 2</MenuItem>
          <MenuItem value={3}>Placeholder 3</MenuItem>
        </Select>
        <FormHelperText {...args}> {args.helperText}</FormHelperText>
    </FormControl>

</ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  size: 'medium',
  label : 'Label',
  variant:'filled',
  helperText: 'Helper Text',
  
  disabled : false,
  error: false,
};
