import { createTheme } from "@mui/material"

const themeOptions = {
    typography:{
        h1: {
            fontFamily: [
                'Sailec Bold',
                'sans-serif'
            ].join(','),
            fontSize: '2.986rem'
        },
        h2:{
            fontFamily:[
                'Sailec Bold',
                'sans-serif'
            ].join(','),
            fontSize: '2.488rem'
        },
        h3:{
            fontFamily: [
                'Sailec Bold'
            ].join(','),
            fontSize: '2.074rem'
        },
        body1: {
            fontFamily:[
                'Sailec Medium',
                'sans-serif'
            ].join(','),
            fontSize: '1rem'
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
