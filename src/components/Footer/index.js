import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import CustomPagination from "components/CustomPagination";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
// Images
import footerLogo from "assets/images/homePage/footerlogo.png";
import { UilUsersAlt, UilMapPinAlt } from "@iconscout/react-unicons";
import bgImage from "assets/images/homePage/header_bg.jpeg";
import headerLogo from "assets/images/homePage/headerLogo.png";
import footerBg from "assets/images/homePage/beach.jpeg";
import Logo from "assets/images/homePage/Logo.svg";
import CustomSelect from "components/CustomSelect";
import CustomDateRangePicker from "components/CustomeDateRangerPicker";
import NavBar from "components/NavBar";
import {
  fetchPropertyData,
  fetchPropertyPageTexts,
  fetchPropertyPageImages,
} from "services/PropertyService";
import { useNavigate } from "react-router-dom";

function Footer() {
  const [value, setValue] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [images, setImages] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    getPropertyText();
    getPropertyImages();
  }, []);

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

  const navItems = [
    "Home",
    "Tour Packages",
    "Business Tours",
    "About Us",
    "Contact Us",
  ];

  const getPropertyText = async () => {
    // Usage
    fetchPropertyPageTexts(1)
      .then((response) => {
        const headerTexts = response?.data.reduce((acc, item) => {
          acc[item.tag] = item.text;
          return acc;
        }, {});

        setValue(headerTexts);
        // console.log("headerTextssss", headerTexts);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const getPropertyImages = () => {
    fetchPropertyPageImages(1, 1)
      .then((response) => {
        const headerImages = response?.data.reduce((acc, item) => {
          acc[item.tag] = item.imgeUrl;
          return acc;
        }, {});
        setImages(headerImages);
        // console.log("headerImages", headerImages);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

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

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    customPaging: () => <MKBox />,
    afterChange: (current) => setCurrentSlide(current),
  };

  const backgroundImages = [bgImage, footerBg, bgImage];

  return (
    <MKBox>
      <MKBox
        display="flex"
        alignItems="center"
        height="35rem"
        maxHeight="100%"
        sx={{
          backgroundImage: `url(${images?.footerImage})`,
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
            {value?.footerTitle || ""}
          </MKTypography>
          <Stack direction="row" spacing={1} mt={3}>
            <MKButton circular variant="contained" color="white" onClick = {handleTourPlanner}>
              {value?.footerButton || ""}
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
            {socials.map(({ icon, link }, key) => (
              <MKTypography
                key={link}
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
