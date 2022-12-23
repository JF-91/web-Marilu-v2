import { AppBar, Box, Button, CardMedia, Drawer, Grid, Hidden, IconButton, ImageListItem, Link, Stack, Toolbar, Typography } from '@mui/material'
import React, { FC, useState } from 'react'

//menu icon
import MenuIcon from '@mui/icons-material/Menu';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import logo from './LogoKomplett.gif'
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { NavLink } from 'react-router-dom';

//css
import './navegation.css'
import { positions } from '@mui/system';


const NewNavBarApp: FC<{}> = () => {

  

    const [open, setOpen] = useState(false)

    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open)
    }


    return (
        <Box component='div' marginTop={{xs:'25em', sm:'25em'}}>
            <AppBar variant='elevation' color='primary'>
                <Toolbar variant='regular'>
                    <Hidden only={['md', 'lg', 'xl']}>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}  >
                            
                            <Grid item  >
                                <Stack direction='column' spacing={2} alignItems='end' marginTop={2}>
                                    <CardMedia component='img'image={logo} height='190'/>
                                    {/* <Box>
                                      <ImageListItemBar position='top' title={<Typography variant="h6">Öffnungszeiten: Mo-Fr 8:00 – 16:30, Sa geschlossen </Typography>}>
                                      </ImageListItemBar>
                                    </Box>
                                    <Box>
                                        <Typography marginTop={5} variant="h6">Urlaub: 24.12.2022 – 8.1.2023</Typography>
                                    </Box> */}
                                    
                                     <IconButton
                                        edge='start'
                                        size='large'
                                        aria-label='open drawer'
                                        color='inherit'
                                        onClick={toggleDrawer(true)}>
                                        <MenuIcon />
                                    </IconButton>
                                    
                                </Stack>
                            </Grid>
                            <Grid item>
                                    <Stack spacing={2} direction='row'>

                                        <IconButton href="tel: +43 1 4704203" size='small' edge='start'>
                                                    <LocalPhoneIcon />
                                                    01 / 4704203
                                        </IconButton>

                                        <IconButton href='mailto:textilreinigung.1180@inode.at' size='small' edge='end' >
                                                    <ForwardToInboxIcon />
                                                    email
                                        </IconButton>
                                    </Stack>
                            </Grid>

                           

                        </Grid>


                        <Drawer
                            anchor='right'
                            open={open}
                            onClose={toggleDrawer(false)}
                            variant='temporary'
                            onPointerEnter={toggleDrawer(true)}>
                            <Box sx={{ p: 2, height: 1, backgroundColor: "#434242", }}>
                                <Stack direction='column' spacing={3}>
                                    <Button variant='contained' >
                                        <NavLink to='/about' style={{textDecoration: "none"}}>
                                            <Typography variant='body2' color='black'>
                                                Unser Service
                                            </Typography>
                                        </NavLink>
                                    </Button>
                                    <Button variant='contained' >
                                        <NavLink to='/contact' style={{textDecoration: "none"}}>
                                            <Typography variant='body2' color='black'>
                                                Kontakt
                                            </Typography>
                                        </NavLink>
                                    </Button>
                                    <Button variant='contained' color='primary'>
                                        <NavLink to='/' style={{textDecoration: "none"}}>
                                            <Typography variant='body2' color='black'>
                                                Home
                                            </Typography>
                                        </NavLink>
                                    </Button>

                                </Stack>
                            </Box>

                        </Drawer>
                    </Hidden>
                    <Hidden only={['sm', 'xs']}>
                        <Grid container justifyContent='space-between'>
                            <Grid item >
                                <IconButton LinkComponent={Link} href='/'>
                                    <Box>
                                        <CardMedia component='img'image={logo} sx={{height:180}}/>

                                    </Box>

                                </IconButton>
                                
                            </Grid>
                            <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Stack direction='column' spacing={2}>
                                    <Box>
                                        <Typography variant="h6">Öffnungszeiten: Mo-Fr 8:00 – 16:30, Sa geschlossen</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body1">Urlaub: 24.12.2022 – 8.1.2023</Typography>
                                    </Box>

                                    
                                    
                                </Stack>
                            </Grid>
                            

                            <Grid item
                                display='flex' justifyContent='space-between' alignItems='center'>

                                <Stack direction="row" spacing={2}>
                                    <Button variant="contained" color="secondary">
                                        <NavLink to='/about' style={{textDecoration: "none"}}>
                                            <Typography color="white">Unser Service</Typography>
                                        </NavLink>
                                    </Button>
                                    <Button variant="contained" color="secondary">
                                        <NavLink to='/contact' style={{textDecoration: "none"}}>
                                            <Typography color="white">Kontakt</Typography>
                                        </NavLink>
                                    </Button>
                                    <IconButton href="tel: +43 1 4704203">
                                        <LocalPhoneIcon />
                                        01 / 4704203
                                    </IconButton>
                                    <Box>
                                        <IconButton href='mailto:textilreinigung.1180@inode.at'>
                                            <ForwardToInboxIcon />

                                            email
                                        </IconButton>
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Toolbar>
            </AppBar>

        </Box>
    )
}

export default NewNavBarApp