

import { Box, Button, Container, Grid, IconButton, ImageListItemBar, Typography, Stack } from '@mui/material'

import React, { FC } from 'react'
import PriceFoto from './section/Price'

//mui icom
import AddLocationIcon from '@mui/icons-material/AddLocation';

const PriceAndInfo: FC<{}> = () => {
    return (
        <Container>
            <Grid container
                direction='row'
                alignItems='center'
                justifyContent='center'
                sx={{ minHeight: '20vh' }}>
                <Stack direction='column' spacing={2} justifyContent='center' alignContent='center' alignItems='center'>

                    {/* <Grid item>
                        <PriceFoto />
                    </Grid> */}
                    <Grid item sx={{display:'flex'}} alignItems='center'  justifyContent='center'>
                        <Button variant='outlined' href='/Preisliste.pdf' target='_blank'>
                            <Typography variant='body1'>
                                Preisliste herunterladen
                            </Typography>
                        </Button>
                        <IconButton href='https://goo.gl/maps/2yYVywMj6VczBMph6' target='_blank'>
                            <AddLocationIcon />
                            <Typography variant='body2'>Hier finden Sie uns</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item sx={{placeContent:'center'}}>

                        <Typography variant='h6' textAlign='center'>
                        Öffnungszeiten: Mo-Fr 8:00 – 16:30
                        </Typography>
                        <Typography variant='h6' textAlign='center'>
                        Samstag geschlossen
                        </Typography>
                        <Typography variant='h6' textAlign='center'>
                            Urlaub: 24.12.2022 – 8.1.2023
                        </Typography>
                        
                        <Typography variant='h6' textAlign='center'>
                            Herbeckstraße 38, 1180 Wien
                        </Typography>
                        <Typography variant='h6' textAlign='center'>
                            Tel.: 01 / 4704203
                        </Typography>
                        <Button href='mailto:textilreinigung.1180@inode.at'>

                            <Typography variant='h6'>
                                e-mail: textilreinigung.1180@inode.at
                            </Typography>
                        </Button>
                    </Grid>
                </Stack>
            </Grid>
        </Container>
    )
}

export default PriceAndInfo