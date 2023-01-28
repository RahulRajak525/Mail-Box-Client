import React from "react";
// import {
//   AiFillGithub,
//   AiFillInstagram,
//   AiFillYoutube,
//   AiOutlineArrowUp,
// } from "react-icons/ai";

import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <AppBar
      // sx={{ position: "relative", top: "8rem" }}
      position="sticky"
      color="inherit"
    //   sx={{ top: "50px", bottomMargin: "25px" }}
    >
      <Toolbar>
        {/* <Box sx={{ flexGrow: 2 }} /> */}
        {/* <Box sx={{ display: { xs: "none", md: "flex", align: "center" } }}> */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "auto",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="Secondary"
            mx={2}
          >
            Contact me
          </Typography>
          <Box>
            <IconButton
              size="large"
              color="inherit"
              href="https://instagram.com/rkraj525?igshid=ZDdkNTZiNTM="
              target="blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              href="https://github.com/RahulRajak525"
              target="blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/rahul-kumar-rajak-4b5a71174"
              target="blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.facebook.com/profile.php?id=100003691198033&sk=about"
              target="blank"
            >
              <FacebookIcon />
            </IconButton>
          </Box>
          <Typography noWrap component="div" variant="h7">
            @ All Right Reserved
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
    // {/* </AppBar> */}
  );
};

export default Footer;
