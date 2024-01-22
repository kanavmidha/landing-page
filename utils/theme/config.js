import { createTheme } from "@mui/material"

const themeOptions = {
    typography:{
        h1: {
            fontFamily: [
                'Sailec Bold',
                'sans-serif'
            ].join(','),
            fontSize: '4rem'
        },
        h2:{
            fontFamily:[
                'Sailec Bold',
                'sans-serif'
            ].join(','),
            fontSize: '4rem'
        },
        h3:{
            fontFamily: [
                'Sailec Bold'
            ].join(','),
            fontSize: '3.125rem'
        },
        body1: {
            fontFamily:[
                'Sailec Medium',
                'sans-serif'
            ].join(','),
            fontSize: '1.325rem'
        }
    },
    palette: {
        mint: {
            main: '#83c5be',
        },
        darkMint: {
            main: '#006d77'
        },
        skin: {
            main: '#ffddd2'
        },
        darkSkin: {
            main: '#e29578'
        }
    }
    
}

const theme = createTheme(themeOptions)
export {theme}
