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

import React, { FC } from "react";
import { Stack } from "@mui/system";
import { NavLink } from "react-router-dom";

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
                <Icon>
                  <DiamondIcon />
                </Icon>
              </Grid>
              <Grid item >
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="secondary">
                    <NavLink style={{ textDecoration: "none" }} to="/about">
                      <Typography color="white">About</Typography>
                    </NavLink>
                  </Button>
                  <Button variant="contained" color="secondary">
                    <NavLink style={{ textDecoration: "none" }} to="/contact">
                      <Typography color="white">Contact</Typography>
                    </NavLink>
                  </Button>
                  <IconButton href="tel:43232323">
                    <LocalPhoneIcon />
                    +43232323
                  </IconButton>
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
