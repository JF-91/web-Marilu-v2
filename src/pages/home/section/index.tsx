
import { CardMedia, Container, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC } from 'react'

//image
import foto from './image/weihnachten.jpeg'
const SectionHomePAge: FC<{}> = () => {
    return (
        <Container sx={{mt:'10em'}}>
            <Grid container
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{ minHeight: '100vh' }}>
                <Grid item sx={{ sm: 12, md: 6, xl: 6 }}>
                    <Paper elevation={3} sx={{ padding: '1.2em', borderRadius: '2.5em' }}>
                        <CardMedia
                            component='img'
                            image={foto}
                            height='600'
                            width='100%'
                            sx={{ borderRadius: "1.5em" }} />
                    </Paper>
                </Grid>

                <Grid item sx={{ sm: 12, md: 6, xl: 6 }}>
                    <Box alignItems='center' justifyContent='center' marginTop='1.5em'>
                        <Typography  color='peru' variant='h1'>
                            fröhliche Weihnachten!
                        </Typography>
                        <Typography variant='body2' color='text.secondary' textAlign='justify'>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ex distinctio, aliquam at totam deleniti sapiente molestias! Nisi, aspernatur fuga, cum iste voluptate numquam accusamus ratione provident neque amet delectus!
                           Culpa hic magni consequatur unde inventore id magnam perspiciatis exercitationem quos odit perferendis ea at optio repudiandae omnis illum quam eius, illo, veritatis eaque. Sint blanditiis quia nobis eius beatae.
                           Nulla perspiciatis placeat repellendus reprehenderit quasi non blanditiis, earum doloremque numquam reiciendis molestiae optio repudiandae laboriosam ex in autem quaerat nam illum praesentium alias molestias ullam! Mollitia eum dolorem laudantium.
                           Dolores natus officia numquam vitae! Quia error cum obcaecati rerum, assumenda excepturi illo tempora molestias blanditiis, maiores odit voluptatum totam quaerat tenetur! Id qui earum blanditiis quae maxime quia aut.
                           Itaque, omnis aperiam. Voluptates enim in doloremque provident. Quis placeat ea eveniet excepturi consequuntur iure a cumque dolore, dolorum voluptas pariatur dignissimos cum quia, atque exercitationem reprehenderit quidem quas ut.
                           Porro assumenda saepe aspernatur dolorum asperiores veritatis alias eveniet eos corporis expedita voluptate nisi sit possimus ipsum, dolor nihil quam! Aperiam repellat qui ab suscipit sit cum, voluptates accusantium quisquam.
                           Atque inventore ipsam illo rerum harum, quisquam sint, laudantium aliquam odio quasi delectus deserunt, eligendi natus incidunt distinctio! Quasi quae corrupti voluptates in explicabo veniam dicta nam magnam incidunt quas?
                           Vel accusamus quasi aspernatur provident, voluptatem quae reiciendis quam odit doloribus placeat minus in voluptate ipsa consequatur tempora soluta blanditiis! Neque, ex! Vel asperiores dolorum a, nam facere neque ipsa.
                           Doloremque sunt non nam amet, culpa facere rem exercitationem nesciunt placeat, hic iure provident quisquam voluptatibus deserunt. Omnis, eum possimus laborum distinctio dolores beatae. Facere culpa doloremque magnam quis perspiciatis.
                           Expedita necessitatibus veniam in sit exercitationem assumenda incidunt tempora quo quos dolore perspiciatis repellendus, velit at inventore quaerat, quis animi eum recusandae voluptatem adipisci iste. Accusamus, impedit aut? Minima, eum.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SectionHomePAge