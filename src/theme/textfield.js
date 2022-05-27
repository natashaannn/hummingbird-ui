import { neutrals } from "../style/Colors/Colors";

export const textfield = {
  MuiTextField : {
      styleOverrides : {
        root : {
         '& .Mui-disabled' : {color : neutrals[300] } ,
         //, borderBottom: "1px solid red" 
      },
    },
  },

  MuiFilledInput: {
    styleOverrides : {
      root : {
        '& .Mui-disabled' : {color : neutrals[300]} ,
      },
    },
  },
}