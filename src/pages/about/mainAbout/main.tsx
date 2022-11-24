import { CardMedia, Container, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { FC } from 'react'

//slider
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

//data imgs for about from public
import fotos from './data.json'

const MainAboutPage:FC<{}> = () => {
    return (
        <Container sx={{mt:'15em'}}>
           
                
                    <Fade>
                        {
                            fotos.map((item)=>(
                                <div>
                                    <CardMedia 
                                        component='img'
                                        height="600"
                                        image={item.url}
                                        sx={{borderRadius:"1.2em",}}/>
                                </div>
                    

                                
                            ))
                        }
                    </Fade>
               
                    <Grid container sx={{mt:'5em'}}>
                        <Grid item>
                            <Typography borderBottom={2} variant='h2' color='primary'>
                                Kleiderreinigung & Wäscherei
                            </Typography>
                            <Typography variant='body1' sx={{mt:'5em'}}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae sit assumenda quibusdam nesciunt distinctio in error, vero magni eius sunt quae pariatur veniam consequatur, quidem obcaecati numquam unde fugit alias?
                            </Typography>

                        </Grid>
                    </Grid>
        </Container>
    )
}

export default MainAboutPage