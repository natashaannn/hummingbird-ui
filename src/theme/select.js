import { neutrals } from "../style/Colors/Colors";

export const select = {
  MuiSelect : {
    styleOverrides : {
      root : {
        '& .Mui-disabled' : {color : neutrals[300]} ,
      },
    },
  },
  MuiInputLabel: {
    styleOverrides : {
      root : {
        '&.Mui-disabled' : {color : neutrals[300]} ,
      },
    },
  },
  MuiFormControl: {
    styleOverrides : {
      root : {
        '& .Mui-disabled' : {color : neutrals[300]} ,
      },
    },
  },
}