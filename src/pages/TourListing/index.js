import {
  UilBedDouble,
  UilPlaneDeparture,
  UilTicket,
  UilUtensils,
} from "@iconscout/react-unicons";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography
} from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import FAQs from "components/FAQs";
import Footer from "components/Footer";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import NavBar from "components/NavBar";
import { TourListingPage } from "constants/images";
import { PageIDs } from "constants/pageId";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchPropertyPageImages,
  fetchPropertyPageTexts,
} from "services/PropertyService";
import { fetchTourPackages, fetchTourListings } from "services/TourServices";
import { ReactComponent as LiBeach } from "../../assets/icons/li_beach.svg";
import { iconMappings } from "constants/icons";

function TourListing() {
  const navigate = useNavigate();
  const [pageTexts, setPageTexts] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [roundTours, setRoundTours] = useState([]);
  const [dayTours, setDayTours] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState();


  const handleListingSelection = (propertyCode, tpId) => {
    navigate(`/pages/tour-details#${propertyCode}#${tpId}`)
  }

  const getPropertyText = async () => {
    // Usage
    fetchPropertyPageTexts(PageIDs.TourListing)
      .then((response) => {
        const headerTexts = response?.data.reduce((acc, item) => {
          acc[item.tag] = item.text;
          return acc;
        }, {});
        console.log("header    Textssss", headerTexts);
        setPageTexts(headerTexts);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const getPropertyImages = () => {
    fetchPropertyPageImages(PageIDs.TourListing, 1)
      .then((response) => {
        const headerImages = response?.data.reduce((acc, item) => {
          acc[item.tag] = item.imgeUrl;
          return acc;
        }, {});
        setImages(headerImages);
        console.log("headerImages", headerImages);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const getTourPackages = async () => {
    // Usage
    fetchTourListings().then((res) => {
        
  // Separate round tours and day tours
  const roundTours = [];
  const dayTours = [];

  res.data.forEach((tour) => {
    if (tour.tourDetail && tour.tourDetail.tourType === "Round") {
      roundTours.push(tour);
    } else {
      dayTours.push(tour);
    }
  });
     setRoundTours(roundTours);
     setDayTours(dayTours);
    }).catch((error) => {
      console.error("Fetch failed:", error.message);
    });;
  };

  useEffect(() => {
    getPropertyText();
    getPropertyImages();
    getTourPackages();
  }, []);

  const btnArray = [
    {
      title: pageTexts?.headerButton1,
    },
  ];

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBar />
      <div style={{ padding: 15 }}>
        <HeaderTwo
          buttonArray={btnArray}
          title={pageTexts?.headerTitle}
          backgroundImage={TourListingPage.Header}
          pageId={PageIDs.TourListing}
        />
      </div>
      {/* Explore our travel Packages */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          marginBottom: "40px",
          backgroundColor: "#FEFDF5",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            item
            xs={12}
            lg={8}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton circular variant="outlined" color="black">
                {pageTexts?.section1Button}
              </MKButton>
            </Stack>
            <MKTypography
              variant="h1"
              color="black"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                fontFamily: "Playfair Display, serif",
                fontSize: "60px",
                fontWeight: 400,
              })}
            >
              {pageTexts?.section1Title}
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              {pageTexts?.section1Description}
            </MKTypography>
          </Grid>
        </Container>
        <Grid container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "90%",
              margin: "0 auto",
              padding: 2,
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              {roundTours.map((item, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4} // Adjusted for a 3-column layout
                  sx={{ flexShrink: 0 }}
                >
                  <Card
                    onClick = {() => handleListingSelection(item.propertyCode, item.tpId)}
                    sx={{
                      maxHeight: "745px",
                      boxShadow: "none",
                      backgroundColor: "#FEFDF5",
                      borderWidth: 1,
                      borderColor: "#C9C5BA",
                      display: "flex",
                      flexDirection: "column",
                      "&:hover": {
                        backgroundColor: "#EEECE2",
                        "& .hover-button": {
                          backgroundColor: "#AF4D06",
                          color: "#FEFDF5",
                        },
                        "& .hover-icon": {
                          color: "#929E03",
                        },
                        "& .hover-svg path, & .hover-svg line, & .hover-svg rect, & .hover-svg circle":
                          {
                            stroke: "#929E03",
                          },
                      },
                    }}
                  >
                    <CardActionArea
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height={"250px"}
                        image={process.env.REACT_APP_BASE_URL + item.thumbnail?.url}
                        sx={{
                          objectFit: "cover",
                          width: "100%",
                          margin: 0,
                          padding: 0,
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0,
                        }}
                        alt="SVG Image"
                      />
                      <CardContent sx={{ flex: 1, padding: 1 }}>
                        <MKButton
                          className="hover-button"
                          style={{ marginTop: "5px", marginBottom: "5px" }}
                          size="small"
                          circular
                          variant="outlined"
                          color="black"
                        >
                        {item.days} Days
                        </MKButton>
                        <MKButton
                                className="hover-button"
                                sx={{
                                  marginLeft: "5px",
                                  marginTop: "5px",
                                  borderWidth: 1,
                                  borderColor: "#C9C5BA",
                                }}
                                size="small"
                                circular
                                variant="outlined"
                                color="black"
                              >
                                {item.nights} Nights
                          </MKButton>
                        <Grid container alignItems="center">
                          <Typography
                            sx={{
                              fontFamily: "Playfair Display, serif",
                              fontSize: "28px",
                              fontWeight: 400,
                              lineHeight: "100%",
                            }}
                            variant="h5"
                          >
                            {item?.title}
                          </Typography>
                        </Grid>
                        <Divider
                          variant="middle"
                          sx={{
                            backgroundColor: "##C9C5BA",
                            height: "2px",
                            margin: 1,
                          }}
                        />
                              <Grid container alignItems="center">
                                {item.itineraryLocations &&
                                  item.itineraryLocations.length > 0 &&
                                  [...item.itineraryLocations]
                                    .sort((a, b) => a.order - b.order)
                                    .map((location, index, array) => (
                                      <Grid
                                        display="flex"
                                        alignItems="center"
                                        flexDirection="row"
                                        key={location.id}
                                      >
                                        <MKTypography variant="subtitle2">
                                          {`${location.location} ${
                                            location.nights > 0 ? ` (${location.nights}N)` : ""
                                          }`}
                                        </MKTypography>
                                        {index < array.length - 1 && (
                                          <Icon
                                            sx={{
                                              fontWeight: "bold",
                                              marginRight: 0.5,
                                              marginLeft: 0.5,
                                            }}
                                          >
                                            arrow_forward
                                          </Icon>
                                        )}
                                      </Grid>
                                    ))}
                              </Grid>
                        <Divider
                          variant="middle"
                          sx={{
                            backgroundColor: "##C9C5BA",
                            height: "2px",
                            margin: 1,
                          }}
                        />
                                {item.icons &&
                                item.icons.length > 0 &&
                                item.icons.map((iconItem) => (
                                  <React.Fragment key={iconItem.id}>
                                    {iconMappings[iconItem.icon.toLowerCase()] || <span>Unknown Icon</span>}
                                  </React.Fragment>
                                ))} 
                        <Divider
                          variant="middle"
                          sx={{
                            backgroundColor: "##C9C5BA",
                            height: "2px",
                            margin: 1,
                          }}
                        />
                        <MKTypography variant="subtitle2">
                          Pricing starts at
                        </MKTypography>
                        <Grid container display={"flex"} alignItems="center">
                          <MKTypography
                            sx={{
                              fontWeight: "700",
                              marginRight: 1,
                              fontFamily: "Playfair Display, serif",
                              fontSize: "20px",
                            }}
                            variant="body2"
                            color="text.secondary"
                          >
                           {item?.currency?.currency} {item?.startingPrice}

                          </MKTypography>
                          <MKTypography
                            variant="subtitle2"
                            color="text.secondary"
                            mt={0.9}
                          >
                            + taxes and charges
                          </MKTypography>
                        </Grid>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Discover Sri Lanka Through Our Travelers' Eyes SECTION */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          marginBottom: "40px",
          backgroundColor: "#EEECE2",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            item
            xs={12}
            lg={8}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton circular variant="outlined" color="black">
                {pageTexts?.section2Button}
              </MKButton>
            </Stack>
            <MKTypography
              variant="h1"
              color="black"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                fontFamily: "Playfair Display, serif",
                fontSize: "60px",
                fontWeight: 400,
              })}
            >
              {pageTexts?.section2Title}
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              {pageTexts?.section2Description}
            </MKTypography>
          </Grid>
        </Container>
        <Grid container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "90%",
              margin: "0 auto",
              padding: 2,
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              {dayTours && dayTours.length > 0
                ? dayTours.map((item, index) => (
                    <Grid
                      item
                      key={index}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={4} // Adjusted for a 3-column layout
                      sx={{ flexShrink: 0 }}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          boxShadow: "none",
                          backgroundColor: "#EEECE2",
                          borderWidth: 1,
                          borderColor: "#C9C5BA",
                          display: "flex",
                          flexDirection: "column",
                          "&:hover": {
                            backgroundColor: "#FEFDF5",
                            "& .hover-icon": {
                              color: "#929E03",
                            },
                            "& .hover-svg path, & .hover-svg line, & .hover-svg rect, & .hover-svg circle":
                              {
                                stroke: "#929E03",
                              },
                          },
                        }}
                      >
                        <CardActionArea
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          onClick={() => navigate("/pages/tour-details")}
                        >
                          <CardMedia
                            component="img"
                            height={"300px"}
                            image={process.env.REACT_APP_BASE_URL+ item.thumbnail?.url}
                            sx={{
                              objectFit: "cover",
                              width: "100%",
                              margin: 0,
                              padding: 0,
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                            alt="SVG Image"
                          />
                          <CardContent sx={{ flex: 1, padding: 1 }}>
                              <MKButton
                                className="hover-button"
                                sx={{
                                  marginTop: "5px",
                                  borderWidth: 1,
                                  borderColor: "#C9C5BA",
                                }}
                                size="small"
                                circular
                                variant="outlined"
                                color="black"
                              >
                                {item.days} Days
                              </MKButton>
                              <MKButton
                                className="hover-button"
                                sx={{
                                  marginLeft: "5px",
                                  marginTop: "5px",
                                  borderWidth: 1,
                                  borderColor: "#C9C5BA",
                                }}
                                size="small"
                                circular
                                variant="outlined"
                                color="black"
                              >
                                {item.nights} Nights
                              </MKButton>

                            <Grid container alignItems="center">
                              <Typography
                                sx={{
                                  fontFamily: "Playfair Display, serif",
                                  fontSize: "28px",
                                  fontWeight: 400,
                                  lineHeight: "100%",
                                }}
                                variant="h5"
                              >
                                {item?.title}
                              </Typography>
                            </Grid>
                            <Divider
                              variant="middle"
                              sx={{
                                backgroundColor: "##C9C5BA",
                                height: "2px",
                                margin: 1,
                              }}
                            />
                              <Grid container alignItems="center">
                                {item.itineraryLocations &&
                                  item.itineraryLocations.length > 0 &&
                                  [...item.itineraryLocations]
                                    .sort((a, b) => a.order - b.order)
                                    .map((location, index, array) => (
                                      <Grid
                                        display="flex"
                                        alignItems="center"
                                        flexDirection="row"
                                        key={location.id}
                                      >
                                        <MKTypography variant="subtitle2">
                                          {`${location.location} ${
                                            location.nights > 0 ? ` (${location.nights}N)` : ""
                                          }`}
                                        </MKTypography>
                                        {index < array.length - 1 && (
                                          <Icon
                                            sx={{
                                              fontWeight: "bold",
                                              marginRight: 0.5,
                                              marginLeft: 0.5,
                                            }}
                                          >
                                            arrow_forward
                                          </Icon>
                                        )}
                                      </Grid>
                                    ))}
                              </Grid>
                            <Divider
                              variant="middle"
                              sx={{
                                backgroundColor: "##C9C5BA",
                                height: "2px",
                                margin: 1,
                              }}
                            />
                              {item.icons &&
                                item.icons.length > 0 &&
                                item.icons.map((iconItem) => (
                                  <React.Fragment key={iconItem.id}>
                                    {iconMappings[iconItem.icon.toLowerCase()] || <span>Unknown Icon</span>}
                                  </React.Fragment>
                                ))}
                            <Divider
                              variant="middle"
                              sx={{
                                backgroundColor: "##C9C5BA",
                                height: "2px",
                                margin: 1,
                              }}
                            />
                            <MKTypography variant="subtitle2">
                              Pricing starts at
                            </MKTypography>
                            <Grid
                              container
                              display={"flex"}
                              alignItems="center"
                            >
                              <MKTypography
                                sx={{
                                  fontWeight: "700",
                                  marginRight: 1,
                                  fontFamily: "Playfair Display, serif",
                                  fontSize: "20px",
                                }}
                                variant="body2"
                                color="text.secondary"
                              >
                                   {item?.currency?.currency} {item?.startingPrice}
                              </MKTypography>
                              <MKTypography
                                variant="subtitle2"
                                color="text.secondary"
                                mt={0.9}
                              >
                                + taxes and charges
                              </MKTypography>
                            </Grid>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))
                : null}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Your Questions Answered SECTION */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          marginBottom: "40px",
          backgroundColor: "#FEFDF5",
          margin: 0,
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            item
            xs={12}
            lg={8}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton circular variant="outlined" color="black">
                {pageTexts?.section3Button}
              </MKButton>
            </Stack>
              <MKTypography
                variant="h1"
                color="black"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                  [breakpoints.down("sm")]: {
                    fontSize: size["xl"],
                  },
                  fontFamily: "Playfair Display, serif",
                  fontSize: "60px",
                  fontWeight: 400,
                  textAlign: "center",
                })}
              >
                {pageTexts?.section3Title || ""}
              </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              {pageTexts?.section3Description}
            </MKTypography>
          </Grid>
        </Container>

        <FAQs title="TourListing" />
      </Grid>
      <Footer />
    </div>
  );
}

export default TourListing;
