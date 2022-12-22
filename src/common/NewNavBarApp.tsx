import { AppBar, Box, Button, Drawer, Grid, Hidden, IconButton, Link, Stack, Toolbar, Typography } from '@mui/material'
import React, { FC, useState } from 'react'

//menu icon
import MenuIcon from '@mui/icons-material/Menu';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import Logo from './Logo';
import logoSimple from '../../public/LogoSimple.jpeg'

const NewNavBarApp: FC<{}> = () => {

    const [open, setOpen] = useState(false)

    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open)
    }


    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <Hidden only={['md', 'lg', 'xl']}>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                            <Grid item sx={{}}>
                                <Stack direction='column' spacing={2} alignItems='start'>
                                    <Box>
                                        <Typography variant="h6">Öffnungszeiten: Mo-Fr 8:00 – 16:30, Sa geschlossen</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body1">Urlaub: 24.12.2022 – 8.1.2023</Typography>
                                    </Box>
                                    <IconButton href="tel: +43 1 4704203" size='small' edge='end'>
                                        <LocalPhoneIcon />
                                        01 / 4704203
                                    </IconButton>

                                    <IconButton href='mailto:textilreinigung.1180@inode.at' size='small' edge='end' >
                                        <ForwardToInboxIcon />
                                        email
                                    </IconButton>

                                </Stack>
                            </Grid>

                            <Grid item>
                                <IconButton
                                    edge='start'
                                    size='large'
                                    aria-label='open drawer'
                                    color='inherit'
                                    onClick={toggleDrawer(true)}>
                                    <MenuIcon />
                                </IconButton>
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
                                    <Button variant='text' >
                                        <Link href='/about' underline='none'>
                                            <Typography variant='body2' >
                                                About
                                            </Typography>
                                        </Link>
                                    </Button>
                                    <Button variant='text' >
                                        <Link href='/contact' underline='none'>
                                            <Typography variant='body2'>
                                                Contact
                                            </Typography>
                                        </Link>
                                    </Button>
                                    <Button variant='text' >
                                        <Link href='/' underline='none'>
                                            <Typography variant='body2'>
                                                Home
                                            </Typography>
                                        </Link>
                                    </Button>

                                </Stack>
                            </Box>

                        </Drawer>
                    </Hidden>
                    <Hidden only={['sm', 'xs']}>
                        <Grid container justifyContent='space-between'>
                            <Grid item>
                                <IconButton LinkComponent={Link} href='/'>
                                    <Box
                                        component='img'
                                        sx={{ height: 64, }}
                                        alt='logo'
                                        src='/logoSimple.jpeg'>

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
                                        <Link href='/about' underline='none'>
                                            <Typography color="white">Unser Service</Typography>
                                        </Link>
                                    </Button>
                                    <Button variant="contained" color="secondary">
                                        <Link href='/contact' underline='none'>
                                            <Typography color="white">Kontakt</Typography>
                                        </Link>
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