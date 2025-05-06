import React, { useState, useEffect, useMemo } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import View from "layouts/sections/components/View";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { ReactComponent as LiBeach } from "../../assets/icons/li_beach.svg";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./styles.css";
import {
  UilPlaneDeparture,
  UilTicket,
  UilUtensils,
  UilBedDouble,
  UilBuilding,
  UilCalender,
  UilGlassMartini,
  UilPresentation,
  UilShoppingCart,
  UilDiceFive,
  UilFavorite,
} from "@iconscout/react-unicons";
import soulmateImg from "assets/images/homePage/soulmate.jpeg";
import adventureIcon1 from "assets/images/homePage/adventureIcon1.png";
import adventureIcon2 from "assets/images/homePage/adventureIcon2.png";
import adventureIcon3 from "assets/images/homePage/adventureIcon3.png";
import adventureIcon4 from "assets/images/homePage/adventureIcon4.png";
import Icon from "@mui/material/Icon";
import { iconMappings } from "constants/icons";
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
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import Footer from "components/Footer";
import galleImg from "assets/images/homePage/galle.jpeg";
import firBall from "assets/images/homePage/fireball.jpeg";
import NavBar from "components/NavBar";
import NavBarTwo from "components/NavBarTwo";
import { MeetingsPage } from "constants/images";
import breakpoints from "assets/theme/base/breakpoints";
import { PageIDs } from "constants/pageId";
import FAQs from "components/FAQs";
import { useLocation } from "react-router-dom";
import { fetchMeetings, fetchFAQs } from "services/TourServices";

