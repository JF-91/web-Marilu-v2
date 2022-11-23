
import { Grid, Paper, Box, Stack } from '@mui/material'


import React, { FC } from 'react'
import FormApp from '../../components/forms'

import foto from './image/burbujas.jpg'

const ContactPage: FC<{}> = () => {
  return (
    <Box sx={{ marginLeft:'6em', marginTop:'6em', marginRight:'6em', marginBottom:'6em'  }}>

      <Grid container spacing={2} sx={{ mt: '7em', }}>

        <Grid item xs={12} md={8} xl={6}>
          <img src={foto} style={{ borderRadius: "0.5em", maxHeight: "100vh", objectFit: "cover" }} />
        </Grid>

        <Grid item xs={12} md={4} xl={6}>
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <FormApp />
          </Box>
        </Grid>

      </Grid>
    </Box>
  )
}

export default ContactPage