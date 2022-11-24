import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React, { FC } from 'react'

interface PropTypes{
  id?: string;
  name?: string;
  url?: string;
  description?: string;
  title?: string;

}


const CardsHomePage: FC<PropTypes> = ({id,name,url,description, title}) => {
  return (
    <Card sx={{ maxWidht: 345 }} className='box'>
      <CardActionArea key={id}>
        <CardMedia
          component='img'
          height="140"
          image={url}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardsHomePage