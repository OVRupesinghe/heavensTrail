import React, { useState, useEffect, useRef } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation } from "react-router-dom";
import {
  UilArrowUpRight,
} from "@iconscout/react-unicons";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Typography,
  Rating,
} from "@mui/material";
import Footer from "components/Footer";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";
import { fetchDestinationDetail, fetchTourListings, fetchFAQs } from "services/TourServices";
import { useParams, useNavigate } from "react-router-dom";
import { iconMappings } from "../../constants/icons";
import { UilAngleLeft, UilAngleRight } from "@iconscout/react-unicons";
import NavBar from "components/NavBar";
import FloatingWhatsApp from "components/FloatingWhatsapp";
import FAQs from "components/FAQs";

function DestinationDetails() {

  const location = useLocation();
  const { state } = location;
  const [isExpaned, setIsExpaned] = useState(true);
  const [tourPackages, setTourPackages] = useState([]);
  const containerRefs = useRef([]);
  const [destinationCity, setDestinationCity] = useState("");


  const [destinationData, setDestinationData] = useState({});
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    getDestinationDetails();
    getFaq();
  }, []);

  const handleClick = (detailID) => {
    navigate(`/pages/tour-details/` + detailID);
  };

  const getFaq = async () => {
    fetchFAQs().then((res) => {
      setFaq(res.data);
    });
  };
  const viewAllTours = () => {
    navigate(`/pages/tour-list/`);
  };
  const getTourPackages = async () => {
    // Usage
    fetchTourListings().then((res) => {
      const packages = res.data;
      const filtered = packages.filter((pkg) =>
        pkg.itineraryLocations.some((loc) => loc.location.toLowerCase() === destinationCity.toLowerCase())
      );
      setTourPackages(filtered);
    });
  };

  useEffect(() => {
    getTourPackages();
  }, [destinationData, destinationCity]);


  const getDestinationDetails = async () => {
    fetchDestinationDetail(detailId)
      .then((res) => {
        setDestinationData(res.data);
        console.log(res.data)
        setDestinationCity(res.data.city?.name || "");
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
   
  };


  const CustomCard = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
      <Grid>
        <Grid
          sx={{
            padding: 2,
            backgroundColor: "#FEFDF5",
            borderRadius: 5,
            width: "100%",
          }}
        >
          <Grid
            sx={{
              border: "solid",
              borderWidth: 1,
              borderColor: "#C9C5BA",
              padding: 1,
              borderRadius: "15px",
            }}
          >
            <Card
              sx={({ breakpoints }) => ({
                display: "flex",
                flexDirection: "row",
                borderRadius: "15px",
                boxShadow: "none",
                backgroundColor: "#FEFDF5",
                flex: 1,
                [breakpoints.down("sm")]: {
                  flexDirection: "column",
                  alignItems: "center",
                },
              })}
            >
              <CardMedia
                component="img"
                alt="Image"
                image={process.env.REACT_APP_BASE_URL + item?.thumbnail?.url}
                title="title"
                sx={({ breakpoints }) => ({
                  borderRadius: "15px",
                  width: "270px",
                  height: "270px",
                  margin: 0,
                  [breakpoints.down("sm")]: {
                    width: "100%",
                    height: "auto",
                  },
                })}
              />

              <CardContent
                sx={({ breakpoints }) => ({
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignSelf: "center",
                  backgroundColor: "#FEFDF5",
                  flex: 1,
                  minHeight: "270px",
                  [breakpoints.down("sm")]: {
                    height: "auto",
                  },
                })}
              >
                <Grid
                  container
                  display="flex"
                  flexDirection="row"
                  lg={12}
                  sx={{
                    justifyContent: "space-between",
                  }}
                >
                  <MKTypography
                    variant="h1"
                    color="black"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                      },
                      fontFamily: "Playfair Display, serif",
                      fontSize: "25px",
                      fontWeight: 400,
                    })}
                  >
                    {item?.title}
                  </MKTypography>
                  <Grid display="flex" flexDirection="row" sx={{ alignItems: "center" }}>
                    <MKTypography
                      color="black"
                      sx={{
                        fontSize: "0.8rem",
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: "30px",
                        marginRight: "10px",
                      }}
                    >
                      {item?.reviewsCount + " reviews"}
                    </MKTypography>
                    <Rating name="read-only" value={5} readOnly />
                  </Grid>
                </Grid>

                <Grid container mt={3} display="flex" flexDirection="row" lg={12}>
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="black"
                    sx={{
                      textAlign: "justify",
                      maxWidth: "100%",
                      lineHeight: "19.5px",
                    }}
                  >
                    {item?.description}
                  </MKTypography>
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      backgroundColor: "#C9C5BA",
                      margin: 1,
                    }}
                  />
                </Grid>

                <Grid container display="flex" justifyContent={"flex-end"} lg={12}>
                  <MKButton
                    circular
                    variant="contained"
                    color="black"
                    sx={{
                      paddingLeft: 5,
                      paddingRight: 5,
                    }}
                    onClick={() => window.open(item.mapurl || "https://www.google.com/", "_blank")}
                  >
                    View On Map
                    {<UilArrowUpRight />}
                  </MKButton>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const CustomCard2 = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
      <Grid>
        <Grid
          sx={{
            padding: 2,
            backgroundColor: "#FEFDF5",
            borderRadius: 5,
            width: "100%",
          }}
        >
          <Grid
            sx={{
              border: "solid",
              borderWidth: 1,
              borderColor: "#C9C5BA",
              padding: 1,
              borderRadius: "15px",
            }}
          >
            <Card
              sx={({ breakpoints }) => ({
                display: "flex",
                flexDirection: "row",
                borderRadius: "15px",
                boxShadow: "none",
                backgroundColor: "#FEFDF5",
                flex: 1,
                [breakpoints.down("sm")]: {
                  flexDirection: "column",
                  alignItems: "center",
                },
              })}
            >
              <CardMedia
                component="img"
                alt="Image"
                image={process.env.REACT_APP_BASE_URL + item?.thumbnail?.url}
                title="title"
                sx={({ breakpoints }) => ({
                  borderRadius: "15px",
                  width: "180px",
                  height: "180px",
                  margin: 0,
                  [breakpoints.down("sm")]: {
                    width: "100%",
                    height: "auto",
                  },
                })}
              />

              <CardContent
                sx={({ breakpoints }) => ({
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignSelf: "center",
                  backgroundColor: "#FEFDF5",
                  flex: 1,
                  minHeight: "180px",
                  [breakpoints.down("sm")]: {
                    height: "auto",
                  },
                })}
              >
                <MKTypography
                  variant="h1"
                  color="black"
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                    },
                    fontFamily: "Playfair Display, serif",
                    fontSize: "25px",
                    fontWeight: 400,
                  })}
                >
                  {item?.title}
                </MKTypography>

                <MKTypography
                  variant="h6"
                  fontWeight="regular"
                  color="black"
                  mt={1}
                  sx={{
                    textAlign: "justify",
                    maxWidth: "100%",
                    lineHeight: "19.5px",
                  }}
                >
                  {item?.description}
                </MKTypography>
                <Divider
                  variant="middle"
                  sx={{
                    height: 2,
                    width: "100%",
                    backgroundColor: "#C9C5BA",
                    margin: 1,
                  }}
                />
                <Grid container>
                  {item?.destinationFeatures.map((feature, index) => (
                    <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Grid
                        sx={{
                          flexDirection: "row",
                          display: "flex",
                          alignItems: "center",
                          marginRight: 3,
                        }}
                      >
                        <React.Fragment key={feature.icon?.id}>
                          {iconMappings[feature.icon?.icon?.toLowerCase()] || <span>Unknown Icon</span>}
                        </React.Fragment>
                        <MKTypography
                          color="black"
                          sx={{
                            fontSize: "16px",
                            fontFamily: "Poppins, sans-serif",
                            lineHeight: "30px",
                            marginLeft: 2,
                          }}
                        >
                          {feature?.name}
                        </MKTypography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
                {/* <Grid container sx={{ margin: 0 }}>
                  {item?.activities.map((activity, index) => (
                    <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                      <Grid
                        sx={{
                          flexDirection: "row",
                          display: "flex",
                          alignItems: "center",
                          marginRight: 3,
                        }}
                      >
                        {activity?.icon}
                        <MKTypography
                          color="black"
                          sx={{
                            fontSize: "16px",
                            fontFamily: "Poppins, sans-serif",
                            lineHeight: "30px",
                            marginLeft: 2,
                          }}
                        >
                          {activity?.text}
                        </MKTypography>
                      </Grid>
                    </Grid>
                  ))}
                </Grid> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  };


  // Scroll left by a fixed amount (e.g., 200px)
  const handleScrollLeft = (index) => {
    if (containerRefs.current[index]) {
      containerRefs.current[index].scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Scroll right by a fixed amount (e.g., 200px)
  const handleScrollRight = (index) => {
    if (containerRefs.current[index]) {
      containerRefs.current[index].scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBar />
      <div style={{ padding: 15, marginTop: "-4.5rem" }}>
        <HeaderThree
          title={destinationData.title}
          backgroundImage={process.env.REACT_APP_BASE_URL + destinationData.heroImage?.url}
          subHead={destinationData?.type + " Destination"}
          pageId={1234}
        />
      </div>
      <div style={{ overflowX: "hidden" }}>
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
          {/* Accordion List with Button */}
          <Grid
            container
            item
            xs={12}
            lg={8}
            flexDirection="column"
            alignItems="center"
            sx={{ width: "70%" }}
          >
            <Grid container display={"flex"} flexDirection="column">
              <Accordion
                defaultExpanded={isExpaned}
                disableGutters // Removes padding and default spacing
                sx={{
                  width: "100%",
                  boxShadow: "none",
                  "&:before": { display: "none" }, // Removes the default divider line
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id={`panel1-header-1`}
                  sx={{
                    boxShadow: "none",
                    backgroundColor: "#FEFDF5",
                    margin: 0,
                  }}
                >
                  <MKTypography
                    variant="h1"
                    color="black"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                        textAlign: "center",
                      },
                      fontFamily: "Playfair Display, serif",
                      fontSize: "40px",
                      fontWeight: 400,
                      textAlign: "left",
                      marginBottom: 2,
                      marginTop: 4,
                    })}
                  >
                    Destination Overview
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      opacity: 1,
                      backgroundColor: "#C9C5BA",
                    }}
                  />
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="black"
                    sx={{ textAlign: "left", maxWidth: "90%" }}
                  >
                    {destinationData.overview}
                  </MKTypography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                disableGutters // Removes padding and default spacing
                sx={{
                  width: "100%",
                  boxShadow: "none",
                  "&:before": { display: "none" }, // Removes the default divider line
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id={`panel1-header-1`}
                  sx={{ boxShadow: "none", backgroundColor: "#FEFDF5" }}
                >
                  <MKTypography
                    variant="h1"
                    color="black"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                        textAlign: "center",
                      },
                      fontFamily: "Playfair Display, serif",
                      fontSize: "40px",
                      fontWeight: 400,
                      textAlign: "left",
                      marginBottom: 2,
                      marginTop: 4,
                    })}
                  >
                    Sight Seeing at {destinationData.city?.name || ""}
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      opacity: 1,
                      backgroundColor: "#C9C5BA",
                    }}
                  />
                  {destinationData?.travelSpots && destinationData?.travelSpots.length > 0
                    ? destinationData?.travelSpots?.map((item, index) => {
                        return <CustomCard item={item} index={index} />;
                      })
                    : null}
                </AccordionDetails>
              </Accordion>
              <Accordion
                disableGutters // Removes padding and default spacing
                sx={{
                  width: "100%",
                  boxShadow: "none",
                  "&:before": { display: "none" }, // Removes the default divider line
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id={`panel1-header-1`}
                  sx={{ boxShadow: "none", backgroundColor: "#FEFDF5" }}
                >
                  <MKTypography
                    variant="h1"
                    color="black"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                        textAlign: "center",
                      },
                      fontFamily: "Playfair Display, serif",
                      fontSize: "40px",
                      fontWeight: 400,
                      textAlign: "left",
                      marginBottom: 2,
                      marginTop: 4,
                    })}
                  >
                    Activities at {destinationData.city?.name || ""}
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      opacity: 1,
                      backgroundColor: "#C9C5BA",
                    }}
                  />
                  {destinationData.activities?.map((item, index) => {
                    return <CustomCard2 item={item} index={index} />;
                  })}
                </AccordionDetails>
              </Accordion>

              <Accordion
                defaultExpanded
                disableGutters // Removes padding and default spacing
                sx={{
                  width: "100%",
                  boxShadow: "none",
                  "&:before": { display: "none" }, // Removes the default divider line
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id={`panel1-header-1`}
                  sx={{ boxShadow: "none", backgroundColor: "#FEFDF5" }}
                >
                  <MKTypography
                    variant="h1"
                    color="black"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                        textAlign: "center",
                      },
                      fontFamily: "Playfair Display, serif",
                      fontSize: "40px",
                      fontWeight: 400,
                      textAlign: "left",
                      marginBottom: 2,
                      marginTop: 4,
                    })}
                  >
                    Tours Including This Destination
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      opacity: 1,
                      backgroundColor: "#C9C5BA",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Grid
                      container
                      spacing={2}
                      ref={(el) => (containerRefs.current[0] = el)}
                      sx={{
                        overflowX: "auto",
                        paddingX: 2,
                        "&::-webkit-scrollbar": {
                          display: "none",
                        },
                        scrollbarWidth: "none",
                        flexWrap: "nowrap",
                        width: "100%",
                        gap: 2, // Adds spacing between cards horizontally
                      }}
                    >
                      {tourPackages && tourPackages.length > 0
                        ? tourPackages.map((item, index) => {
                            return (
                              <Box
                                key={index}
                                // xs={14}
                                // sm={14}
                                // md={10}
                                // lg={10}
                                sx={{
                                  backgroundColor: "#FEFDF5",
                                  display: "flex",
                                  flexDirection: "column", // keep this if stacking card content vertically
                                  flex: "1 1 auto", // allows flexible growth if used in a flex container
                                  margin: 1, // optional spacing between cards
                                  alignItems: "stretch",
                                }}
                              >
                                <Card
                                  onClick={() => handleClick(item.tourDetail.documentId)}
                                  sx={{
                                    minWidth: "400px",
                                    minHeight: "90%",
                                    boxShadow: "none",
                                    backgroundColor: "#FEFDF5",
                                    borderWidth: 1,
                                    borderColor: "#C9C5BA",
                                    display: "flex",
                                    flexDirection: "column",
                                    transition: "background-color 0.3s ease, color 0.3s ease",
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
                                      height: "100%",
                                      display: "flex",
                                      alignItems: "flex-start",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <CardMedia
                                      component="img"
                                      image={process.env.REACT_APP_BASE_URL + item.thumbnail?.url}
                                      sx={{
                                        objectFit: "cover",
                                        width: "100%",
                                        height: "250px",
                                        margin: 0,
                                        padding: 0,
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 0,
                                      }}
                                      alt="Image"
                                    />
                                    <CardContent
                                      sx={{
                                        flex: 1,
                                        padding: 1.5,
                                        minHeight: "300px",
                                      }}
                                    >
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
                                          {item.title}
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
                                      <Box
                                        display="flex"
                                        alignItems="center"
                                        gap={1} // optional: adds spacing between icons
                                      >
                                        {item.icons &&
                                          item.icons.length > 0 &&
                                          item.icons.map((iconItem) => (
                                            <React.Fragment key={iconItem.id}>
                                              {iconMappings[iconItem.icon.toLowerCase()] || (
                                                <span>Unknown Icon</span>
                                              )}
                                            </React.Fragment>
                                          ))}
                                      </Box>
                                      <Divider
                                        variant="middle"
                                        sx={{
                                          backgroundColor: "##C9C5BA",
                                          height: "2px",
                                          margin: 1,
                                        }}
                                      />
                                      <MKTypography variant="subtitle2">Pricing starts at</MKTypography>
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
                                        <MKTypography variant="subtitle2" color="text.secondary" mt={0.9}>
                                          + taxes and charges
                                        </MKTypography>
                                      </Grid>
                                    </CardContent>
                                  </CardActionArea>
                                </Card>
                              </Box>
                            );
                          })
                        : null}
                    </Grid>
                    {/** Side scroll bars*/}
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        paddingX: 2,
                        "&::-webkit-scrollbar": {
                          display: "none",
                        },
                        scrollbarWidth: "none",
                        flexWrap: "nowrap",
                        width: "100%",
                        gap: 2, // Adds spacing between cards horizontally,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 1,
                      }}
                    >
                      <Grid item>
                        <UilAngleLeft
                          size="2em"
                          onClick={() => handleScrollLeft(0)}
                          style={{ cursor: "pointer" }}
                        />
                      </Grid>
                      <Grid item>
                        <UilAngleRight
                          size="2em"
                          onClick={() => handleScrollRight(0)}
                          style={{ cursor: "pointer" }}
                        />
                      </Grid>
                    </Grid>
                    <MKButton
                      circular
                      variant="contained"
                      color="black"
                      sx={{
                        paddingLeft: 5,
                        paddingRight: 5,
                        marginTop: 5,
                        marginBottom: 10,
                      }}
                      onClick={viewAllTours}
                    >
                      {"See All Packages"}
                    </MKButton>
                  </Box>
                </AccordionDetails>
              </Accordion>
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
              backgroundColor: "#EEECE2",
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
                    {"FAQs"}
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
                  {"Your Questions Answered"}
                </MKTypography>
                <MKTypography
                  variant="h6"
                  fontWeight="regular"
                  color="black"
                  sx={{ textAlign: "center", maxWidth: "90%" }}
                >
                  Planning your Sri Lankan adventure? We've got you covered! Explore our Frequently Asked
                  Questions (FAQs) to find answers to common inquiries about visas, travel seasons, currency,
                  culture, and more.
                </MKTypography>
              </Grid>
            </Container>

            <FAQs title="Home FAQ" faqs={faq} />
            <Footer />
            <FloatingWhatsApp />
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default DestinationDetails;
