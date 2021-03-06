//refer to https://mui.com/material-ui/customization/theme-components/
//refer to https://mui.com/material-ui/react-switch/


import { secondary } from "../style/Colors/Colors"

//cannot change any color/background color even in root...
export const checkbox = {
  MuiCheckbox : {
      styleOverrides : {
        root : {
          "&.Mui-focusVisible": {
            backgroundColor: secondary[400],
          },
          '&:hover' : {
            backgroundColor : secondary[100],
          },
          // '&:focus' : {
          //   backgroundColor : 'black',
          // }
        },
      },

      variants: [
        {
          props: { state: 'Focus' },
          style: {
            ':hover' : {
              backgroundColor: secondary[100],
            },
            backgroundColor : secondary[400],
          },
        },
        {
          props: { state: 'Hover' },
          style: {
            ':hover' : {
              backgroundColor: secondary[400],
            },
            backgroundColor : secondary[100],
          },
        },
      ],
    },
  }
