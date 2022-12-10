import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Parallax } from 'react-parallax'

import waschen from './parallax/waschen.jpg'
import schrankfertig from './parallax/waschenSchrankfertig.jpg'
import putzen from './parallax/putzen.jpg'
import hochzeit from './parallax/hochzeit.jpg'
import hemden from './parallax/hemde.jpg'
import abholung from './parallax/abholung.jpg'
import teppich from './parallax/teppich.jpg'
import leder from './parallax/leder.jpg'
import pelze from './parallax/pelze.jpg'


const ParallaxService: FC<{}> = () => {
  return (
    <Box marginTop={20}>
      <div id='waschen'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={waschen}
        bgImageAlt="waschen"
        strength={-200}
        
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='10vh' sx={{margin:'8em'}}>
        <Typography align='justify' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque, soluta accusantium distinctio reprehenderit iusto fugit ad nihil in explicabo, animi magnam, architecto optio dolorem nesciunt repellat possimus quia ea.
        </Typography>
      </Box>

      <div  id='schrankfertig'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={schrankfertig}
        bgImageAlt="schrankfertig"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='10vh' sx={{margin:'8em'}}>
        <Typography align='justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque, soluta accusantium distinctio reprehenderit iusto fugit ad nihil in explicabo, animi magnam, architecto optio dolorem nesciunt repellat possimus quia ea.
        </Typography>
      </Box>

      <div  id='putzen'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={putzen}
        bgImageAlt="putzen"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='10vh' sx={{margin:'8em'}}>
        <Typography align='justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque, soluta accusantium distinctio reprehenderit iusto fugit ad nihil in explicabo, animi magnam, architecto optio dolorem nesciunt repellat possimus quia ea.
        </Typography>
      </Box>

      <div  id='hochzeit'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={hochzeit}
        bgImageAlt="hochzeit"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='10vh' sx={{margin:'8em'}}>
        <Typography align='justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque, soluta accusantium distinctio reprehenderit iusto fugit ad nihil in explicabo, animi magnam, architecto optio dolorem nesciunt repellat possimus quia ea.
        </Typography>
      </Box>

      <div  id='hemde'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={hemden}
        bgImageAlt="hemde"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='10vh' sx={{margin:'8em'}}>
        <Typography align='justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque, soluta accusantium distinctio reprehenderit iusto fugit ad nihil in explicabo, animi magnam, architecto optio dolorem nesciunt repellat possimus quia ea.
        </Typography>
      </Box>

      <div  id='abholung'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={abholung}
        bgImageAlt="abholung"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='10vh' sx={{margin:'8em'}}>
        <Typography align='justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque, soluta accusantium distinctio reprehenderit iusto fugit ad nihil in explicabo, animi magnam, architecto optio dolorem nesciunt repellat possimus quia ea.
        </Typography>
      </Box>

      <div  id='teppich'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={teppich}
        bgImageAlt="teppich"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='10vh' sx={{margin:'8em'}}>
        <Typography align='justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque, soluta accusantium distinctio reprehenderit iusto fugit ad nihil in explicabo, animi magnam, architecto optio dolorem nesciunt repellat possimus quia ea.
        </Typography>
      </Box>

      <div  id='leder' ></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={leder}
        bgImageAlt="leder"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='10vh' sx={{margin:'8em'}}>
        <Typography align='justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque, soluta accusantium distinctio reprehenderit iusto fugit ad nihil in explicabo, animi magnam, architecto optio dolorem nesciunt repellat possimus quia ea.
        </Typography>
      </Box>


      <div  id='pelze'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={pelze}
        bgImageAlt="pelze"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='10vh' sx={{margin:'8em'}}>
        <Typography align='justify' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque, soluta accusantium distinctio reprehenderit iusto fugit ad nihil in explicabo, animi magnam, architecto optio dolorem nesciunt repellat possimus quia ea.
        </Typography>
      </Box>




    </Box>
  )
}

export default ParallaxService