import { Container } from '@mui/material'
import React, { FC } from 'react'
import MainAboutPage from './mainAbout/main'


const AboutPage:FC<{}> = () => {
  return (
    <Container>
      <MainAboutPage />
    </Container>
  )
}

export default AboutPage