import { Box, Container } from '@mui/material'
import React, { FC } from 'react'
import ParallaxService from '../../components/parallax/unsereService/ParallaxService'

import MainAboutPage from './mainAbout/main'


const AboutPage:FC<{}> = () => {
  return (
    <Box>
      
    <Container>
      <MainAboutPage />
    </Container>
    <ParallaxService />
    </Box>
  )
}

export default AboutPage