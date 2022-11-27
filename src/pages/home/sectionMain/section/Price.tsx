import { Box, CardMedia } from '@mui/material'
import React, { FC } from 'react'

const PriceFoto:FC<{}> = () => {
  return (
    <Box>
      <CardMedia 
        component='img'
        height='700vh'
        image='./imgs/PreisListe.jpg'
        sx={{borderRadius:'1.5em' }}/>
    </Box>
  )
}

export default PriceFoto