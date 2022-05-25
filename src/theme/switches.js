//refer to https://mui.com/material-ui/customization/theme-components/
//refer to https://mui.com/material-ui/react-switch/
import { neutrals, primary } from "../style/Colors/Colors";
import { alpha } from "@mui/material";


export const switches = {
        MuiSwitch: {
            styleOverrides: {
                root: { 
                    '& .Mui-disabled' : {color : neutrals[200]} ,
                    '.MuiSwitch-colorPrimary': {
                        '&.Mui-focusVisible': {backgroundColor: alpha(primary[400],0.2)},
                        '&:hover': {backgroundColor: alpha(primary[400],0.1)},
                    },
                },
            },

            variants: [
                {   
                    props: { state: 'focus' }, 
                    style: { 
                        '.MuiSwitch-colorPrimary': {backgroundColor: alpha(primary[400],0.2)},
                    },
                },
                {
                    props: { state: 'hover' }, 
                    style: { 
                        '.MuiSwitch-colorPrimary': {backgroundColor: alpha(primary[400],0.1)},
                    },
                }
            ],
        },
    }