function Meetings() {
  const location = useLocation();
  const [meetings, setMeetings] = useState([]);
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }, 100); // Small delay to allow DOM updates
  }, [location]);

  const cardsData = [
    {
      image: MeetingsPage.Meeting_Card_1,
      title: "MEETINGS AND CONFERENCES",
      description:
        "From Meetings to conferences, our dedicated team ensures success with state-of-the-art facilities,seamless logistics, and personalized service.",
      description2:
        "Discover Sri Lanka's stunning beauty in venues that truly represent this amazing island. Whether it's peaceful beaches or lively cultural spots, each place adds a unique touch to your event. We'll make an experience that mixes your work goals with Sri Lanka's charm. With Heaven's Trail, your conference won't just succeed – it will be truly remarkable.",
    },
  ];

  const meetingPackageData = [
    {
      image: MeetingsPage.Meeting_Pck_1,
      title: "The vibrant city of Colombo",
      duration: "3 Nights, 4 Days",
      facilities: [
        {
          icon: <UilPlaneDeparture />,
          text: "Return Airport Transfers",
        },
        {
          icon: <UilBuilding />,
          text: "Luxury Hotel Stay",
        },
        {
          icon: <UilUtensils />,
          text: "Breakfast, Lunch & Dinner for 3 days",
        },
        {
          icon: <UilPresentation />,
          text: "Meeting facility for 2 hours",
        },
        {
          icon: <UilCalender />,
          text: "A full day of meeting",
        },
        {
          icon: <UilGlassMartini />,
          text: "Evening cocktail & gala dinner",
        },
        {
          icon: <UilShoppingCart />,
          text: "Half day shopping tour of Colombo",
        },
        {
          icon: <UilDiceFive />,
          text: "Explore casino at Night",
        },
      ],
      packages: [
        {
          key: "standard",
          value: "Standard",
        },
        {
          key: "deluxe",
          value: "Deluxe",
        },
        {
          key: "premium",
          value: "Premium",
        },
      ],
      packageObj: [
        {
          paxCount: "25 - 49",
          price: "USD 219.99",
          type: "Per Person Sharing a TWIN Room",
        },
        {
          paxCount: "50 - 99",
          price: "USD 329.99",
          type: "Per Person Sharing a TWIN Room",
        },
        {
          paxCount: "100 - 149",
          price: "USD 439.99",
          type: "Per Person Sharing a TWIN Room",
        },
      ],
    },
    {
      image: MeetingsPage.Meeting_Pck_2,
      title: "Meetings by the Beach",
      duration: "3 Nights, 4 Days",
      facilities: [
        {
          icon: <UilPlaneDeparture />,
          text: "Return Airport Transfers",
        },
        {
          icon: <UilBuilding />,
          text: "Luxury Hotel Stay",
        },
        {
          icon: <UilUtensils />,
          text: "Breakfast, Lunch & Dinner for 3 days",
        },
        {
          icon: <UilPresentation />,
          text: "Meeting facility for 2 hours",
        },
        {
          icon: <UilCalender />,
          text: "A full day of meeting",
        },
        {
          icon: <UilGlassMartini />,
          text: "Evening cocktail & gala dinner",
        },
        {
          icon: <UilShoppingCart />,
          text: "Half day shopping tour of Colombo",
        },
        {
          icon: <UilDiceFive />,
          text: "Explore casino at Night",
        },
      ],
      packages: [
        {
          key: "standard",
          value: "Standard",
        },
        {
          key: "deluxe",
          value: "Deluxe",
        },
        {
          key: "premium",
          value: "Premium",
        },
      ],
      packageObj: [
        {
          paxCount: "25 - 49",
          price: "USD 219.99",
          type: "Per Person Sharing a TWIN Room",
        },
        {
          paxCount: "50 - 99",
          price: "USD 329.99",
          type: "Per Person Sharing a TWIN Room",
        },
        {
          paxCount: "100 - 149",
          price: "USD 439.99",
          type: "Per Person Sharing a TWIN Room",
        },
      ],
    },
    {
      image: MeetingsPage.Meeting_Pck_3,
      title: "Meetings in the Cultural Triangle",
      duration: "3 Nights, 4 Days",
      facilities: [
        {
          icon: <UilPlaneDeparture />,
          text: "Return Airport Transfers",
        },
        {
          icon: <UilBuilding />,
          text: "Luxury Hotel Stay",
        },
        {
          icon: <UilUtensils />,
          text: "Breakfast, Lunch & Dinner for 3 days",
        },
        {
          icon: <UilPresentation />,
          text: "Meeting facility for 2 hours",
        },
        {
          icon: <UilCalender />,
          text: "A full day of meeting",
        },
        {
          icon: <UilGlassMartini />,
          text: "Evening cocktail & gala dinner",
        },
        {
          icon: <UilShoppingCart />,
          text: "Half day shopping tour of Colombo",
        },
        {
          icon: <UilDiceFive />,
          text: "Explore casino at Night",
        },
      ],
      packages: [
        {
          key: "standard",
          value: "Standard",
        },
        {
          key: "deluxe",
          value: "Deluxe",
        },
        {
          key: "premium",
          value: "Premium",
        },
      ],
      packageObj: [
        {
          paxCount: "25 - 49",
          price: "USD 219.99",
          type: "Per Person Sharing a TWIN Room",
        },
        {
          paxCount: "50 - 99",
          price: "USD 329.99",
          type: "Per Person Sharing a TWIN Room",
        },
        {
          paxCount: "100 - 149",
          price: "USD 439.99",
          type: "Per Person Sharing a TWIN Room",
        },
      ],
    },
  ];

  const adventures = [
    {
      title: "Wedding Planning",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: MeetingsPage.Meeting_Feature_1,
    },
    {
      title: "Exquisite Venues",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: MeetingsPage.Meeting_Feature_2,
    },
    {
      title: "Comprehensive Services",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: MeetingsPage.Meeting_Feature_3,
    },
    {
      title: "Cultural Touches",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: MeetingsPage.Meeting_Feature_4,
    },
    {
      title: "Luxury Accommodations",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: MeetingsPage.Meeting_Feature_5,
    },
    {
      title: "Seamless Logistics",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: MeetingsPage.Meeting_Feature_6,
    },
  ];

  const getMeetings = async () => {
    fetchMeetings()
      .then((data) => {
        setMeetings(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

    const getFaq = async () => {
      fetchFAQs().then((res) => {
        setFaq(res.data);
      });
    };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    getMeetings();
    getFaq();
    // Function to check the window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // You can adjust the width as per your requirement
    };

    handleResize(); // Check the initial window size
    window.addEventListener("resize", handleResize); // Add resize event listener

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [selected, setSelected] = useState("standard");
  const handleButtonClick = (value) => {
    setSelected(value);
  };

  const ToggleButtonGroup = ({ setPricepackge }) => {
    const packages = [
      { key: "standard", value: "Standard" },
      { key: "deluxe", value: "Deluxe" },
      { key: "premium", value: "Premium" },
    ];
    return (
      <div className="toggle-button-group">
        {packages?.map((item, index) => {
          return (
            <button
              key={index}
              style={{ fontSize: "0.9rem" }}
              className={`toggle-button ${selected === item.key ? "selected" : ""}`}
              onClick={() => {
                handleButtonClick(item.key);
                setPricepackge(item.key);
              }}
            >
              {index === 2 && <UilFavorite style={{ color: "#aad10c", width: "1rem", marginRight: "5px" }} />}{" "}
              {item.value}
            </button>
          );
        })}
      </div>
    );
  };

  const CustomCard = ({ image, title, description, description2, index }) => {
    const isEven = index % 2 === 0;

    return (
      <Card
        sx={({ breakpoints }) => ({
          display: "flex",
          flexDirection: isMobile ? "column" : isEven ? "row" : "row",
          marginBottom: "20px",
          marginTop: "20px",
          borderRadius: "15px",
          backgroundColor: "#FEFDF5",
          boxShadow: "none",
          [breakpoints.down("sm")]: {
            justifyContent: "center",
            alignItems: "center",
          },
        })}
      >
        <CardMedia
          component="img"
          alt={title}
          image={image}
          title={title}
          style={{
            width: isMobile ? "93%" : "40%",
            borderRadius: "15px",
            margin: 0,
          }}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            padding: isMobile ? "10px" : "20px",
          }}
        >
          <MKTypography
            color="black"
            sx={{
              fontSize: "34px",
              fontFamily: "Playfair Display, serif",
            }}
          >
            {title}
          </MKTypography>
          <MKTypography
            color="black"
            sx={{
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "30px",
              marginTop: isMobile ? "10px" : "20px",
            }}
          >
            {description}
          </MKTypography>
          <MKTypography
            color="black"
            sx={{
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "30px",
              marginTop: isMobile ? "10px" : "20px",
            }}
          >
            {description2}
          </MKTypography>
        </CardContent>
      </Card>
    );
  };

  const [packageType, setPackageType] = useState("standard");
  const CustomPackageCard = ({
    key,
    image,
    title,
    description,
    description2,
    index,
    facilities,
    packages,
    packageObj,
    duration,
    standardPrices,
    deluxePrices,
    premiumPrices,
  }) => {
    const priceMap = {
      standard: standardPrices,
      deluxe: deluxePrices,
      premium: premiumPrices,
    };

    // const [pkgList, setPkgList] = useState([]);

    const setPkgType = (type) => {
        setPackageType(type)
    }

    const pkgList = useMemo(() => {
      return priceMap[packageType];
    }, [packageType]);

    return (
      <Card
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          marginBottom: "20px",
          borderRadius: "16px",
          backgroundColor: "#FEFDF5",
          boxShadow: "none",
          border: "solid",
          borderColor: "#C9C5BA",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <CardMedia
          component="img"
          alt={title}
          image={process.env.REACT_APP_BASE_URL + image}
          title={title}
          style={{
            width: isMobile ? "93%" : "35%",
            borderRadius: "15px",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            margin: 0,
          }}
        />
        <CardContent
          style={{
            width: "65%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: isMobile ? "10px" : "15px",
            flex: 1, // Make it fill remaining space
            boxSizing: "border-box",
          }}
        >
          <MKButton
            className="hover-button"
            size="small"
            circular
            variant="outlined"
            color="black"
            sx={({ breakpoints }) => ({
              [breakpoints.down("sm")]: {
                width: "100%",
              },
              marginTop: "10px",
              marginBottom: "4px",
              width: "30%",
            })}
          >
            {duration.nights + " Nights & " + duration.days + " Days"}
          </MKButton>

          <MKTypography
            color="black"
            sx={{
              fontSize: "34px",
              fontFamily: "Playfair Display, serif",
              textAlign: "left",
              lineHeight: "130%",
            }}
          >
            {title}
          </MKTypography>
          <Divider variant="middle" sx={{ height: 2, width: "100%", margin: 1 }} />
          <Grid
            container
            sx={{
              width: "100%",
              flexDirection: "row",
              display: "flex",
            }}
          >
            {facilities.map((facility, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <Grid
                  sx={{
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                    marginRight: 3,
                  }}
                >
                  <React.Fragment key={facility.icon?.id}>
                    {iconMappings[facility.icon?.icon?.toLowerCase()] || <span>Unknown Icon</span>}
                  </React.Fragment>
                  <MKTypography
                    color="black"
                    sx={{
                      fontSize: "13px",
                      fontFamily: "Poppins, sans-serif",
                      lineHeight: "35px",
                      marginLeft: 2,
                    }}
                  >
                    {facility?.name}
                  </MKTypography>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Divider variant="middle" sx={{ height: 2, width: "100%", margin: 1 }} />
          <MKTypography
            color="black"
            sx={{
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "100%",
            }}
          >
            Pricing starts at
          </MKTypography>
          <ToggleButtonGroup setPricepackge={setPkgType} />
          <Grid
            container
            sx={({ breakpoints }) => ({
              [breakpoints.down("sm")]: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            })}
          >
            <Grid
              mr={1}
              mt={1}
              key={index}
              size={{ xs: 2, sm: 4, md: 4 }}
              sx={{ display: "flex", flexDirection: "row", gap: "10px" }}
            >
              {
                pkgList &&
                pkgList.length > 0 &&
                pkgList.map((item, index) => (
                  <Grid
                  key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 5,
                      borderWidth: "1px",
                      padding: 2,
                      border: "solid",
                      borderColor: "#C9C5BA",
                      textAlign: { xs: "center", md: "left" },
                      minWidth: "200px",
                    }}
                  >
                    <MKTypography
                      color="black"
                      sx={{
                        fontFamily: "Playfair Display, serif",
                        fontSize: "20px",
                        lineHeight: "100%",
                      }}
                    >
                      No of Pax: {item.minPax}
                    </MKTypography>
                    <Divider
                      sx={{
                        opacity: 1,
                        backgroundColor: "#C9C5BA",
                        marginTop: 1,
                        marginBottom: 1,
                        width: "100%",
                      }}
                      variant="fullWidth"
                    />
                    <MKTypography
                      color="black"
                      sx={({ breakpoints, typography: { size } }) => ({
                        fontSize: "20px",
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: "100%",
                      })}
                    >
                      {item.price}
                    </MKTypography>
                    <MKTypography
                      color="#1A1814"
                      sx={({ breakpoints, typography: { size } }) => ({
                        fontSize: "12px",
                        fontFamily: "Poppins, sans-serif",
                        lineHeight: "100%",
                      })}
                    >
                      {item.priceNote}
                    </MKTypography>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBar />
      <div style={{ padding: 15 , marginTop: "-4.5rem"}}>
        <HeaderThree
          title="MEETINGS & CONFERENCES"
          description="Inhale the fresh mountain air, while enjoying the scenic beauty of the misty hills is a favorite reasons to visit Ella, Sri Lanka"
          backgroundImage={MeetingsPage.Header}
          subHead={"MICE Tours"}
          pageId={143}
        />
      </div>

      <div style={{ overflowX: "hidden" }}>
        <Box
          style={{
            backgroundColor: "#FEFDF5",
          }}
        >
          <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={12} sm={6} lg={10} key={1}>
              <CustomCard
                image={MeetingsPage.Meeting_Card_1}
                title={"MEETINGS AND CONFERENCES"}
                description={
                  "From Meetings to conferences, our dedicated team ensures success with state-of-the-art facilities,seamless logistics, and personalized service."
                }
                description2={
                  "Discover Sri Lanka's stunning beauty in venues that truly represent this amazing island. Whether it's peaceful beaches or lively cultural spots, each place adds a unique touch to your event. We'll make an experience that mixes your work goals with Sri Lanka's charm. With Heaven's Trail, your conference won't just succeed – it will be truly remarkable."
                }
                index={1}
              />
            </Grid>
          </Grid>
        </Box>

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
            id="package"
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
                  Heaven’s Trail MICE Experiences
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
                Meeting Packages
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                Crafting modern travel adventures that blend comfort with excitement. Explore vibrant cultures
                and stunning landscapes, creating lifelong memories!
              </MKTypography>
            </Grid>
          </Container>
          <Box
            style={{
              width: "100%",
              backgroundColor: "#FEFDF5",
            }}
          >
            <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center" }}>
              {meetings &&
                meetings.length > 0 &&
                meetings.map((card, index) => (
                  <Grid item xs={12} sm={6} lg={10} key={index}>
                    <CustomPackageCard
                      key={index}
                      image={card.thumbnail?.url}
                      title={card.title}
                      description={card.description}
                      description2={card.description}
                      index={index}
                      facilities={card?.facilities}
                      // packages={card?.packages}
                      // packageObj={card?.packageObj}
                      standardPrices={card.standardPrices}
                      deluxePrices={card.deluxePrices}
                      premiumPrices={card.premiumPrices}
                      duration={card?.duration}
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>

        {/* Create your own adventure SECTION */}
        <Grid
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
                  Heaven’s Trail MICE Experiences
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
                Our Features
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                Our range of featured services ensures that every aspect of your MICE tour is meticulously
                planned and executed to perfection.
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
                marginBottom: 6,
              }}
              container
              spacing={2}
            >
              {adventures.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} lg={4}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "16px",
                      backgroundColor: "#EEECE2",
                      boxShadow: "none",
                      alignItems: "center",
                      textAlign: "center",
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
          </Container>
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
                  FAQs
                </MKButton>
              </Stack>
              <MKTypography
                variant="h1"
                color="black"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                Your Questions Answered
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

          <FAQs title="Meeting" faqs={faq} />
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default Meetings;
