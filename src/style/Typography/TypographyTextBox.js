import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../../theme/theme';
import { Typography } from '@mui/material';


function TypographyTextBox(props) {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Typography variant={props.type}> {props.text} </Typography>  
        </ThemeProvider>
    );
}

export default TypographyTextBox;