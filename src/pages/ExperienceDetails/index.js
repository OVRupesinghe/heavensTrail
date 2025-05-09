import React, { useState, useEffect, useRef } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import View from "layouts/sections/components/View";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import { ReactComponent as Walking } from "assets/icons/la_walking.svg";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactComponent as LiBeach } from "../../assets/icons/li_beach.svg";
import { useLocation } from "react-router-dom";
import { PageIDs } from "constants/pageId";
import CustomMap from "components/CustomMap";
import BookingForm from "components/InquiryForm";
import { fetchPropertyPageTexts, fetchPropertyPageImages } from "services/PropertyService";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import CategoryIcon from "@mui/icons-material/Category";
import GroupIcon from "@mui/icons-material/Group";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  UilBedDouble,
  UilUtensils,
  UilArrowUpRight,
  UilMountainsSun,
  UilCamera,
  UilPlaneDeparture,
  UilTicket,
  UilAngleLeftB,
  UilAngleRightB,
  UilAngleDown,
  UilCheck,
} from "@iconscout/react-unicons";
import FAQs from "components/FAQs";
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
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Footer from "components/Footer";
import { AccomadationPage } from "constants/images";
import { TourListingPage } from "constants/images";
import { fetchDestinationDataByID } from "services/DestinationService";
import NavBarTwo from "components/NavBarTwo";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";
import { fetchExperienceDetail, fetchFAQs } from "services/TourServices";
import { useParams } from "react-router-dom";
import NavBar from "components/NavBar";

