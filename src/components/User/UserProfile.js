import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import classes from "./UserProfile.module.css";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const UserProfile = () => {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.user.userDetails);

  const btnStyle = { margin: "8px 0 " };

  //   const goToUpdateProfile=()=>{

  //   }
  return (
    <div className={classes.userprofile}>
      <div className={classes.grid}>
        <Grid>
          <Card variant="outlined" sx={{ width: 320 }}>
            <CardOverflow>
              {userDetails && (
                <AspectRatio ratio="2">
                  <img
                    //   src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                    src={userDetails.photoUrl}
                    //   srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                    loading="lazy"
                    alt="Rahul Rajak"
                    height="150px"
                    width="100%"
                  />
                </AspectRatio>
              )}

              {/* <IconButton
                aria-label="Like minimal photography"
                size="md"
                variant="solid"
                color="danger"
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  borderRadius: "50%",
                  right: "1rem",
                  bottom: 0,
                  transform: "translateY(50%)",
                }}
              >
                <Favorite />
              </IconButton> */}
            </CardOverflow>
            {userDetails.email && (
              <>
                <Typography
                  level="body2"
                  sx={{ mt: 0.5, mb: 2, margin: "auto" }}
                >
                  <Link href="#multiple-actions">
                    {userDetails.displayName}
                  </Link>
                </Typography>
                <Typography
                  level="h2"
                  sx={{ fontSize: "md", mt: 2, marginLeft: "3.5rem" }}
                >
                  <Link href="#multiple-actions" overlay underline="none">
                    {userDetails.email}
                  </Link>
                </Typography>
              </>
            )}

            <Button
              color="primary"
              variant="contained"
              fullWidth
              style={btnStyle}
              //   variant="outlined"
              onClick={() => navigate("/profileUpdate")}
            >
              Update Profile
            </Button>
          </Card>
        </Grid>
      </div>
      {/* <div className={classes.image}>
        <img src="2.jpg" width="150%" />
      </div> */}
    </div>
  );
};

export default UserProfile;
