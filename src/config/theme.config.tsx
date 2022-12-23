
import { Height } from "@mui/icons-material"
import { createTheme, ThemeProvider, CssBaseline, Typography } from "@mui/material"
import React, {FC} from "react"
import logo from '../../public/imgs/LogoKomplett.gif'

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
            },
            body2:{
                fontFamily:'Catamaran'
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
            MuiAppBar:{
               styleOverrides:{
                colorSecondary:{
                   
                    
                }
               }
            }
           
            

          },
          
       
    })

    return(
        <ThemeProvider theme={theme}>
            {children}
            <CssBaseline />
        </ThemeProvider>
    )
}

export default ThemeConfig