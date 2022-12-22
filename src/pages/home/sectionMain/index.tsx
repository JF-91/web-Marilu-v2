

import { Button, Container, Grid, IconButton, Typography } from '@mui/material'
import { Stack } from '@mui/system'
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
                sx={{ minHeight: '100vh' }}>
                <Stack direction='column' spacing={4} justifyContent='center' alignContent='center' alignItems='center'>

                    <Grid item>
                        <PriceFoto />
                    </Grid>
                    <Grid item>
                        <Button variant='outlined' href='/Preisliste.pdf' target='_blank'>
                            <Typography variant='body1'>
                                Preisliste herunterladen
                            </Typography>
                        </Button>
                        <IconButton href='https://goo.gl/maps/2yYVywMj6VczBMph6'>
                            <AddLocationIcon />
                            <Typography variant='body2'>Hier finden Sie uns</Typography>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography variant='h3' fontSize='medium'>
                            Kleiderreinigung & Wäscherei
                        </Typography>
                        <Typography>
                            Marilu Rios de Schön
                        </Typography>
                        <Typography>
                            Herbeckstraße 38, 1180 Wien
                        </Typography>
                        <Typography>
                            Tel.: 01 / 4704203
                        </Typography>
                        <Typography>
                            e-mail: textilreinigung.1180@inode.at
                        </Typography>
                    </Grid>
                </Stack>
            </Grid>
        </Container>
    )
}

export default PriceAndInfo