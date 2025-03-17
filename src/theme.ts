import {createTheme } from "@mui/material/styles";


export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#465380',
        },
        secondary: {
            main: '#f50057'
        },
        error: {
            main: '#f44336'
        },

        background: {
            default: '#a39da2'
        }
    },
    typography : {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '2rem'
        },
        h2: {
            fontWeight: 600,
            fontSize: '1.8rem'
        },
        h3: {
            fontWeight: 500,
            fontSize: '1.5rem',
            color: '#636363'
        },
        h4: {
            fontWeight: 500,
            fontSize: '1.4rem',
            color: '#424242'
        },
        h5: {
            fontWeight: 300,
            fontSize: '1.2rem'
        },
        h6: {
            fontWeight: 200,
            fontSize: '0.8rem'
        },
        body1: {
            fontSize: '1rem'
        }

    },
    spacing: 8,
    shape: {
        borderRadius: 4, 
      },

    }
)