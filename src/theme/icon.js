import { secondary } from "../style/Colors/Colors"

export const icon = {
        MuiIconButton: {
            styleOverrides: {
                root: { 
                    "&.Mui-focusVisible": {
                        backgroundColor: secondary[400],
                    },
                    ':hover' : {
                        backgroundColor : secondary[100],
                    }
                },
            },
            variants: [
                {   
                    props: { state: 'focus' }, 
                    style: { 
                        backgroundColor: secondary[400],
                    },
                },
                {   
                    props: { state: 'hover' },
                    style: { 
                        backgroundColor : secondary[100],
                    },
                }
            ],
        },
    }