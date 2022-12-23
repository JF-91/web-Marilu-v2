import { Box, Button, CardMedia, Container, Grid, Link ,Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React, { FC } from 'react'



//slider
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import AboutPage from '..';
import ParallaxService from '../../../components/parallax/unsereService/ParallaxService';

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

            <Grid container sx={{ mt: '5em', placeContent:'center' }} >

                <Grid item >
                    <Typography borderBottom={2} variant='h3' color='primary'>
                        Kleiderreinigung & Wäscherei
                    </Typography>

                    <Stack direction='column' spacing={3}>
                        <Button variant='outlined' color='secondary' LinkComponent={Link} href='/about#waschen' sx={{ mt: 3 }}>Waschen</Button>
                        <Button variant='outlined' color='secondary' LinkComponent={Link} href='/about#schrankfertig'>Wäsche schrankfertig</Button>
                        <Button variant='outlined' color='secondary' LinkComponent={Link} href='/about#putzen'>Putzen</Button>
                        <Button variant='outlined' color='secondary' LinkComponent={Link} href='/about#hochzeit'>Hochzeits- u. Ballkleider</Button>
                        <Button variant='outlined' color='secondary' LinkComponent={Link} href='/about#hemde'>Hemdendienst</Button>
                        <Button variant='outlined' color='secondary' LinkComponent={Link} href='/about#abholung'>Abholung / Zustellung</Button>
                        <Button variant='outlined' color='secondary' LinkComponent={Link} href='/about#teppich'>Teppichreinigung</Button>
                        <Button variant='outlined' color='secondary' LinkComponent={Link} href='/about#leder'>Lederreinigung</Button>
                        <Button variant='outlined' color='secondary' LinkComponent={Link} href='/about#pelze'>Pelze u. Felle</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MainAboutPage