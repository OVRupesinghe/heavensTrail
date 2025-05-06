import "./styles.css";

import { UilAngleDown, UilAngleLeft, UilAngleRight } from "@iconscout/react-unicons";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import zIndex from "@mui/material/styles/zIndex";
import FAQs from "components/FAQs";
import FloatingWhatsApp from "components/FloatingWhatsapp";
import Footer from "components/Footer";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import NavBar from "components/NavBar";
import { iconMappings } from "constants/icons";
import { HomePage } from "constants/images";
import HeaderOne from "layouts/sections/page-sections/page-headers/components/HeaderOne";
import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { fetchBlogCategories } from "services/BlogsService";
import { fetchPropertyData, fetchPropertyPageImages, fetchPropertyPageTexts } from "services/PropertyService";
import { fetchTourPackages, fetchTourListings, fetchExperiences, fetchFAQs } from "services/TourServices";
import { CountryContext } from "../../context/CountryContext";
import imgExhibition from "../../assets/images/homePage/img_exhi.jpeg";
import imgTour from "../../assets/images/homePage/img_tour.jpeg";
import imgMeet from "../../assets/images/homePage/img_meet.jpeg";
import imgWedding from "../../assets/images/homePage/img_wed.jpeg";

function Home() {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const containerRefs = useRef([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, scrollLeft: 0 });
  const [propertyData, setPropertyData] = useState(null);
  const [pageTexts, setPageTexts] = useState();
  const [pageImages, setPageImages] = useState();
  const [headerData, setHeaderData] = useState({});
  const [tourPackages, setTourPackages] = useState([]);
  const [blogCategories, setBlogCategories] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [faq, setFaq] = useState([]);
  const [selected, setSelected] = useState("web");
  const [type, setType] = React.useState("");
  const [location, setLocation] = React.useState("");
  const { countries, loading, selectedCountryCode } = useContext(CountryContext);

  const ElfsightWidget = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;

      // Delay appending the script to avoid ResizeObserver errors
      setTimeout(() => {
        document.body.appendChild(script);
      }, 100);

      return () => {
        setTimeout(() => {
          document.body.appendChild(script);
        }, 100);
      };
    }, []);

    return <div className="elfsight-app-d0e847bf-c7ca-4f6c-9338-2da0c4da62fa" data-elfsight-app-lazy></div>;
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleListingSelection = (detailID) => {
    navigate(`/pages/tour-details/` + detailID);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const packages = [
    {
      key: "all ",
      value: "All ",
    },
    {
      key: "shorttrips",
      value: "Short trips",
    },
    {
      key: "halfday",
      value: "Half-day ",
    },
    {
      key: "fullday",
      value: "Full-day ",
    },
    {
      key: "multiday",
      value: "Multi-day",
    },
  ];

  useEffect(() => {
    getTourPackages();
    getExperiences();
    getFaq();
    setSelected(packages[0].key);
  }, []);

  const travelSolutions = [
    {
      title: "Meetings & Conferences",
      btn1: "See Details",
      btn2: "View Packages",
      img: imgMeet,
    },
    {
      title: "Exhibitions",
      btn1: "See Details",
      btn2: "View Packages",
      img: imgExhibition,
    },
    {
      title: "Weddings",
      btn1: "See Details",
      btn2: "View Packages",
      img: imgWedding,
    },
    {
      title: "Incentive Tours",
      btn1: "See Details",
      btn2: "View Packages",
      img: imgTour,
    },
  ];

  const experienceData = [
    {
      title: "Tuk Tuk Safari in Colombo" || "",
      description: "Hop on a tuk-tuk for a fun-filled tour through the vibrant streets of Colombo.",
      btn: ["Short Trip", "Urban Adventure", "Colombo"],
      img: HomePage?.Exp_1 || "",
    },
    {
      title: "Ceylon Tea Tour in Nuwara Eliya" || "",
      description: "Hop on a tuk-tuk for a fun-filled tour through the vibrant streets of Colombo.",
      btn: ["Full Day", "Local", "Nuwara Eliya"],
      img: HomePage?.Exp_2 || "",
    },
    {
      title: "Hot Air Balloon Ride Over Dambulla" || "",
      description: "Hop on a tuk-tuk for a fun-filled tour through the vibrant streets of Colombo.",
      btn: ["Half Day", "Adventure", "Dambulla"],
      img: HomePage?.Exp_3 || "",
    },
    {
      title: "Snorkelling in Pigeon Island" || "",
      description: "Hop on a tuk-tuk for a fun-filled tour through the vibrant streets of Colombo.",
      btn: ["Short Trip", "Adventure", "Colombo"],
      img: HomePage?.Exp_4 || "",
    },
  ];

  const getPropertyDetails = async () => {
    // Usage
    fetchPropertyData()
      .then((data) => {
        // console.log("Fetched data: ", data);
        setPropertyData(data.data);
      })
      .catch((error) => {
        // console.error("Fetch failed:", error.message);
      });
  };

  const getTourPackages = async () => {
    // Usage
    fetchTourListings().then((res) => {
      setTourPackages(res.data);
    });
  };

  const getExperiences = async () => {
    fetchExperiences().then((res) => {
      setExperiences(res.data);
    });
  };
  
  const getFaq = async () => {
    fetchFAQs().then((res) => {
      setFaq(res.data);
    });
  };

  const getBlogCategories = async () => {
    // Usage
    fetchBlogCategories()
      .then((reponse) => {
        // console.log("Fetched data: BLOG ", reponse);
        const filteredItems = reponse?.data.slice(0, 4);
        setBlogCategories(filteredItems);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const getPropertyText = async () => {
    // Usage
    fetchPropertyPageTexts(1)
      .then((response) => {
        const headerTexts = response?.data.reduce((acc, item) => {
          acc[item.tag] = item.text;
          return acc;
        }, {});
        // console.log("TEXTS", headerTexts);

        setPageTexts(headerTexts);
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
        setPageImages(headerImages);
        // console.log("headerImages", headerImages);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const handleMouseDown = (e) => {
    const scrollLeft = scrollContainerRef.current.scrollLeft;
    setStartPosition({
      x: e.pageX,
      scrollLeft,
    });
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const x = e.pageX;
    const walk = (x - startPosition.x) * 2; // Scroll faster with a multiplier (adjust if necessary)
    scrollContainerRef.current.scrollLeft = startPosition.scrollLeft - walk;
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

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    navigate("/pages/tour-list");
  };

  const handleOurPackageClick = () => {
    navigate("/pages/destinations");
  };

  const handleChoosePackageClick = (item) => {
    //TODO Handle button action seperatly
    switch (item) {
      case "Meetings & Conferences":
        navigate("/pages/meetings");
        return;
      case "Exhibitions":
        navigate("/pages/accomadation");
        return;
      case "Weddings":
        navigate("/pages/weddings");
        return;
      case "Incentive Tours":
        navigate("/pages/mice-tours");
        return;
      default:
        return;
    }
  };

  const handleViewPackageClick = (item) => {
    //TODO Handle button action seperatly
    switch (item) {
      case "Meetings & Conferences":
        navigate("/pages/meetings#package");
        return;
      case "Exhibitions":
        navigate("/pages/accomadation#package");
        return;
      case "Weddings":
        navigate("/pages/weddings#package");
        return;
      case "Incentive Tours":
        navigate("/pages/mice-tours#package");
        return;
      default:
        return;
    }
  };

  const handleViewAllClick = () => {
    navigate("/pages/blogs");
  };

  const handleExperienceClick = (expId) => {
    console.log(expId);
  };

  const handleButtonClick = (value) => {
    setSelected(value);
  };

  const ToggleButtonGroup = ({ packages, key }) => {
    return (
      <div className="toggle-button-group-home">
        {packages?.map((item, index) => {
          return (
            <button
              key={key}
              className={`toggle-button ${selected === item.value ? "selected" : ""}`}
              onClick={() => handleButtonClick(item.value)}
            >
              {item.value}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      <div style={{ padding: 15 }}>
        <HeaderOne />
      </div>
      <div style={{ overflowX: "hidden" }}>
        {/* Explore our travel solutions */}

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
          mt={8}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "40px",
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
                  {"MICE Experiences"}
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
                {"Explore our travel solutions"}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {
                  "We create seamless MICE (Meetings, Incentives, Conferences, Exhibitions) and wedding experiences in Sri Lanka. Unforgettable events, flawlessly planned."
                }
              </MKTypography>
            </Grid>
          </Container>
          <Grid container spacing={2}>
            {travelSolutions.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    height: "440px",
                    backgroundImage: `url(${item?.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: 4,
                      backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust opacity as needed
                      zIndex: 0,
                    }}
                  />
                  <MKTypography
                    color="white"
                    sx={{
                      fontSize: "34px",
                      fontFamily: "Playfair Display, serif",
                      zIndex: 1,
                    }}
                  >
                    {item?.title}
                  </MKTypography>

                  <Stack spacing={1} mt={1}>
                    <MKButton
                      size="small"
                      circular
                      variant="outlined"
                      color="white"
                      onClick={() => handleChoosePackageClick(item?.title)}
                      sx={{
                        width: "45%",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      {item?.btn1}
                    </MKButton>
                    <MKButton
                      size="small"
                      circular
                      color="white"
                      onClick={() => handleViewPackageClick(item?.title)}
                      sx={{
                        width: "45%",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      {item?.btn2}
                    </MKButton>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Create your own adventure SECTION */}
        {/*    <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
            backgroundColor: "#EEECE2",
            marginTop: 7,
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "40px",
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
                  {pageTexts?.section2Button || ""}
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
                {pageTexts?.section2Title || ""}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {pageTexts?.section2Description || ""}
              </MKTypography>
            </Grid>
          </Container>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              sx={{
                alignSelf: "center",
              }}
              container
              spacing={2}
            >
              {adventures.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "16px",
                      backgroundColor: "#EEECE2",
                      boxShadow: "none",
                      borderWidth: 1,
                      borderColor: "#C9C5BA",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="80px"
                      image={item?.img}
                      alt="Image"
                      sx={{ objectFit: "contain", width: "70px" }}
                    />
                    <MKTypography
                      color="#1A1814"
                      mb={2}
                      sx={{
                        fontSize: "24px",
                        fontFamily: "Playfair Display, serif",
                        fontSize: "28px",
                        fontWeight: 400,
                      }}
                    >
                      {item?.title}
                    </MKTypography>
                    <MKTypography variant="subtitle2">{item?.des}</MKTypography>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Grid>
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
              >
                {pageTexts?.section2Button2 || ""}
              </MKButton>
            </Grid>
          </Container>
        </Grid>
        */}
        {/* Explore our travel Packages */}
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
            backgroundColor: "#FEFDF5",
            marginTop: 7,
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
                <MKButton circular variant="outlined" color="black" onClick={handleOurPackageClick}>
                  {"Our Packages"}
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
                {"Explore our travel Packages"}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {
                  "We create seamless MICE (Meetings, Incentives, Conferences, Exhibitions) and wedding experiences in Sri Lanka. Unforgettable events, flawlessly planned"
                }
              </MKTypography>
            </Grid>
          </Container>

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
                      <Grid
                        item
                        key={index}
                        xs={12}
                        sm={12}
                        md={3}
                        lg={3}
                        sx={{
                          flexShrink: 0,
                          width: "calc(100% / 3.5)",
                          backgroundColor: "#FEFDF5",
                        }}
                      >
                        <Card
                          onClick={() => handleListingSelection(item.tourDetail.documentId)}
                          sx={{
                            minHeight: "100%",
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
                              flexDirection: "column",
                              alignItems:"flex-start"
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={process.env.REACT_APP_BASE_URL + item.thumbnail?.url}
                              sx={{
                                objectFit: "cover",
                                width: "100%",
                                height: "350px",
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
                                padding: 1,
                                minHeight: "350px",
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
                      </Grid>
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
                <UilAngleLeft size="2em" onClick={() => handleScrollLeft(0)} style={{ cursor: "pointer" }} />
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
              onClick={handleClick}
            >
              {"See All Packages"}
            </MKButton>
          </Box>
        </Grid>

        {/* Experiecnce Section */}
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
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
                <MKButton circular variant="outlined" color="black" onClick={handleOurPackageClick}>
                  {"Experiences"}
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
                {"Unforgettable Experiences in Sri Lanka"}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {
                  "Discover the most iconic and must-do experiences in Sri Lanka, from thrilling adventures to immersive cultural events."
                }
              </MKTypography>
            </Grid>
          </Container>
          <Grid
            sx={{
              marginTop: 2,
              marginBottom: 4,
              flexDirection: "row",
              alignItems: "center",
              display: "flex",
              gap: 2,
            }}
            lg={10}
          >
            {/* <Grid>
              <ToggleButtonGroup packages={packages} />
            </Grid> */}
            {/* <FormControl fullWidth sx={{ borderRadius: 20 }} size="large">
              <InputLabel>All Type</InputLabel>
              <Select
                sx={{
                  height: "50px",
                  borderRadius: 50,
                  backgroundColor: "#FEFDF5",
                }}
                input={
                  <OutlinedInput
                    label={"All Type"}
                    endAdornment={<InputAdornment position="end">{<UilAngleDown />}</InputAdornment>}
                  />
                }
                value={type}
                label="All Type"
                onChange={handleTypeChange}
              >
                <MenuItem value={10}>Tenn</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ borderRadius: 20 }} size="large">
              <InputLabel> All Locations</InputLabel>
              <Select
                sx={{
                  height: "50px",
                  borderRadius: 50,
                  backgroundColor: "#FEFDF5",
                }}
                input={
                  <OutlinedInput
                    label={" All Locations"}
                    endAdornment={<InputAdornment position="end">{<UilAngleDown />}</InputAdornment>}
                  />
                }
                value={location}
                label=" All Locations"
                onChange={handleLocationChange}
              >
                <MenuItem value={10}>Tenn</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl> */}
          </Grid>
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
              ref={(el) => (containerRefs.current[1] = el)}
              // onMouseDown={handleMouseDown}
              // onMouseMove={handleMouseMove}
              // onMouseUp={handleMouseUp}
              // onMouseLeave={handleMouseUp}
              sx={{
                overflowX: "auto",
                paddingX: 2,
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
                flexWrap: "nowrap",
                width: "100%",
              }}
            >
              {experiences && experiences.length > 0
                ? experiences.map((item, index) => (
                    <Grid
                      item
                      key={index}
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3.5}
                      sx={{
                        flexShrink: 0,
                        width: "calc(100% / 3.5)",
                        backgroundColor: "#EEECE2",
                        height: "100%",
                      }}
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
                          margin: 0,
                        }}
                        onClick={handleExperienceClick(item.documentId)}
                      >
                        <CardMedia
                          component="img"
                          image={process.env.REACT_APP_BASE_URL + item?.heroImage?.url}
                          sx={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            margin: 0,
                            padding: 0,
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                          }}
                          alt="Image"
                        />
                        <CardContent sx={{ flex: 1 }}>
                          <Grid
                            sx={{
                              gap: 1,
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            {item?.tags.map((tag, index) => {
                              return (
                                <MKButton
                                  className="hover-button"
                                  style={{
                                    marginTop: "5px",
                                  }}
                                  size="small"
                                  circular
                                  variant="outlined"
                                  color="black"
                                  id={tag.id}
                                >
                                  {tag.value}
                                </MKButton>
                              );
                            })}
                          </Grid>

                          <Grid container alignItems="center">
                            <Typography
                              sx={{
                                fontFamily: "Playfair Display, serif",
                                fontSize: "28px",
                                fontWeight: 400,
                                lineHeight: "100%",
                                marginY: 2,
                              }}
                              variant="h5"
                            >
                              {item?.title}
                            </Typography>
                          </Grid>
                          <MKTypography variant="subtitle2">{item?.description}</MKTypography>
                          <Grid container display={"flex"} alignItems="center">
                            <MKTypography
                              variant="subtitle2"
                              color="text.secondary"
                              sx={{ textDecoration: "underline" }}
                              mt={0.9}
                            >
                              Learn More
                            </MKTypography>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))
                : null}
            </Grid>
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
                <UilAngleLeft size="2em" onClick={() => handleScrollLeft(1)} style={{ cursor: "pointer" }} />
              </Grid>
              <Grid item>
                <UilAngleRight
                  size="2em"
                  onClick={() => handleScrollRight(1)}
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
              onClick={handleClick}
            >
              {"Explore All Experiences"}
            </MKButton>
          </Box>  
        </Grid>

        {/* Discover Sri Lanka Through Our Travelers' Eyes SECTION */}
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
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
              lg={9}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              sx={{ textAlign: "center", marginBottom: "20px" }}
            >
              <Stack direction="row" spacing={1} mt={3}>
                <MKButton circular variant="outlined" color="black">
                  { "Reviews and Testimonials"}
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
                {"Discover Sri Lanka Through Our Travelers' Eyes"}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {
                  "Unforgettable experiences await in Sri Lanka, but don’t just take our word for it! See what our past travelers have to say about their incredible Sri Lankan adventures. Dive into their reviews and discover the magic that awaits you"
                }
              </MKTypography>
            </Grid>
          </Container>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            container
          >
            <Box
              sx={{
                display: "flex",
                overflowX: "auto",
                padding: 2,
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
            >
              <ElfsightWidget />
            </Box>
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
            onClick={() =>
              window.open(
                "https://www.google.com/search?sca_esv=11a0cbbb8d287e03&hl=en-LK&gl=lk&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzW0gzzuMsrEVKeW9xlJx-U2mlbENzq29stJ0qtP-5iDCmuAhAe75ankDle3r7EchNKYklvvzt2iB6TC43rRvlPwwkMw9RmVhoFdem-PAYWyiWM_RXA%3D%3D&q=Heaven%27s+Trail+%28Pvt%29+Ltd+Reviews&sa=X&ved=2ahUKEwj96rOmp4SMAxVXwTgGHYtXDgAQ0bkNegQIJhAE&biw=1536&bih=730&dpr=1.25",
                "_blank"
              )
            }
          >
            {"See All Reviews"}
          </MKButton>
        </Grid>
        {/* Explore our Insights, Tips and More Packages */}
        {/* <Box
          sx={{
            backgroundColor: "#FEFDF5",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 0,
              width: "100%",
            }}
          >
            <Grid
              container
              item
              xs={12}
              lg={10}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              sx={{ marginBottom: { xs: 3, md: 5 } }}
            >
              <Stack direction="row" spacing={1} mt={3}>
                <MKButton circular variant="outlined" color="black">
                  {pageTexts?.section6Button || ""}
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
                {pageTexts?.section6Title || ""}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{
                  textAlign: "center",
                  maxWidth: "90%",
                  margin: "0 auto",
                }}
              >
                {pageTexts?.section6Description || ""}
              </MKTypography>
            </Grid>

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
                ref={scrollContainerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                sx={{
                  overflowX: "auto",
                  paddingX: 2,
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  scrollbarWidth: "none",
                  flexWrap: "nowrap",
                  width: "100%",
                  gap: 2,
                }}
              >
                {blogCategories && blogCategories.length > 0
                  ? blogCategories.map((item, index) => (
                      <Grid
                        item
                        key={index}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3.5}
                        sx={{
                          flexShrink: 0,
                        }}
                      >
                        <Card
                          sx={{
                            boxShadow: "none",
                            backgroundColor: "#FEFDF5",
                            borderWidth: 1,
                            borderColor: "#C9C5BA",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                          }}
                        >
                          <CardActionArea
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              height: "100%",
                            }}
                          >
                            <CardMedia
                              component="img"
                              height="270px"
                              image={item?.Blog_posts?.featured_image_url}
                              sx={{
                                objectFit: "cover",
                                width: "100%",
                                margin: 0,
                                padding: 0,
                              }}
                              alt="Image"
                            />
                            <CardContent sx={{ flex: 1, padding: 2 }}>
                              <Typography
                                sx={{
                                  fontFamily: "Playfair Display, serif",
                                  fontSize: "25px",
                                  fontWeight: 400,
                                  marginBottom: 2,
                                  color: "#000000",
                                }}
                                variant="h5"
                              >
                                {item?.Blog_posts?.title}
                              </Typography>
                              <MKTypography
                                variant="subtitle2"
                                sx={{
                                  display: "-webkit-box",
                                  WebkitBoxOrient: "vertical",
                                  WebkitLineClamp: 3,
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  color: "#1A1814",
                                }}
                              >
                                {item?.Blog_posts?.description}
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
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    ))
                  : null}
              </Grid>

              <MKButton
                circular
                variant="contained"
                color="black"
                sx={{
                  paddingX: 5,
                  marginTop: 5,
                  marginBottom: 10,
                }}
                onClick={handleViewAllClick}
              >
                {pageTexts?.section6Button2 || ""}
              </MKButton>
            </Box>
          </Grid>
        </Box> */}
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
      </div>
    </div>
  );
}

export default Home;
