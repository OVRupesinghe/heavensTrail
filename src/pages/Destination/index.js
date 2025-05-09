import React, { useState, useEffect, useContext } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import View from "layouts/sections/components/View";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { ReactComponent as LiBeach } from "../../assets/icons/li_beach.svg";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "components/Footer";
import { PageIDs } from "constants/pageId";
import { UilMountains, UilBookOpen, UilTrees, UilBuilding } from "@iconscout/react-unicons";
import {
  Card,
  CardMedia,
  CardActionArea,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { DestinationPage } from "constants/images";
import NavBar from "components/NavBar";
import { useNavigate } from "react-router-dom";
import { fetchDestinationData } from "services/DestinationService";
import { fetchDestinations, fetchFAQs } from "services/TourServices";
import { fetchPropertyPageTexts, fetchPropertyPageImages } from "services/PropertyService";
import FAQs from "components/FAQs";
import { CountryContext } from "context/CountryContext";

function Destination() {
  const navigate = useNavigate();
  const [pageTexts, setPageTexts] = useState();
  const [pageImages, setPageImages] = useState();
  const [hillDestinations, setHillDestinations] = useState([]);
  const [seaDestinations, setSeaDestinations] = useState([]);
  const [cultureDestinations, setCultureDestinations] = useState([]);
  const [wildLifeDestinations, setWildlifeDestinations] = useState([]);
  const [urbanDestinations, setUrbanDestinations] = useState([]);
  const [faq, setFaq] = useState([]);
  const { countries, loading, selectedCountryCode } = useContext(CountryContext);

  useEffect(() => {
    // getPropertyImages();
    // getPropertyText();
    // getSeaDestinationDetails();
    // getHillDestinationDetails();
    // getCultureDestinationDetails();
    getDestinations();
    getFaq();
  }, []);

  const getFaq = async () => {
    fetchFAQs().then((res) => {
      setFaq(res.data);
    });
  };
  // const getPropertyText = async () => {
  //   // Usage
  //   fetchPropertyPageTexts(PageIDs.Destinations)
  //     .then((response) => {
  //       const headerTexts = response?.data.reduce((acc, item) => {
  //         acc[item.tag] = item.text;
  //         return acc;
  //       }, {});
  //       console.log("TEXTS", headerTexts);

  //       setPageTexts(headerTexts);
  //     })
  //     .catch((error) => {
  //       console.error("Fetch failed:", error.message);
  //     });
  // };

  // const getPropertyImages = () => {
  //   fetchPropertyPageImages(PageIDs.Home, 1)
  //     .then((response) => {
  //       const headerImages = response?.data.reduce((acc, item) => {
  //         acc[item.tag] = item.imgeUrl;
  //         return acc;
  //       }, {});
  //       setPageImages(headerImages);
  //       console.log("headerImages", headerImages);
  //     })
  //     .catch((error) => {
  //       console.error("Fetch failed:", error.message);
  //     });
  // };

  const filterDestinationsByCountry = (destinations) => {
    if (destinations.length > 0) {
      return destinations.filter((dest) =>
        dest.countries.some((country) => country.shortCode == selectedCountryCode)
      );
    }
  };
  const getDestinations = () => {
    fetchDestinations()
      .then((response) => {
        const destinations = filterDestinationsByCountry(response.data);
        const seaside = destinations.filter((item) => item.type === "Seaside");
        const hillCountry = destinations.filter((item) => item.type === "Hill Country");
        const culturalAndHistorical = destinations.filter((item) => item.type === "Cultural and Historical");
        const wildlifeAndNature = destinations.filter((item) => item.type === "Wildlife and Nature");
        const urbanAndCoastal = destinations.filter((item) => item.type === "Urban and Coastal");
        setHillDestinations(hillCountry);
        setSeaDestinations(seaside);
        setCultureDestinations(culturalAndHistorical);
        setWildlifeDestinations(wildlifeAndNature);
        setUrbanDestinations(urbanAndCoastal);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  useEffect(() => {
    getDestinations();
  }, [selectedCountryCode]);

  // const getSeaDestinationDetails = () => {
  //   // fetchDestinationData(PageIDs.Home, 44)
  //   //   .then((response) => {
  //   //     setSeaDestinations(response?.data?.destinationList);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Fetch failed:", error.message);
  //   //   });
  // };

  // const getHillDestinationDetails = () => {
  //   fetchDestinationData(PageIDs.Home, 134)
  //     .then((response) => {
  //       // setHillDestinations(response?.data?.destinationList);
  //     })
  //     .catch((error) => {
  //       console.error("Fetch failed:", error.message);
  //     });
  // };

  // const getCultureDestinationDetails = () => {
  //   // fetchDestinationData(PageIDs.Home, 49)
  //   //   .then((response) => {
  //   //     setCultureDestinations(response?.data?.destinationList);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Fetch failed:", error.message);
  //   //   });
  // };

  const btnArray = [
    {
      title: "Seaside",
      icon: <LiBeach />,
    },
    { title: "Hill Country", icon: <UilMountains /> },
    { title: "Cultural and Historical", icon: <UilBookOpen /> },
    { title: "Wildlife and Nature", icon: <UilTrees /> },
    { title: "Urban and Coastal", icon: <UilBuilding /> },
  ];

  const handleOnClick = (destinationId) => {
    navigate("/pages/destination-details/" + destinationId);
  };

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBar />
      <div style={{ padding: 15 }}>
        <HeaderTwo
          buttonArray={btnArray}
          title={"Famous Destinations in Sri Lanka"}
          backgroundImage={DestinationPage.Header}
          pageId={113}
        />
      </div>

      {/* SEA SIDE DESTINATIONS */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingBottom: "40px",
          paddingTop: "20px",
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
              {"Seaside Destinations"}
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              {
                "Whether you're looking to relax on golden sands, engage in thrilling water sports, or explore vibrant marine life, our seaside destinations have something for everyone."
              }
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
              {seaDestinations && seaDestinations.length > 0 ? (
                <>
                  {seaDestinations.map((item, index) => (
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
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="350px"
                            image={process.env.REACT_APP_BASE_URL + item?.heroImage.url}
                            sx={{
                              objectFit: "cover",
                              width: "100%",
                              margin: 0,
                              padding: 0,
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                            alt="Image"
                          />
                          <Grid
                            sx={{
                              width: "100%",
                              padding: 2,
                              paddingTop: 0, // Remove padding from the top to prevent shifting
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Playfair Display, serif",
                                fontSize: "25px",
                                fontWeight: 400,
                                marginBottom: 2,
                              }}
                              variant="h5"
                            >
                              {item?.title}
                            </Typography>
                            <MKTypography
                              variant="subtitle2"
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 3,
                                textOverflow: "ellipsis",
                              }}
                            >
                              {item?.description}
                            </MKTypography>
                            <MKTypography
                              sx={{
                                fontWeight: "500",
                                textDecoration: "underline",
                              }}
                              variant="subtitle2"
                            >
                              Read More
                            </MKTypography>
                          </Grid>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </>
              ) : (
                <MKTypography
                  variant="h6"
                  fontWeight="bold"
                  color="black"
                  sx={{ textAlign: "center", maxWidth: "100%", margin: "auto", marginTop: "1rem" }}
                >
                  {"No Sea Destinations to display"}
                </MKTypography>
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* HILL COUNTRY DESTINATIONS */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingBottom: "40px",
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
              {"Hill Country Destinations"}
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              {
                "Enjoy breathtaking landscapes, tea plantations, and picturesque waterfalls, making it a perfect retreat for nature lovers and adventure enthusiasts."
              }
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
              {hillDestinations && hillDestinations.length > 0 ? (
                <>
                  {hillDestinations.map((item, index) => (
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
                        }}
                        onClick={() => handleOnClick(item.documentId)}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="350px"
                            image={process.env.REACT_APP_BASE_URL + item?.heroImage.url}
                            sx={{
                              objectFit: "cover",
                              width: "100%",
                              margin: 0,
                              padding: 0,
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                            alt="Image"
                          />
                          <Grid
                            sx={{
                              width: "100%",
                              padding: 2,
                              paddingTop: 0, // Remove padding from the top to prevent shifting
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Playfair Display, serif",
                                fontSize: "25px",
                                fontWeight: 400,
                                marginBottom: 2,
                              }}
                              variant="h5"
                            >
                              {item?.title}
                            </Typography>
                            <MKTypography
                              variant="subtitle2"
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 3,
                                textOverflow: "ellipsis",
                              }}
                            >
                              {item?.description}
                            </MKTypography>
                            <MKTypography
                              sx={{
                                fontWeight: "500",
                                textDecoration: "underline",
                              }}
                              variant="subtitle2"
                            >
                              Read More
                            </MKTypography>
                          </Grid>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </>
              ) : (
                <MKTypography
                  variant="h6"
                  fontWeight="bold"
                  color="black"
                  sx={{ textAlign: "center", maxWidth: "100%", margin: "auto", marginTop: "1rem" }}
                >
                  {"No HillCountry Destinations to display"}
                </MKTypography>
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* Cultural and Historical DESTINATIONS */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingBottom: "40px",
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
              {"Cultural and Historical Destinations"}
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              {
                "Explore ancient cities, majestic temples, and UNESCO World Heritage Sites that tell the stories of a civilization spanning over two millennia."
              }
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
              {cultureDestinations && cultureDestinations.length > 0 ? (
                <>
                  {cultureDestinations.map((item, index) => (
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
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="350px"
                            image={process.env.REACT_APP_BASE_URL + item?.heroImage.url}
                            sx={{
                              objectFit: "cover",
                              width: "100%",
                              margin: 0,
                              padding: 0,
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                            alt="Image"
                          />
                          <Grid
                            sx={{
                              width: "100%",
                              padding: 2,
                              paddingTop: 0, // Remove padding from the top to prevent shifting
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Playfair Display, serif",
                                fontSize: "25px",
                                fontWeight: 400,
                                marginBottom: 2,
                              }}
                              variant="h5"
                            >
                              {item?.title}
                            </Typography>
                            <MKTypography
                              variant="subtitle2"
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 3,
                                textOverflow: "ellipsis",
                              }}
                            >
                              {item?.description}
                            </MKTypography>
                            <MKTypography
                              sx={{
                                fontWeight: "500",
                                textDecoration: "underline",
                              }}
                              variant="subtitle2"
                            >
                              Read More
                            </MKTypography>
                          </Grid>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </>
              ) : (
                <MKTypography
                  variant="h6"
                  fontWeight="bold"
                  color="black"
                  sx={{ textAlign: "center", maxWidth: "100%", margin: "auto", marginTop: "1rem" }}
                >
                  {"No Cultural and Historical Destionations to display"}
                </MKTypography>
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* Wildlife and Nature DESTINATIONS */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingBottom: "40px",
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
              {"Wildlife and Nature Destinations"}
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              {
                "Explore ancient cities, majestic temples, and UNESCO World Heritage Sites that tell the stories of a civilization spanning over two millennia."
              }
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
              {wildLifeDestinations && wildLifeDestinations.length > 0 ? (
                <>
                  {wildLifeDestinations.map((item, index) => (
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
                        }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="350px"
                            image={process.env.REACT_APP_BASE_URL + item?.heroImage.url}
                            sx={{
                              objectFit: "cover",
                              width: "100%",
                              margin: 0,
                              padding: 0,
                              borderBottomLeftRadius: 0,
                              borderBottomRightRadius: 0,
                            }}
                            alt="Image"
                          />
                          <Grid
                            sx={{
                              width: "100%",
                              padding: 2,
                              paddingTop: 0, // Remove padding from the top to prevent shifting
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Playfair Display, serif",
                                fontSize: "25px",
                                fontWeight: 400,
                                marginBottom: 2,
                              }}
                              variant="h5"
                            >
                              {item?.title}
                            </Typography>
                            <MKTypography
                              variant="subtitle2"
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 3,
                                textOverflow: "ellipsis",
                              }}
                            >
                              {item?.description}
                            </MKTypography>
                            <MKTypography
                              sx={{
                                fontWeight: "500",
                                textDecoration: "underline",
                              }}
                              variant="subtitle2"
                            >
                              Read More
                            </MKTypography>
                          </Grid>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </>
              ) : (
                <MKTypography
                  variant="h6"
                  fontWeight="bold"
                  color="black"
                  sx={{ textAlign: "center", maxWidth: "100%", margin: "auto", marginTop: "1rem" }}
                >
                  {"No Wildlife and Nature Destinations to display"}
                </MKTypography>
              )}
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* Urban and Coastal DESTINATIONS */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingBottom: "40px",
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
              {"Urban and Coastal Destinations"}
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "center", maxWidth: "90%" }}
            >
              {
                "Explore ancient cities, majestic temples, and UNESCO World Heritage Sites that tell the stories of a civilization spanning over two millennia."
              }
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
              {urbanDestinations &&
                urbanDestinations.map((item, index) => (
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
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="350px"
                          image={process.env.REACT_APP_BASE_URL + item?.heroImage.url}
                          sx={{
                            objectFit: "cover",
                            width: "100%",
                            margin: 0,
                            padding: 0,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                          }}
                          alt="Image"
                        />
                        <Grid
                          sx={{
                            width: "100%",
                            padding: 2,
                            paddingTop: 0, // Remove padding from the top to prevent shifting
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Playfair Display, serif",
                              fontSize: "25px",
                              fontWeight: 400,
                              marginBottom: 2,
                            }}
                            variant="h5"
                          >
                            {item?.title}
                          </Typography>
                          <MKTypography
                            variant="subtitle2"
                            sx={{
                              display: "-webkit-box",
                              overflow: "hidden",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 3,
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item?.description}
                          </MKTypography>
                          <MKTypography
                            sx={{
                              fontWeight: "500",
                              textDecoration: "underline",
                            }}
                            variant="subtitle2"
                          >
                            Read More
                          </MKTypography>
                        </Grid>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
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
          paddingBottom: "40px",
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
                fontFamily: "Playfair Display, serif",
                fontSize: "60px",
                fontWeight: 400,
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

        <Box sx={{ width: "70%",  marginBottom:"3rem"  }}>
          <FAQs title="Home FAQ" faqs={faq} />
        </Box>
      </Grid>
      <Footer />
    </div>
  );
}

export default Destination;
