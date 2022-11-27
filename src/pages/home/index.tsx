import { Box } from '@mui/material'
import React from 'react'
//slider react-slideshow
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';


//data for slider
import SliderHome from '../../components/slider/SliderHome'
import MainPage from './main';
import SectionHomePAge from './section';
import PriceAndInfo from './sectionMain';

const HomePage = () => {
  return (
    <Box marginTop='12em'>
     <SliderHome />
     <br />
     <PriceAndInfo />
     <MainPage />
    </Box>
  )
}

export default HomePage