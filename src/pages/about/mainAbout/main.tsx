import { CardMedia, Container, Grid, Paper, Typography } from '@mui/material'
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
                    <Typography variant='body1' sx={{ mt: '5em' }}>
                        Seit mehr als einem Jahrzehnt bieten wir den besten Service für Ihre Kleidung und Teppiche, unsere Kunden sind unsere Priorität, und wir sind in ständiger Kommunikation mit Ihnen, um Ihre Zweifel zu lösen.
                        <br />
                        Unsere jahrelange Erfahrung in diesem Bereich und das gute Feedback unserer Kunden geben uns die Gewissheit, dass wir unsere Arbeit hervorragend machen.
                    </Typography>

                </Grid>
            </Grid>
        </Container>
    )
}

export default MainAboutPage