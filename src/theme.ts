import {createTheme } from "@mui/material/styles";


export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#f50057'
        },
        error: {
            main: '#f44336'
        },

        background: {
            default: '#f4f6f8'
        }
    },
    typography : {
        fontFamily: 'Roboto, sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '2.5rem'
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem'
        },
        h3: {
            fontWeight: 500,
            fontSize: '1.5rem'
        },
        h4: {
            fontWeight: 400,
            fontSize: '1rem'
        },
        h5: {
            fontWeight: 300,
            fontSize: '0.75rem'
        },
        h6: {
            fontWeight: 200,
            fontSize: '0.5rem'
        },
        body: {
            fontSize: '1rem'
        }

    },
    spacing: 8,
    shape: {
        borderRadius: 4, 
      },

    }
)