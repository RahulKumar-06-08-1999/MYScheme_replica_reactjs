import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../../images/logo_bihar.png";
import SearchIcon from "@mui/icons-material/Search";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import MenuIcon from "@mui/icons-material/Menu";
import "../../styles/HeaderStyles.css";
import { Link } from "react-router-dom";



const Header = () => {


  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img
          src={Logo}
          alt="logo"
          height={"50"}
          width="60"
          style={{ marginRight: "10px" }}
        />
      </Typography>
      <Divider />
      <Button variant="contained" color="success" endIcon={<DoubleArrowIcon />}>
        Sign in
      </Button>
    </Box>
  );


  return (
    <>
      <Box>
        <AppBar
          component={"nav"}
          sx={{
            bgcolor: "rgb(229,255,233)",
            // background:
            //   " linear-gradient(90deg, rgba(230,248,235,1) 0%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 100%)",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{
                // fontWeight:100,
                color: "green",
                display: "flex",
                alignItems: "center",
                // justifyContent: 'center',
                flexGrow: 1,
                textAlign: "center", // Center text
              }}
            >
              <img
                src={Logo}
                alt="logo"
                height={"50"}
                width="60"
                style={{ marginRight: "10px" }}
              />
              <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
               MySchemeReplica
              </Link>
            </Typography>
            <Stack direction="row" spacing={47} alignItems="center" justifyContent="center">
              <Stack>
                <TextField
                  label="Search"
                  id="search"
                  // sx={{ borderRadius:"10px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {" "}
                        <IconButton
                          aria-label="seacrh"
                          // onClick={handleClickShowPassword}
                          // onMouseDown={handleMouseDownPassword}
                        >
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <Stack>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Button
                    variant="contained"
                    color="success"
                    endIcon={<DoubleArrowIcon />}
                    style={{ color: "white" }}
                  >
                    <Link to='/signup' style={{ textDecoration: 'none', color: 'inherit' }}>
                    Sign in
                    </Link>
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
