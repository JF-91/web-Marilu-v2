import { Button, CardMedia, Container, Grid, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { FC } from 'react'

//slider
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

//data imgs for about from public
import fotos from './data.json'

const MainAboutPage: FC<{}> = () => {
    return (
        <Container sx={{ mt: '15em' }}>


            <Fade>
                {
                    fotos.map((item) => (
                        <div key={item.id}>
                            <CardMedia
                                
                                component='img'
                                height="600"
                                image={item.url}
                                sx={{ borderRadius: "1.2em", }} />
                        </div>



                    ))
                }
            </Fade>

            <Grid container sx={{ mt: '5em' }}>
                <Grid item>
                    <Typography borderBottom={2} variant='h2' color='primary'>
                        Kleiderreinigung & Wäscherei
                    </Typography>

                    <Stack direction='column' spacing={3}>
                        <Button variant='outlined' color='secondary' sx={{mt:3}}>Waschen</Button>
                        <Button variant='outlined' color='secondary'>Wäsche schrankfertig</Button>
                        <Button variant='outlined' color='secondary'>Putzen</Button>
                        <Button variant='outlined' color='secondary'>Hochzeits- u. Ballkleider</Button>
                        <Button variant='outlined' color='secondary'>Hemdendienst</Button>
                        <Button variant='outlined' color='secondary'>Abholung / Zustellung</Button>
                        <Button variant='outlined' color='secondary'>Teppichreinigung</Button>
                        <Button variant='outlined' color='secondary'>Lederreinigung</Button>
                        <Button variant='outlined' color='secondary'>Pelze u. Felle</Button>
                    </Stack>

                </Grid>
            </Grid>
        </Container>
    )
}

export default MainAboutPage