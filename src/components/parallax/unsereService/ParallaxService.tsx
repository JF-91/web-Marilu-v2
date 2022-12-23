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
      <Box display='flex' justifyContent='center' alignItems='center' height='15vh' sx={{ margin: '8em' }}>
        <Typography align='justify' variant='body2'>
          Wir haben jahrzehntelange Erfahrung in der Reinigung und Trocknung aller Arten von Kleidungsstücken.
          Wir arbeiten mit der besten professionellen Sorgfalt, wir garantieren eine ausgezeichnete Arbeit.
        </Typography>
      </Box>

      <div id='schrankfertig'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={schrankfertig}
        bgImageAlt="schrankfertig"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='15vh' sx={{ margin: '8em' }}>
        <Typography align='justify'variant='body2'>
          Wir arbeiten mit großer Sorgfalt und Professionalität, wir liefern Ihre Kleidung mit besonderer Sorgfalt, damit der Transport und die Lagerung für Sie so zufriedenstellend wie möglich ist.
        </Typography>
      </Box>

      <div id='putzen'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={putzen}
        bgImageAlt="putzen"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='15vh' sx={{ margin: '8em' }}>
        <Typography align='justify' variant='body2'>
          Wir arbeiten mit großer Professionalität und bieten Ihnen unsere jahrzehntelange Erfahrung im Wäscheservice für alle Arten von Kleidung, wir garantieren, dass Sie mit unserem Service zufrieden sein werden.
        </Typography>
      </Box>

      <div id='hochzeit'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={hochzeit}
        bgImageAlt="hochzeit"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='15vh' sx={{ margin: '8em' }}>
        <Typography align='justify' variant='body2'>
          Wir haben die besten Fachleute für die Pflege, Wäsche und Reparatur Ihres Brautkleides.
        </Typography>
      </Box>

      <div id='hemde'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={hemden}
        bgImageAlt="hemde"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='15vh' sx={{ margin: '8em' }}>
        <Typography align='justify' variant='body2'>
          Unsere professionellen Hemdenbügel-Experten, mit jahrzehntelanger Erfahrung im Dienste unserer Kunden. Wir sind stolz darauf, einen qualitativ hochwertigen Service zu bieten.
        </Typography>
      </Box>

      <div id='abholung'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={abholung}
        bgImageAlt="abholung"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='15vh' sx={{ margin: '8em' }}>
        <Typography align='justify' variant='body2'>
          Wir wissen, dass die Zeit für viele unserer Kunden sehr wichtig ist. Deshalb bieten wir einen Abhol- und Lieferservice an, damit Sie Ihre Kleidung pünktlich und bequem von zu Hause aus in Empfang nehmen können.
        </Typography>
      </Box>

      <div id='teppich'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={teppich}
        bgImageAlt="teppich"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='15vh' sx={{ margin: '8em' }}>
        <Typography align='justify' variant='body2'>
          Unsere Fachleute arbeiten mit großer Sorgfalt und Präzision bei der Pflege Ihrer Teppiche.
        </Typography>
      </Box>

      <div id='leder' ></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={leder}
        bgImageAlt="leder"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='15vh' sx={{ margin: '8em' }}>
        <Typography align='justify' variant='body2'>
          Unsere jahrzehntelange Erfahrung garantiert Ihnen die beste Arbeit in der Pflege aller Arten von Materialien, Leder ist sehr empfindlich und wir wissen das, deshalb verwenden wir die besten Techniken. Wir garantieren Ihnen eine ausgezeichnete Arbeit.
        </Typography>
      </Box>


      <div id='pelze'></div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={pelze}
        bgImageAlt="pelze"
        strength={-200}
      >

        <Box style={{ height: '650px' }} />
      </Parallax>
      <Box display='flex' justifyContent='center' alignItems='center' height='15vh' sx={{ margin: '8em' }}>
        <Typography align='justify' variant='body2'>
          Unsere jahrzehntelange Erfahrung garantiert Ihnen beste Arbeit bei der Pflege von Materialien aller Art. Wir sind uns bewusst, wie empfindlich manche Materialien sein können, und deshalb bieten wir einen sehr hochwertigen Service an. Unsere Fachleute arbeiten mit großer Sorgfalt und Effizienz für Sie.
        </Typography>
      </Box>




    </Box>
  )
}

export default ParallaxService