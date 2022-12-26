import {
  Box,
  AppBar,
  Container,
  Toolbar,
  Grid,
  Icon,
  Button,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
//material icons
import DiamondIcon from "@mui/icons-material/Diamond";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import HomeIcon from '@mui/icons-material/Home';

import React, { FC } from "react";
import { Stack } from "@mui/system";
import { NavLink } from "react-router-dom";
//logo
import Logo from '../Logo'
import HomePage from "../../pages/home";
const NavBarApp: FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 9 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item >
                <Box margin={2}>
                <Button variant="contained" color="secondary" size="large" >
                    <Link href="/" underline="none">
                      <Typography color='white'>Home</Typography>
                    </Link>
                </Button>
                </Box>  
              </Grid>
              <Grid item>
                <Typography variant="body2">Öffnungszeiten: Mo-Fr 8:00 – 16:30, Sa geschlossen</Typography>
                <Typography variant="body2">Urlaub: 24.12.2022 – 8.1.2023</Typography>
              </Grid>
              <Grid item >
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="secondary">
                    <NavLink style={{ textDecoration: "none" }} to="/about">
                      <Typography color="white">Unser Service</Typography>
                    </NavLink>
                  </Button>
                  <Button variant="contained" color="secondary">
                    <NavLink style={{ textDecoration: "none" }} to="/contact">
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
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBarApp;
