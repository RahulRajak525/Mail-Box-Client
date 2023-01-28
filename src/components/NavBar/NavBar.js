import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import CalculateIcon from "@mui/icons-material/Calculate";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserDatails,
  userAction,
  userActions,
} from "../Slices/userSlice";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
// import { CSVLink } from "react-csv";
import { createTheme, styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const NavBar = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.user.userDetails);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(userDetails);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    marginRight: "15px",
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  // sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOutClickHandler = () => {
    dispatch(userAction.logOut());
  };

  return (
    <div>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              alt="Remy Sharp"
              src="gmail.jpg"
              sx={{ width: 70, height: 50, background: "none" }}
              variant="rounded"
            />
            <Link style={linkStyle} to="/">
              <Typography
                variant="h5"
                noWrap
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 1000,
                  letterSpacing: "0.3rem",
                  fontSize: "1.7rem",
                  marginLeft: 4,
                }}
              >
                Rmail
              </Typography>
            </Link>
            <Box
              sx={{
                flexGrow: 1,
                display: { md: "flex" },
                justifyContent: "right",
              }}
            >
              {isLoggedIn && (
                <Link style={linkStyle} to="/emailBox">
                  Email Box
                </Link>
              )}

              {!isLoggedIn ? (
                <Link to="/signIn" style={linkStyle}>
                  Sign In
                </Link>
              ) : (
                <Link
                  onClick={() => {
                    dispatch(logOutClickHandler());
                  }}
                  style={linkStyle}
                >
                  LogOut
                </Link>
              )}
            </Box>
            {isLoggedIn && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {userDetails && (
                      <Avatar alt="rahul rajak" src={userDetails.photoUrl} />
                    )}
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px", color: "ActiveBorder" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Typography>
                      <Link
                        style={{
                          textDecoration: "none",
                          // color: "Highlight",
                          fontWeight: "bolder",
                        }}
                        to="/profileUpdate"
                      >
                        Profile Update
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      style={{
                        textDecoration: "none",
                        // color: "Highlight",
                        fontWeight: "bolder",
                      }}
                      to="/userProfile"
                    >
                      my account
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      style={{
                        textDecoration: "none",
                        // color: "Highlight",
                        fontWeight: "bolder",
                      }}
                      onClick={logOutClickHandler}
                    >
                      LogOut
                    </Link>
                  </MenuItem>
                </Menu>

                {/* <FormControlLabel
                  control={<MaterialUISwitch sx={{ m: 1 }} />}
                  onChange={() => {
                    changeHandler();
                  }}
                  checked
                /> */}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
