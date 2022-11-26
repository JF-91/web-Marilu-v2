
import { CardMedia, Container, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'

//image
import foto from './image/weihnachten.jpeg'
const SectionHomePAge: FC<{}> = () => {
    return (
        <Container sx={{ mt: '10em' }}>
            <Grid container
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{ minHeight: '100vh' }}>
                <Grid item sx={{sm:12, md:12, xl:6}}>
                    <Paper elevation={3} sx={{ padding: '1.2em', borderRadius: '2.5em' }}>
                        <CardMedia
                            component='img'
                            image={foto}
                            height='600'
                            width='100%'
                            sx={{ borderRadius: "1.5em" }} />
                    </Paper>
                </Grid>

                <Grid item sx={{ sm: 12, md: 6, xl: 6 }}>
                    <Box alignItems='center' justifyContent='center' marginTop='1.5em'>
                        <Typography color='peru' variant='h1'>
                            fröhliche Weihnachten!
                        </Typography>
                        <Typography variant='body1' color='text.secondary' textAlign='justify'>
                            Mögen Ihre Gedanken in dieser Weihnachtszeit mit guten Wünschen für Ihre Familie und Freunde gefüllt sein.
                            <br />
                            Im Namen unseres Unternehmens wünschen wir allen unseren Kunden ein frohes Weihnachtsfest".
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SectionHomePAge