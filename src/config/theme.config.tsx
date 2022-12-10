
import { createTheme, ThemeProvider, CssBaseline, Typography } from "@mui/material"
import React, {FC} from "react"

type PropType ={
    children: JSX.Element
}

export enum palette {
    BG = '#eaf6f6',
    PY = '#79c2d0',
    SC = '#5585b5'

}

const ThemeConfig:FC<PropType> = ({children})=>{

    const theme = createTheme({
        palette:{
            mode:'light',
            background:{
                default: palette.BG
            },
            primary:{
                main: palette.PY
            },
            secondary:{
                main: palette.SC
            }
        },
        typography:{
            fontFamily: [
                'Catamaran',
                'Monospace'
            ].join(),
            body1:{
                fontFamily:"Condensed"
            }
            
        },
        components: {
            MuiButton: {
              defaultProps: {
                style: {
                  textTransform: "none",
                  boxShadow: "none",
                  borderRadius: "0.5em",
                },
              },
              styleOverrides:{
                outlined :{
                    '&:hover':{ background: "rgb(7,134,272,0.42)"}
                }
              }
            },

          }
       
    })

    return(
        <ThemeProvider theme={theme}>
            {children}
            <CssBaseline />
        </ThemeProvider>
    )
}

export default ThemeConfig