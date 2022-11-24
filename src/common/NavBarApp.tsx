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
} from "@mui/material";
//material icons
import DiamondIcon from "@mui/icons-material/Diamond";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

import React, { FC } from "react";
import { Stack } from "@mui/system";
import { Link, NavLink } from "react-router-dom";
//logo
import Logo from './Logo'
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
                <Button type="submit">
                  <Link to='/'>
                    <Logo />
                  </Link>
                </Button>
              </Grid>
              <Grid item >
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="secondary">
                    <NavLink style={{ textDecoration: "none" }} to="/about">
                      <Typography color="white">Über uns</Typography>
                    </NavLink>
                  </Button>
                  <Button variant="contained" color="secondary">
                    <NavLink style={{ textDecoration: "none" }} to="/contact">
                      <Typography color="white">Kontact</Typography>
                    </NavLink>
                  </Button>
                  <IconButton href="tel:43232323">
                    <LocalPhoneIcon />
                    +  01 4704203
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
