import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import {
  Divider,
} from "@mui/material";
import footerLogo from "assets/images/homePage/footerlogo.png";
import footerImg from "assets/images/footerImg.png"
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();


  const handleNavigation = (text) => {
    switch (text) {
      case "Home":
        navigate("/home");
        break;
      case "Tour Packages":
        navigate("/pages/tour-list");
        break;
      case "Business Tours":
        navigate("/pages/mice-tours");
        break;
      case "About Us":
        navigate("/pages/about-us");
        break;
      case "Contact Us":
        navigate("/pages/contact-us");
        break;
      default:
    }
  }



  const handleTourPlanner = () => {
    navigate("pages/tour-planner")
  };
  
  const socials = [
    {
      icon: <Instagram />,
      link: "",
    },
    {
      icon: <LinkedIn />,
      link: "",
    },
    {
      icon: <TwitterIcon />,
      link: "",
    },
    {
      icon: <FacebookIcon />,
      link: "",
    },
  ];



  return (
    <MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        height="35rem"
        maxHeight="100%"
        sx={{
          backgroundImage: `url(${footerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: 0,
          borderRadius: 5,
        }}
      >
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          flexDirection="column"
          justifyContent="center"
        >
          <MKTypography
            variant="h1"
            color="white"
            mb={3}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
              fontSize: "80px",
              fontFamily: "Playfair Display, serif",
              width: "90%",
              textAlign: "center",
            })}
          >
            {"Where Will Your Journey Begin? Create your trip today."}
          </MKTypography>
          <Stack direction="row" spacing={1} mt={3}>
            <MKButton circular variant="contained" color="white" onClick = {handleTourPlanner}>
              {"Plan Your Trip"}
            </MKButton>
          </Stack>
        </Grid>
      </MKBox>

      <Grid
        container
        sx={{
          minHeight: "15rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          xs={12}
          sm="auto"
          alignItems="center"
          display={"flex"}
          justifyContent={"flex-start"}
          sx={{ marginLeft: 2 }}
        >
          <MKBox
            component="img"
            style={{ width: 120, height: 100 }}
            src={footerLogo}
            alt={"bgImage"}
            mb={2}
          />
        </Grid>

        <Grid item xs={12} sm={9} lg={7} alignContent="center">
          <Grid
            sx={({ breakpoints }) => ({
              minHeight: "2rem",
              [breakpoints.down("sm")]: {
                flexDirection: "column",
                alignItems: "center",
              },
            })}
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent={"space-evenly"}
          >
            {[
              "Home",
              "Tour Packages",
              "Business Tours",
              "About Us",
              "Contact Us",
            ].map((text, index) => (
              <React.Fragment key={text}>
                <MKTypography
                  variant="h6"
                  fontWeight="regular"
                  color="black"
                  onClick = {() => handleNavigation(text)}
                  sx={{
                    textAlign: "center",
                    fontFamily: "Playfair Display",
                    mx: 1,
                    my: { xs: 1, sm: 0 },
                    "&:hover": {
                      cursor: "pointer"
                    },
                  }}
                >
                  {text}
                </MKTypography>
                {index < 4 && (
                  <Divider
                    sx={{
                      borderColor: "black",
                      borderWidth: "2px",
                      height: "2rem", // Adjust the height
                      mx: { xs: 0, sm: 1 },
                    }}
                    orientation="vertical"
                    variant="middle"
                    flexItem
                  />
                )}
              </React.Fragment>
            ))}
          </Grid>

          <Grid
            sx={{ minHeight: "2rem", mt: 2 }}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Grid item xs={12} sm={3} textAlign="center" mb={{ xs: 2, sm: 0 }}>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Poppins" }}
              >
                hello@heavenstrails.com
              </MKTypography>
            </Grid>
            <Grid item xs={12} sm={3} textAlign="center" mb={{ xs: 2, sm: 0 }}>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Poppins" }}
              >
                +94 77 77 0 4000
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Poppins" }}
              >
                +94 37 22 8 1908
              </MKTypography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Poppins" }}
              >
                Kandanegedara Road, Weralugama,
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ fontFamily: "Poppins" }}
              >
                Kuliyapitiya, Sri Lanka
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm="auto" display="flex" justifyContent="center">
          <MKBox display="flex" alignItems="center" paddingRight="16px">
            {socials.map(({ icon, link, index }, key) => (
              <MKTypography
                key={index}
                component="a"
                href={link}
                target="_blank"
                rel="noreferrer"
                variant="h5"
                color="black"
                opacity={0.8}
                mr={key === socials.length - 1 ? 0 : 2.5}
              >
                {icon}
              </MKTypography>
            ))}
          </MKBox>
        </Grid>
      </Grid>
    </MKBox>
  );
}

export default Footer;
