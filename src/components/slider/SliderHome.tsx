
import { Box, CardMedia, Container, Paper } from '@mui/material'
import React, { FC } from 'react'
import { Fade } from 'react-slideshow-image'


//data from imgs for slider
import sliderData from './data.json'

const SliderHome: FC<{}> = () => {
    return (
        <Container className='slide-container' style={{ marginTop: '20px' }}>
            <Fade>
                {
                    sliderData.map((item) => (
                        <Box className="each-fade" key={item.id}>
                            <Paper elevation={3} sx={{padding:"1.2em", borderRadius:" 2.5em"}}>

                                <CardMedia
                                    component='img'
                                    height="600"
                                    image={item.url}
                                    sx={{borderRadius:"1.2em"}}
                                />
                            </Paper>
                        </Box>
                    ))
                }
            </Fade>
        </Container>
    )
}

export default SliderHome