import { ContactPage } from '@mui/icons-material';
import { Box, Container, Grid, IconButton, Link, Typography } from '@mui/material';
import React, { FC } from 'react'

//icons
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';


//logo
import Logo from './Logo'
import Impresum from './Impresum';
import { NavLink } from 'react-router-dom';
const Footer: FC<{}> = () => {

    

    return (
        <div>
            <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor="darkgray" color="white" marginTop={10}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} sx={{color:'#424242'}}>Impressum</Box>
                            <Impresum />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} sx={{color:'#424242'}}>Unternehmen</Box>
                            <Box>
                                <NavLink to='/contact' style={{textDecoration: "none"}}>
                                   <Typography variant='body1' color='#424242' >
                                        Kontakt
                                   </Typography>
                                </NavLink>
                            </Box>
                            <Box>
                                <NavLink to='/about' style={{textDecoration: "none"}}>
                                    <Typography variant='body1' color='#424242'>

                                        Über uns
                                    </Typography>
                                </NavLink>
                            </Box>
                           

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1} sx={{color:'#424242'}}>Hilfe</Box>
                            <Box>
                                <NavLink to='contact' style={{textDecoration:'none'}}>
                                    <Typography variant='body1' color='#424242'>

                                        Kontakt
                                    </Typography>
                                </NavLink>
                            </Box>
                            <Box>
                                <IconButton href="tel: +43 1 4704203">
                                    <LocalPhoneIcon />
                                       01 / 4704203
                                </IconButton>
                            </Box>
                            <Box>
                                <IconButton href='mailto:textilreinigung.1180@inode.at'>
                                    <ForwardToInboxIcon />
                                    
                                     email
                                </IconButton>
                            </Box>

                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }} color='black'>
                        John Rios &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Footer;