
import { Grid, Paper, Box,  Container, CardMedia } from '@mui/material'


import React, { FC } from 'react'
import FormApp from '../../components/forms'

import foto from './image/burbujas.jpg'
import SectionContact from './sectionContact/SectionContact'

// sx={{ marginLeft: '6em', marginTop: '6em', marginRight: '6em', marginBottom: '6em' }}
const ContactPage: FC<{}> = () => {
  return (
    <Container >

      <Grid container spacing={2} sx={{ mt: '12em', }} 
        direction='column'
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}>

        <Grid item xs={12} md={9} xl={6}>
          <Paper elevation={3} sx={{padding:"1.2em", borderRadius:"2.5em"}}>
            <CardMedia component='img' src={foto} style={{ height:'600',borderRadius: "0.5em", maxHeight: "75vh=", maxWidth:"100vh",objectFit: "cover", }} />
          </Paper>
        </Grid>
        <Grid item>
          <SectionContact />
        </Grid>

        {/* <Grid item xs={12} md={4} xl={6} >
          <Box sx={{ alignContent:'center' ,alignItems:'center', justifyContent: 'center' }}>
            <FormApp />
          </Box>
        </Grid> */}

      </Grid>
    </Container>
  )
}

export default ContactPage