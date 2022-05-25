import { neutrals } from "../style/Colors/Colors";

export const textfield = {
  MuiTextField : {
      styleOverrides : {
        root : {
          '& .Mui-disabled' : {color : neutrals[300]} ,
        },
      },
    },
  }