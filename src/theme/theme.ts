/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { createTheme } from '@mui/material'
import { Theme } from '@mui/material/styles/createTheme'
declare module "@mui/material/styles/createTheme" {
    interface ThemeOptions extends MyColor {}
}

  
interface ColorTheme {
    [key:string]: string
}


export interface MyColor extends Theme {
    
    colors?:{
        [key:string]: string | ColorTheme
    },
    Spacing?:string[] | string
    
}


const theme:MyColor = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 480,
          md: 769,
          lg: 1200,
          xl: 1920,
          
        }
      }, 
    direction:"rtl",
    Spacing:[
        '430px',
        '450px',
        '500px',
        '64vh',
    ],
    components: {
        MuiCssBaseline: {
          styleOverrides: {
            '*': {
              boxSizing: 'border-box',
              margin: 0,
              padding: 0
            },
            html: {
              MozOsxFontSmoothing: 'grayscale',
              WebkitFontSmoothing: 'antialiased',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100%',
              width: '100%',
              margin: 0,
              padding: 0
            },
            body: {
              display: 'flex',  
              flex: '1 1 auto',
              flexDirection: 'column',
              minHeight: '100%',
              width: '100%',
              margin: 0,
              padding: 0
            },
            '#root': {
              display: 'flex',
              flex: '1 1 auto',
              flexDirection: 'column',
              height: '100%',
              margin: 0,
              padding: 0,
              width: '100%'
            }
          }
        },
        MuiOutlinedInput: {
          styleOverrides: {
            notchedOutline: {
              borderColor: '#E6E8F0'
            }
          }
        },
        
      },
    palette: {
       divider: '#E6E8F0',
      },
    
    typography: {
        fontFamily: '"IRANSansX-Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,',
      },
    colors:{
        body: '#5A5A5A',
        heading: '#212121',
        green: '#00ad4e' ,
        input: '#1D1E1F',
        black: '#000',
        white: '#fff',
        linen: '#FBF1E9',
        linenSecondary: '#ECE7E3',
        olive: '#3D9970',
        maroon: '#B03060',
        brown: '#C7844B',
        placeholder: '#707070',
        borderBottom: '#f7f7f7',
        facebook: '#4267B2',
        facebookHover: '#395fad',
        google: 'rgb(0, 119, 242)',
        greenSky:'#52b788',
        googleHover: '#307bf9',
        greyShadwo:"#F4F4F4",
        greyBack:"#E9ECEF"
      }
})

export default theme