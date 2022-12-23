import { Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import React, { FC } from 'react'

//mui icom
import AddLocationIcon from '@mui/icons-material/AddLocation';

const SectionContact: FC<{}> = () => {



    return (
        <Grid container>
            <Stack direction='column' display='flex' justifyContent='center' alignItems='center' spacing={5}>
                <Grid item display='flex' alignItems='center' justifyContent='center'>
                    <Button variant='outlined' href='/Preisliste.pdf' target='_blank'>
                        <Typography variant='body1'>
                            Preisliste herunterladen
                        </Typography>
                    </Button>
                    <IconButton   href='https://goo.gl/maps/2yYVywMj6VczBMph6'  target='_blank'>
                        <AddLocationIcon />
                        <Typography variant='body2'>Hier finden Sie uns</Typography>
                    </IconButton>
                </Grid>
                <Grid item>
                    <Typography  fontSize='medium'>
                        Kleiderreinigung & Wäscherei
                    </Typography>
                    <Typography>
                        Marilu Rios de Schön
                    </Typography>
                    <Typography>
                        Herbeckstraße 38, 1180 Wien
                    </Typography>
                    <Typography>
                        Öffnungszeiten: Mo-Fr 8:00 – 16:30
                    </Typography>
                    <Typography  >
                        Samstag geschlossen
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
    )
}

export default SectionContact