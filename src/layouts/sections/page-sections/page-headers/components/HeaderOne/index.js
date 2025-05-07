import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState, useContext } from "react";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import CustomPagination from "components/CustomPagination";
import { useNavigate } from "react-router-dom";
import { Drawer, IconButton, List, ListItem, ListItemText, Box, Divider } from "@mui/material";
// Images
import { UilUsersAlt, UilMapPinAlt } from "@iconscout/react-unicons";
import bgImage from "assets/images/homePage/header_bg.jpeg";
import bgImageTwo from "assets/images/homePage/header2_bg.jpeg";
import headerLogo from "assets/images/homePage/headerLogo.png";
import footerBg from "assets/images/homePage/beach.jpeg";
import Logo from "assets/images/homePage/Logo.svg";
import CustomSelect from "components/CustomSelect";
import CustomDateRangePicker from "components/CustomeDateRangerPicker";
import NavBar from "components/NavBar";
import { fetchPropertyData, fetchPropertyPageTexts, fetchPropertyPageImages } from "services/PropertyService";
import { fetchPageDetails } from "services/TourServices";
import { CountryContext } from "../../../../../../context/CountryContext";

function HeaderOne({ headerData }) {
  const [value, setValue] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState();
  const navigate = useNavigate();
  const [pageDetails, setPageDetails] = useState({});
  const { countries, loading, selectedCountryCode } = useContext(CountryContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getPageDetails = async () => {
    fetchPageDetails().then((res) => {
      const fileteredData = res.data.filter((item) => item.country?.shortCode === selectedCountryCode);
      setPageDetails(fileteredData[0]);
      console.log(pageDetails, "Printtingggggggggggg");
    });
  };

  useEffect(() => {
    getPageDetails();
  }, []);

  useEffect(() => {
    getPageDetails();
  }, [selectedCountryCode]);

  const hello = (item) => {
    switch (item) {
      case "Destinations":
        navigate("/pages/destinations");
        return;
      case "Tour Packages":
        navigate("/pages/tour-list#");
        return;
      case "Business Tours":
        navigate("/pages/mice-tours#");
        return;
      default:
        return;
    }
  };

  // const getPropertyText = async () => {
  //   // Usage
  //   fetchPropertyPageTexts(1)
  //     .then((response) => {
  //       const headerTexts = response?.data.reduce((acc, item) => {
  //         acc[item.tag] = item.text;
  //         return acc;
  //       }, {});

  //       setValue(headerTexts);
  //       // console.log("headerTextssss", headerTexts);
  //     })
  //     .catch((error) => {
  //       console.error("Fetch failed:", error.message);
  //     });
  // };

  // const getPropertyImages = () => {
  //   fetchPropertyPageImages(1, 1)
  //     .then((response) => {
  //       const headerImages = response?.data.reduce((acc, item) => {
  //         acc[item.tag] = item.imgeUrl;
  //         return acc;
  //       }, {});
  //       setImages(headerImages);
  //       // console.log("headerImages", headerImages);
  //     })
  //     .catch((error) => {
  //       console.error("Fetch failed:", error.message);
  //     });
  // };

  useEffect(() => {
    // getPropertyText();
    // getPropertyImages();
  }, []);

  const navItems = ["Home", "Tour Packages", "Business Tours", "About Us", "Contact Us"];
  const onItemClick = (item) => {
    switch (item) {
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
        navigate("/home");
    }
  };

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

  const defaultData = [
    {
      mainHeader: bgImage,
      title: "",
    },
    {
      mainHeader: bgImageTwo,
      title: "",
    },
    {
      mainHeader: bgImage,
      title: "",
    },
  ];

  return (
    <MKBox
      position="relative"
      sx={{
        top: 10,
        marginTop: {
          xs: 0,
          sm: -10,
        },
      }}
    >
      {pageDetails && pageDetails.homePageHeaderImages ? (
        <Slider {...sliderSettings} style={{ height: "100%", width: "100%" }}>
          {pageDetails?.homePageHeaderImages.map((item, index) => (
            
            <MKBox key={index} position="relative" height="100%">
              <Grid
                container
                display="flex"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
                sx={{
                  backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
                    `linear-gradient(${rgba(gradients.dark.main, 0.5)}, ${rgba(
                      gradients.dark.state,
                      0.5
                    )}), url(${process.env.REACT_APP_BASE_URL}${item.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 5,
                  padding: { xs: 2, md: 4 },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.5)", // 🟢 50% dark overlay
                    zIndex: 1, // 🟡 below text
                    borderRadius: 4,
                  }}
                />
                <Grid
                  container
                  item
                  xs={12}
                  lg={10}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  mt={8}
                  sx={{
                    zIndex: 10,
                  }}
                >
                  <MKTypography
                    variant="h1"
                    color="white"
                    mb={3}
                    sx={({ breakpoints, typography: { size } }) => ({
                      // Base styles for all screen sizes
                      fontFamily: "Playfair Display, serif",
                      fontWeight: 400,
                      lineHeight: 1.2, // Improves readability for large text
                      wordBreak: "break-word", // Prevents overflow on small screens
                      textAlign: "center", // Optional: centers text for better aesthetics on smaller screens

                      // Extra-large screens (lg and up, 1280px+)
                      fontSize: "90px",

                      // Responsive adjustments for smaller screens
                      [breakpoints.down("lg")]: {
                        fontSize: "70px", // Slightly smaller for large screens (960px - 1280px)
                      },
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"] || "50px", // Fallback to 50px if size["3xl"] isn't defined
                      },
                      [breakpoints.down("sm")]: {
                        fontSize: "40px", // Smaller for small screens (600px and below)
                        lineHeight: 1.3, // Adjust line height for better readability
                      },
                      [breakpoints.down("xs")]: {
                        fontSize: "32px", // Even smaller for extra-small screens (e.g., < 600px)
                        textAlign: "center", // Ensure centering for very small screens
                      },

                      // Optional: Use relative units like vw for more dynamic scaling
                      // Uncomment if you'd prefer a more fluid approach
                      // fontSize: "clamp(32px, 8vw, 90px)", // Scales between 32px and 90px based on viewport width
                    })}
                  >
                    {pageDetails.homePageHeaderTitles[index]?.value || ""}
                  </MKTypography>
                  <Grid justifyContent="center">
                    <MKButton
                      circular
                      variant="outlined"
                      color="white"
                      paddingX={"20px"}
                      onClick={() => hello("Destinations")}
                    >
                      {"Destinations"}
                    </MKButton>
                    <MKButton
                      sx={{ margin: 2 }}
                      circular
                      variant="outlined"
                      color="white"
                      paddingX={"20px"}
                      onClick={() => hello("Tour Packages")}
                    >
                      {"Tour Packages"}
                    </MKButton>
                    <MKButton
                      circular
                      variant="outlined"
                      color="white"
                      paddingX={"20px"}
                      onClick={() => hello("Business Tours")}
                    >
                      {"Business Tours"}
                    </MKButton>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  lg={12}
                  alignItems="center"
                  justifyContent="space-between"
                  flexDirection={{ xs: "column", md: "row" }}
                  sx={{
                    mt: 3,
                    py: 3,
                    px: { xs: 2, md: 4 },
                    borderRadius: 6,
                    zIndex: 10,
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      width: "100%",
                      maxWidth: { xs: "100%", md: "28rem" },
                      textAlign: { xs: "center", md: "left" },
                      mb: { xs: 3, md: 0 }, // Add margin for spacing between columns in mobile view
                    }}
                  >
                    <MKTypography
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        color: "#FFFFFF",
                        position: "relative",
                        "&::before, &::after": {
                          content: '""',
                          position: "absolute",
                          width: { xs: "160%", md: "250%" }, // Adjust line length for mobile
                          height: "2px",
                          backgroundColor: "#FFFFFF",
                        },
                        "&::before": {
                          left: { xs: "-180%", md: "-150px" }, // Adjust position for mobile
                          top: "50%",
                          transform: "translateY(-50%)",
                        },
                        "&::after": {
                          right: { xs: "-180%", md: "-150px" }, // Adjust position for mobile
                          top: "50%",
                          transform: "translateY(-50%)",
                        },
                        fontFamily: "Playfair Display, serif",
                        fontSize: "17px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Forbes
                    </MKTypography>
                    <MKTypography
                      variant="h1"
                      color="white"
                      mb={3}
                      sx={({ breakpoints, typography: { size } }) => ({
                        [breakpoints.down("md")]: {
                          fontSize: size["3xl"],
                        },
                        fontSize: "20px",
                        fontFamily: "Playfair Display, serif",
                        paddingLeft: 2,
                        textAlign: "center",
                      })}
                    >
                      {`"Sri Lanka is one of the Must-Visit Travel Destinations For Summer 2024"`}
                    </MKTypography>
                    <MKTypography
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        color: "#FFFFFF",
                        position: "relative",
                        "&::before, &::after": {
                          content: '""',
                          position: "absolute",
                          width: { xs: "7%", md: "28%" }, // Adjust line length for mobile
                          height: "2px",
                          backgroundColor: "#FFFFFF",
                        },
                        "&::before": {
                          left: { xs: "-10%", md: "-32%" }, // Adjust position for mobile
                          top: "50%",
                          transform: "translateY(-50%)",
                        },
                        "&::after": {
                          right: { xs: "-10%", md: "-32%" }, // Adjust position for mobile
                          top: "50%",
                          transform: "translateY(-50%)",
                        },
                        fontFamily: "Playfair Display, serif",
                        fontSize: "17px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Kathleen Peddicord, Forbes
                    </MKTypography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      maxWidth: { xs: "100%", md: "30rem" },
                      borderRadius: 5,
                      borderWidth: "1px",
                      padding: 2,
                      border: "solid",
                      borderColor: "#FFFFFF",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    <MKTypography
                      sx={{
                        display: "inline-flex",
                        color: "#FFFFFF",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      {"Sigiriya"}
                    </MKTypography>
                    <MKTypography
                      variant="h1"
                      color="white"
                      mb={3}
                      sx={({ breakpoints, typography: { size } }) => ({
                        [breakpoints.down("md")]: {
                          fontSize: size["3xl"],
                        },
                        fontSize: "20px",
                        fontFamily: "Playfair Display, serif",
                      })}
                    >
                      {"A timeless fortress in the sky, where history meets the clouds."}
                    </MKTypography>
                    <Divider sx={{ opacity: 1, backgroundColor: "#FFFFFF" }} variant="middle" />
                    <MKButton
                      sx={{
                        width: {
                          xs: "60%",
                          md: "40%",
                          lg: "40%",
                          padding: 0,
                          margin: 0,
                        },
                      }}
                      circular
                      variant="outlined"
                      color="white"
                    >
                      {"View Package"}
                    </MKButton>
                  </Grid>
                </Grid>
              </Grid>
            </MKBox>
          ))}
        </Slider>
      ) : (
        <Slider {...sliderSettings} style={{ height: "100%", width: "100%" }}>
          {defaultData.map((item, index) => (
            <MKBox key={index} position="relative" height="100%">
              <Grid
                container
                display="flex"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
                sx={{
                  backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
                    `linear-gradient(${rgba(gradients.dark.main, 0.5)}, ${rgba(
                      gradients.dark.state,
                      0.5
                    )}), url(${item.mainHeader})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: 5,
                  padding: { xs: 2, md: 4 },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.5)", 
                    zIndex: 1, 
                    borderRadius: 4,
                  }}
                />
                <Grid
                  container
                  item
                  xs={12}
                  lg={10}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  mt={8}
                  sx={{
                    zIndex: 10,
                  }}
                >
                  <MKTypography
                    variant="h1"
                    color="white"
                    mb={3}
                    sx={({ breakpoints, typography: { size } }) => ({
                      // Base styles for all screen sizes
                      fontFamily: "Playfair Display, serif",
                      fontWeight: 400,
                      lineHeight: 1.2, // Improves readability for large text
                      wordBreak: "break-word", // Prevents overflow on small screens
                      textAlign: "center", // Optional: centers text for better aesthetics on smaller screens

                      // Extra-large screens (lg and up, 1280px+)
                      fontSize: "90px",

                      // Responsive adjustments for smaller screens
                      [breakpoints.down("lg")]: {
                        fontSize: "70px", // Slightly smaller for large screens (960px - 1280px)
                      },
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"] || "50px", // Fallback to 50px if size["3xl"] isn't defined
                      },
                      [breakpoints.down("sm")]: {
                        fontSize: "40px", // Smaller for small screens (600px and below)
                        lineHeight: 1.3, // Adjust line height for better readability
                      },
                      [breakpoints.down("xs")]: {
                        fontSize: "32px", // Even smaller for extra-small screens (e.g., < 600px)
                        textAlign: "center", // Ensure centering for very small screens
                      },

                      // Optional: Use relative units like vw for more dynamic scaling
                      // Uncomment if you'd prefer a more fluid approach
                      // fontSize: "clamp(32px, 8vw, 90px)", // Scales between 32px and 90px based on viewport width
                    })}
                  >
                    {"Sri Lanka: Your Summer Escape in Paradise Awaits"}
                  </MKTypography>
                  <Grid justifyContent="center">
                    <MKButton
                      circular
                      variant="outlined"
                      color="white"
                      paddingX={"20px"}
                      onClick={() => hello("Destinations")}
                    >
                      {"Destinations"}
                    </MKButton>
                    <MKButton
                      sx={{ margin: 2 }}
                      circular
                      variant="outlined"
                      color="white"
                      paddingX={"20px"}
                      onClick={() => hello("Tour Packages")}
                    >
                      {"Tour Packages"}
                    </MKButton>
                    <MKButton
                      circular
                      variant="outlined"
                      color="white"
                      paddingX={"20px"}
                      onClick={() => hello("Business Tours")}
                    >
                      {"Business Tours"}
                    </MKButton>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  lg={12}
                  alignItems="center"
                  justifyContent="space-between"
                  flexDirection={{ xs: "column", md: "row" }}
                  sx={{
                    mt: 3,
                    py: 3,
                    px: { xs: 2, md: 4 },
                    borderRadius: 6,
                    zIndex: 10,
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={3}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      width: "100%",
                      maxWidth: { xs: "100%", md: "28rem" },
                      textAlign: { xs: "center", md: "left" },
                      mb: { xs: 3, md: 0 }, // Add margin for spacing between columns in mobile view
                    }}
                  >
                    <MKTypography
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        color: "#FFFFFF",
                        position: "relative",
                        "&::before, &::after": {
                          content: '""',
                          position: "absolute",
                          width: { xs: "160%", md: "250%" }, // Adjust line length for mobile
                          height: "2px",
                          backgroundColor: "#FFFFFF",
                        },
                        "&::before": {
                          left: { xs: "-180%", md: "-150px" }, // Adjust position for mobile
                          top: "50%",
                          transform: "translateY(-50%)",
                        },
                        "&::after": {
                          right: { xs: "-180%", md: "-150px" }, // Adjust position for mobile
                          top: "50%",
                          transform: "translateY(-50%)",
                        },
                        fontFamily: "Playfair Display, serif",
                        fontSize: "17px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Forbes
                    </MKTypography>
                    <MKTypography
                      variant="h1"
                      color="white"
                      mb={3}
                      sx={({ breakpoints, typography: { size } }) => ({
                        [breakpoints.down("md")]: {
                          fontSize: size["3xl"],
                        },
                        fontSize: "20px",
                        fontFamily: "Playfair Display, serif",
                        paddingLeft: 2,
                        textAlign: "center",
                      })}
                    >
                      {`"Sri Lanka is one of the Must-Visit Travel Destinations For Summer 2024"`}
                    </MKTypography>
                    <MKTypography
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        color: "#FFFFFF",
                        position: "relative",
                        "&::before, &::after": {
                          content: '""',
                          position: "absolute",
                          width: { xs: "7%", md: "28%" }, // Adjust line length for mobile
                          height: "2px",
                          backgroundColor: "#FFFFFF",
                        },
                        "&::before": {
                          left: { xs: "-10%", md: "-32%" }, // Adjust position for mobile
                          top: "50%",
                          transform: "translateY(-50%)",
                        },
                        "&::after": {
                          right: { xs: "-10%", md: "-32%" }, // Adjust position for mobile
                          top: "50%",
                          transform: "translateY(-50%)",
                        },
                        fontFamily: "Playfair Display, serif",
                        fontSize: "17px",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Kathleen Peddicord, Forbes
                    </MKTypography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={3}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      maxWidth: { xs: "100%", md: "30rem" },
                      borderRadius: 5,
                      borderWidth: "1px",
                      padding: 2,
                      border: "solid",
                      borderColor: "#FFFFFF",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    <MKTypography
                      sx={{
                        display: "inline-flex",
                        color: "#FFFFFF",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      {"Sigiriya"}
                    </MKTypography>
                    <MKTypography
                      variant="h1"
                      color="white"
                      mb={3}
                      sx={({ breakpoints, typography: { size } }) => ({
                        [breakpoints.down("md")]: {
                          fontSize: size["3xl"],
                        },
                        fontSize: "20px",
                        fontFamily: "Playfair Display, serif",
                      })}
                    >
                      {"A timeless fortress in the sky, where history meets the clouds."}
                    </MKTypography>
                    <Divider sx={{ opacity: 1, backgroundColor: "#FFFFFF" }} variant="middle" />
                    <MKButton
                      sx={{
                        width: {
                          xs: "60%",
                          md: "40%",
                          lg: "40%",
                          padding: 0,
                          margin: 0,
                        },
                      }}
                      circular
                      variant="outlined"
                      color="white"
                    >
                      {"View Package"}
                    </MKButton>
                  </Grid>
                </Grid>
              </Grid>
            </MKBox>
          ))}
        </Slider>
      )}

      <CustomPagination
        currentSlide={currentSlide} // You will need to update this with actual slide index from Slider
        slideCount={3} // Update this with the total number of slides
      />
      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            width: "240px",
            boxSizing: "border-box",
          },
        }}
      >
        <IconButton onClick={handleDrawerToggle} sx={{ margin: 2, justifyContent: "flex-end" }}>
          <CloseIcon />
        </IconButton>
        <List>
          {navItems.map((text) => (
            <ListItem button key={text}>
              <ListItemText
                sx={{ marginY: 1, marginLeft: 1 }}
                primary={text}
                onClick={() => onItemClick(text)}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Mobile Menu Button */}
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          display: { xs: "block", lg: "none" },
          position: "fixed",
          zIndex: 1200,
          borderRadius: "10%",
          top: "16px",
          right: "16px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 1)",
          },
        }}
      >
        <MenuIcon />
      </IconButton>
    </MKBox>
  );
}

export default HeaderOne;