function ExperienceDetails() {
  const scrollContainerRef = useRef(null);
  const firstItemRef = useRef(null);
  const lastItemRef = useRef(null);
  const location = useLocation();
  const { state } = location;
  const [isExpaned, setIsExpaned] = useState(true);
  const [experienceDetail, setExperienceDetail] = useState({});
  const [detailImages, setDetailImages] = useState([]);
  const { experienceId } = useParams();
  const [faq, setFaq] = useState([]);

  const getExperienceDetail = async () => {
    fetchExperienceDetail(experienceId).then((res) => {
      setExperienceDetail(res.data);
      const images = res.data?.images.map((img) => process.env.REACT_APP_BASE_URL + img.url);
      setDetailImages(images);
    });
  };

  const getFaq = async () => {
    fetchFAQs().then((res) => {
      setFaq(res.data);
    });
  };

  const cardsData2 = [
    {
      title: "Hiking and Trekking",
      image1: AccomadationPage.Hotel_Img_1,
      description:
        "An early morning hike to Ella Rock sounds is worthy to try out! The sunrise in the mountain gap is absolutely breath-taking.  Ella offers a variety of hiking and trekking opportunities, from the challenging climb to Ella Rock to the more leisurely walk up Little Adam's Peak.",

      activities: [
        {
          text: "Hiking",
          icon: <Walking />,
        },
        {
          text: "Scenery ",
          icon: <UilMountainsSun />,
        },
        {
          text: "photography",
          icon: <UilCamera />,
        },
      ],
    },
    {
      title: "Tea Plantation Tours",
      image1: AccomadationPage.Hotel_Img_1,
      description:
        "An early morning hike to Ella Rock sounds is worthy to try out! The sunrise in the mountain gap is absolutely breath-taking.  Ella offers a variety of hiking and trekking opportunities, from the challenging climb to Ella Rock to the more leisurely walk up Little Adam's Peak.",

      activities: [
        {
          text: "Hiking",
          icon: <Walking />,
        },
        {
          text: "Scenery ",
          icon: <UilMountainsSun />,
        },
        {
          text: "photography",
          icon: <UilCamera />,
        },
      ],
    },
    {
      title: "Zip Lining",
      image1: AccomadationPage.Hotel_Img_1,
      description:
        "An early morning hike to Ella Rock sounds is worthy to try out! The sunrise in the mountain gap is absolutely breath-taking.  Ella offers a variety of hiking and trekking opportunities, from the challenging climb to Ella Rock to the more leisurely walk up Little Adam's Peak.",

      activities: [
        {
          text: "Hiking",
          icon: <Walking />,
        },
        {
          text: "Scenery ",
          icon: <UilMountainsSun />,
        },
        {
          text: "photography",
          icon: <UilCamera />,
        },
      ],
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=400&q=80",
  ];

  const info = [
    {
      icon: <AccessTimeIcon style={{ color: "#AF4D06" }} />,
      label: "Duration",
      value: experienceDetail?.duration || "",
    },
    {
      icon: <PlaceIcon style={{ color: "#AF4D06" }} />,
      label: "Location",
      value: experienceDetail?.city?.name || "",
    },
    {
      icon: <CategoryIcon style={{ color: "#AF4D06" }} />,
      label: "Category",
      value: experienceDetail?.category || "No Category",
    },
    {
      icon: <GroupIcon style={{ color: "#AF4D06" }} />,
      label: "Pax Count",
      value: `${experienceDetail?.minPax || "2"} to ${experienceDetail?.maxPax || "20"} Pax`,
    },
  ];

  const [destinationDetails, setDestinationDetails] = useState(false);
  const [pageTexts, setPageTexts] = useState();
  const [pageImages, setPageImages] = useState();

  useEffect(() => {
    getExperienceDetail();
    getFaq();
    // getDestinationDetails();
    // getPropertyText();
    // getPropertyImages();
  }, []);

  const VISIBLE_COUNT = 3;

  const TourDetailsCard = () => {
    const [startIdx, setStartIdx] = useState(0);
    const total = detailImages?.length;

    const showPrev = () => {
      setStartIdx((prev) => (prev - 1 + total) % total);
    };

    const showNext = () => {
      setStartIdx((prev) => (prev + 1) % total);
    };

    const visibleImages = Array.from(
      { length: VISIBLE_COUNT },
      (_, i) => detailImages[(startIdx + i) % total]
    );

    return (
      <Box
        sx={{
          bgcolor: "#FEFDF5",
          maxWidth: 900,
          mx: "auto",
        }}
      >
        <Typography
          variant="body1"
          sx={{ mb: 2, fontSize: "16px", fontFamily: "Poppins, sans-serif", textAlign: "justify" }}
        >
          {experienceDetail?.overview || ""}
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2, flexDirection: "column" }}>
          {info.map((item, idx) => (
            <Grid item xs={12} sm={10} md={10} key={item.label} sx={{ display: "flex" }}>
              <Box display="flex" alignItems="center" gap={1}>
                {item.icon}
                <Box sx={{ flexDirection: "row", display: "flex" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      fontSize: "16px",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {item.label} :
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "16px", fontFamily: "Poppins, sans-serif", paddingLeft: "5px" }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 2,
            mb: 2,
            position: "relative",
            width: "100%",
            maxWidth: "100%",
            mx: "auto",
          }}
        >
          {/* Left Arrow */}
          <IconButton
            onClick={showPrev}
            sx={{
              position: "absolute",
              left: 10,
              zIndex: 2,
              bgcolor: "rgba(255,255,255,0.7)",
              borderRadius: "50%",
              boxShadow: 1,
              "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          {/* Images */}
          <Box sx={{ display: "flex", gap: 1, mx: 1, overflowX: "hidden" }}>
            {experienceDetail.images &&
              visibleImages.length > 0 &&
              visibleImages.map((img, idx) => (
                <Box
                  key={img + idx}
                  component="img"
                  src={img}
                  alt={`slide-${idx}`}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 3,
                    boxShadow: 2,
                    background: "#eee",
                  }}
                />
              ))}
          </Box>

          {/* Right Arrow */}
          <IconButton
            onClick={showNext}
            sx={{
              position: "absolute",
              right: -20,
              zIndex: 2,
              bgcolor: "rgba(255,255,255,0.7)",
              borderRadius: "50%",
              boxShadow: 1,
              "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const SnorkelingInfo = () => {
    const includedItems = [
      "Professional guide and snorkelling briefing",
      "All snorkelling equipment (mask, fins, and snorkel)",
      "Life jackets for safety",
      "Return boat transfer to and from Pigeon Island",
      "Park entry fees",
      "Refreshments (water and light snacks)",
    ];

    const whatToWear = [
      "Swimwear",
      "Light, comfortable clothing",
      "Sandals or flip-flops for easy removal",
      "Sunscreen and a hat for sun protection",
    ];

    const whatToBring = [
      "Towel",
      "Change of clothes",
      "Waterproof camera (optional)",
      "Personal medication (if required)",
    ];

    return (
      <>
        <Box
          p={4}
          sx={{
            backgroundColor: "#FEFDF5",
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
          }}
        >
          <Box mb={4}>
            {experienceDetail?.highlights &&
              experienceDetail.highlights.map((highlight, index) => {
                const [title, description] = highlight.value.split(/:(.+)/); // Split at first colon only

                return (
                  <Typography
                    key={index}
                    style={{ fontSize: "16px", fontFamily: "Poppins, sans-serif" }}
                    variant="body1"
                    gutterBottom
                  >
                    <strong style={{ fontSize: "16px", fontFamily: "Poppins, sans-serif" }}>
                      • {title.trim()}:
                    </strong>{" "}
                    {description?.trim()}
                  </Typography>
                );
              })}
          </Box>

          <Box mb={4}>
            <Typography variant="h6" gutterBottom>
              <strong style={{ fontSize: "18px", fontFamily: "Poppins, sans-serif" }}>What’s Included</strong>
            </Typography>
            <List>
              {experienceDetail?.inclusions &&
                experienceDetail.inclusions.map((item, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon>
                      <UilCheck color="#929E03" />
                    </ListItemIcon>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 400,
                      }}
                      gutterBottom
                    >
                      {item.value}
                    </Typography>
                  </ListItem>
                ))}
            </List>
          </Box>
        </Box>
        <Box
          p={4}
          sx={{
            backgroundColor: "#FEFDF5",
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
            marginTop: 2,
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                <strong
                  style={{
                    fontSize: "18px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What to Wear
                </strong>
              </Typography>
              <List>
                {experienceDetail?.whatToWear &&
                  experienceDetail.whatToWear.map((item, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon>
                        <ArrowRightAltIcon sx={{ color: "#d17b3f" }} />
                      </ListItemIcon>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 400,
                        }}
                        gutterBottom
                      >
                        {item.value}
                      </Typography>
                    </ListItem>
                  ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                <strong
                  style={{
                    fontSize: "18px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What to bring
                </strong>
              </Typography>
              <List>
                {experienceDetail?.whatToBring &&
                  experienceDetail.whatToBring.map((item, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon>
                        <ArrowRightAltIcon sx={{ color: "#d17b3f" }} />
                      </ListItemIcon>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: 400,
                        }}
                        gutterBottom
                      >
                        {item.value}
                      </Typography>
                    </ListItem>
                  ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  };

  const getPropertyText = async () => {
    // Usage
    fetchPropertyPageTexts(PageIDs.Destinations)
      .then((response) => {
        const headerTexts = response?.data.reduce((acc, item) => {
          acc[item.tag] = item.text;
          return acc;
        }, {});
        console.log("TEXTS", headerTexts);

        setPageTexts(headerTexts);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const getPropertyImages = () => {
    fetchPropertyPageImages(PageIDs.Home, 1)
      .then((response) => {
        const headerImages = response?.data.reduce((acc, item) => {
          acc[item.tag] = item.imgeUrl;
          return acc;
        }, {});
        setPageImages(headerImages);
        console.log("headerImages", headerImages);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const getDestinationDetails = () => {
    fetchDestinationDataByID(
      1,
      // PageIDs.DestinationDetails,
      PageIDs.Home,
      state?.destinationId
    )
      .then((response) => {
        console.log("fetchDestinationDataByID", response);

        setDestinationDetails(response?.data);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const scrollToLeft = () => {
    // Scroll to the left by 300px, you can adjust this value as needed
    if (firstItemRef.current) {
      firstItemRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  const scrollToRight = () => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
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
                image={item?.image1}
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
                        fontSize: "16px",
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: "30px",
                      }}
                    >
                      {item?.rating}
                    </MKTypography>
                    <Rating name="read-only" value={item?.rateValue} readOnly />
                  </Grid>
                </Grid>

                <Grid container mt={3} display="flex" flexDirection="row" lg={12}>
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="black"
                    sx={{
                      textAlign: "left",
                      maxWidth: "100%",
                      lineHeight: "19.5px",
                    }}
                  >
                    {item?.longDescription}
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
                image={item?.image1}
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
                    textAlign: "left",
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

                <Grid container sx={{ margin: 0 }}>
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
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const travelPcgs = [
    {
      title: "Luxury Escape to the Southern Coast",
      duration: "4 Nights, 6 Days",
      path: ["Airport", "Yala (2N)", "Weligama (1N)", "Ahungalle (1N)", "Airport"],
      iconSet: [
        <UilPlaneDeparture className="hover-icon" />,
        <UilTicket className="hover-icon" />,
        <UilUtensils className="hover-icon" />,
        <UilBedDouble className="hover-icon" />,
        <LiBeach
          className="hover-svg"
          sx={{
            transition: "stroke 0.3s ease",
          }}
        />,
      ],
      img: TourListingPage.Round_Tour_1,
    },
    {
      title: "Luxury Escape to the Misty Tea Country",
      duration: "4 Nights, 6 Days",
      path: [
        "Airport",
        "Sigiriya",
        "Dambulla (2N)",
        "Kandy",
        "Hatton (2N)",
        "Kithulgala",
        "Colombo",
        "Airport",
      ],
      iconSet: [
        <UilPlaneDeparture className="hover-icon" />,
        <UilTicket className="hover-icon" />,
        <UilUtensils className="hover-icon" />,
        <UilBedDouble className="hover-icon" />,
        <LiBeach
          className="hover-svg"
          sx={{
            transition: "stroke 0.3s ease",
          }}
        />,
      ],
      img: TourListingPage.Round_Tour_2,
    },
    {
      title: "Scenic Sri Lanka Trip -Soulmate Special",
      duration: "6 Nights, 7 Days",
      path: ["Airport ", "Yala (2N)", "Weligama (1N)", "Ahungalle (1N)", "Airport"],
      iconSet: [
        <UilPlaneDeparture className="hover-icon" />,
        <UilTicket className="hover-icon" />,
        <UilUtensils className="hover-icon" />,
        <UilBedDouble className="hover-icon" />,
        <LiBeach
          className="hover-svg"
          sx={{
            transition: "stroke 0.3s ease",
          }}
        />,
      ],
      img: TourListingPage.Round_Tour_3,
    },
    {
      title: "Hillside Trails in Nuwara Eliya, Ella, & Kandy",
      duration: "6 Nights, 7 Days",
      path: ["Airport", "Yala (2N)", "Weligama (1N)", "Ahungalle (1N)", "Airport"],
      iconSet: [
        <UilPlaneDeparture className="hover-icon" />,
        <UilTicket className="hover-icon" />,
        <UilUtensils className="hover-icon" />,
        <UilBedDouble className="hover-icon" />,
      ],
      img: TourListingPage.Round_Tour_4,
    },
    {
      title: "The Archaeological Marvels Package",
      duration: "6 Nights, 7 Days",
      path: ["Airport", "Yala (2N)", "Weligama (1N)", "Ahungalle (1N)", "Airport"],
      iconSet: [
        <UilPlaneDeparture className="hover-icon" />,
        <UilTicket className="hover-icon" />,
        <UilUtensils className="hover-icon" />,
        <UilBedDouble className="hover-icon" />,
      ],
      img: TourListingPage.Round_Tour_5,
    },
    {
      title: "Divine Sri Lanka Getaway - Ramayana Edition",
      duration: "6 Nights, 7 Days",
      path: ["Airport", "Yala (2N)", "Weligama (1N)", "Ahungalle (1N)", "Airport"],
      iconSet: [
        <UilPlaneDeparture className="hover-icon" />,
        <UilTicket className="hover-icon" />,
        <UilUtensils className="hover-icon" />,
        <UilBedDouble className="hover-icon" />,
      ],
      img: TourListingPage.Round_Tour_6,
    },
  ];

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBar />
      <div style={{ padding: 15, marginTop: "-4.5rem" }}>
        {experienceDetail && experienceDetail.heroImage ? (
          <HeaderThree
            title={experienceDetail.title}
            backgroundImage={
              process.env.REACT_APP_BASE_URL + experienceDetail.heroImage.url || AccomadationPage.Header
            }
            subHead={experienceDetail.description}
            pageId={5638}
          />
        ) : (
          <HeaderThree title={""} backgroundImage={AccomadationPage.Header} subHead={""} pageId={5638} />
        )}
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
                    Experience Overview
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  <TourDetailsCard />
                </AccordionDetails>
              </Accordion>
              <Accordion
                disableGutters // Removes padding and default spacing
                sx={{
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
                    Highlights
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  <SnorkelingInfo />
                </AccordionDetails>
              </Accordion>
              <Accordion
                disableGutters // Removes padding and default spacing
                sx={{
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
                    Location Map
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  <Grid
                    item
                    xs={12}
                    lg={12}
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", lg: "flex-start" },
                      alignItems: { xs: "center", lg: "flex-start" },
                      height: "400px",
                    }}
                  >
                    <CustomMap />
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Accordion
                disableGutters // Removes padding and default spacing
                sx={{
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
                    FAQs
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  <Box
                    p={4}
                    sx={{
                      backgroundColor: "#FEFDF5",
                      borderRadius: "12px",
                      border: "1px solid #e0e0e0",
                      marginTop: 2,
                    }}
                  >
                     <FAQs title="Home FAQ" faqs={faq} />
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion
                disableGutters // Removes padding and default spacing
                sx={{
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
                    Inquiry
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  <BookingForm />
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default ExperienceDetails;
