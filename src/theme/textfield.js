import { secondary } from "../style/Colors/Colors"

export const textfield = {
  MuiTextField : {
      styleOverrides : {
        root : {
          // "&.Mui-focusVisible": {
          //   backgroundColor: secondary[400],
          // },
          // '&:hover' : {
          //   backgroundColor : "#E0E0E0",
          // },
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
