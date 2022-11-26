import { Container, Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CardsHomePage from '../../../components/cards/homepage/CardsHomePage'
//data promo images
import promoData from './data.json'
const MainPage = () => {
    return (
        <Container sx={{ mt: "10em" }}>
            <Box>
                <Grid container spacing={0}
                    
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}>
                    {
                        promoData.map((item) => (
                            <Grid item key={item.id} xs={12} md={6} lg={4}  mb={{ xs: 2, md: 4, lg: 4 }} mr={{ xs: 2, md: 2, lg: 4 }}>

                                <Paper>
                                    <CardsHomePage id={item.id} name={item.name} url={item.url} description={item.description} title={item.title} />
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    )
}

export default MainPage