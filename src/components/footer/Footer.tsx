import { ContactPage } from '@mui/icons-material';
import { Box, Container, Grid, IconButton, Link } from '@mui/material';
import React, { FC } from 'react'

//icons
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';


//logo
import Logo from './Logo'
import Impresum from './Impresum';
const Footer: FC<{}> = () => {

    

    return (
        <div>
            <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} bgcolor="darkgray" color="white" marginTop={10}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Impressum</Box>
                            <Impresum />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Unternehmen</Box>
                            <Box>
                                <Link href='/contact' color="inherit">
                                    Kontact
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/about' color="inherit">
                                    Über uns
                                </Link>
                            </Box>
                           

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Hilfe</Box>
                            <Box>
                                <Link href='/contact' color="inherit">
                                    Kontact
                                </Link>
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