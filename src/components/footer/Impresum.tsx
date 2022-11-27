import { CardMedia, Icon, IconButton, SvgIcon, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { FC } from 'react'
//mui icom
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PaymentIcon from '@mui/icons-material/Payment';
import PolicyIcon from '@mui/icons-material/Policy';

//logo
import Logo from '../../common/Logo';

const Impresum:FC<{}> = () => {
  return (
    <Box>
        <Stack direction='column' justifyContent='center' alignItems='center'>
            <Logo />
            <Typography>kleiderreinigung & Wäscherei</Typography>
            <Typography>Marilu Rios de Schön</Typography>
            <Typography>Herbeckstraße 38, 1180 Wien</Typography>
            <Typography>Tel.: 01 / 4704203</Typography>
            <Typography>e-mail: textilreinigung.1180@inode.at</Typography>
            <IconButton href='https://goo.gl/maps/2yYVywMj6VczBMph6'>
                <AddLocationIcon />
                <Typography variant='body2'>Hier finden Sie uns</Typography>
            </IconButton>
            <IconButton href='/Preisliste.pdf' target='_blank'>
                <PaymentIcon />
                <Typography>Preisliste</Typography>
            </IconButton>
            <IconButton href='/agb.pdf' target='_blank'>
                <PolicyIcon />
                AGB
            </IconButton>
            <IconButton href='http://www.wkoecg.at/Web/Ecg.aspx?FirmaID=dcbddb53-22f2-4417-8e90-ded0f06f48b0'>
                <CardMedia component='img' src='/wko.gif' height='25'/>
            </IconButton>
            <Typography variant='body1' color='#424242'>
                Informationspflicht lt. ECG
            </Typography>
            
        </Stack>
    </Box>
  )
}

export default Impresum