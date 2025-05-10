import React, { useState, useEffect, useContext } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import weddingBgImg from "../../assets/images/homePage/wedding_bg.jpg";
import weddingImg from "../../assets/images/homePage/wedding.jpeg";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import Footer from "components/Footer";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";
import { DestinationWeddingPage } from "constants/images";
import { fetchFAQs, fetchWeddings } from "services/TourServices";
import FAQs from "components/FAQs";
import { useLocation } from "react-router-dom";
import { iconMappings } from "../../constants/icons";
import NavBar from "components/NavBar";
import { CountryContext } from "../../context/CountryContext";

function Weddings() {
  const [pageTexts, setPageTexts] = useState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState();
  const [faq, setFaq] = useState([]);
  const [weddings, setWeddings] = useState([]);
  const [filteredWeddings, setFilteredWeddings] = useState([]);
  const { countries, loading, selectedCountryCode } = useContext(CountryContext);

  const location = useLocation();

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


  const getFaq = async () => {
    fetchFAQs().then((res) => {
      setFaq(res.data);
    });
  };

  const getWeddings = async () => {
    fetchWeddings().then((res) => {
      setWeddings(res.data);
    });
  };

  const filterWeddingsByCountry = async () => {
    const filteredPackages = weddings.filter((pkg) =>
      pkg.countries.some((country) => country.shortCode == selectedCountryCode)
    );
    setFilteredWeddings(filteredPackages);
  };
  useEffect(() => {
    getFaq();
    getWeddings();
    filterWeddingsByCountry();
  }, []);

  useEffect(() => {
    filterWeddingsByCountry();
  }, [selectedCountryCode, weddings]);

  const adventures = [
    {
      title: "Wedding Planning",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: DestinationWeddingPage.Featurs_1,
    },
    {
      title: "Exquisite Venues",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: DestinationWeddingPage.Featurs_2,
    },
    {
      title: "Comprehensive Services",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: DestinationWeddingPage.Featurs_3,
    },
    {
      title: "Cultural Touches",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: DestinationWeddingPage.Featurs_4,
    },
    {
      title: "Luxury Accommodations",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: DestinationWeddingPage.Featurs_5,
    },
    {
      title: "Seamless Logistics",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: DestinationWeddingPage.Featurs_6,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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

  const CustomCard = ({ image, title, description, description2, index }) => {
    const isEven = index % 2 === 0;

    return (
      <Card
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : isEven ? "row" : "row",
          marginBottom: "20px",
          marginTop: "25px",
          borderRadius: "15px",
          backgroundColor: "#FEFDF5",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          alt={title}
          image={image}
          title={title}
          style={{
            maxHeight: "500px",
            width: isMobile ? "93%" : "40%",
            borderRadius: "15px",
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
              textAlign: "justify",
            }}
          >
            {title}
          </MKTypography>
          <MKTypography
            color="black"
            sx={({ breakpoints }) => ({
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "30px",
              textAlign: "justify",
              marginTop: isMobile ? "10px" : "20px",
              [breakpoints.down("sm")]: {
                textAlign: "center",
              },
            })}
          >
            {description}
          </MKTypography>
          <MKTypography
            color="black"
            sx={({ breakpoints }) => ({
              fontSize: "16px",
              textAlign: "justify",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "30px",
              marginTop: isMobile ? "10px" : "20px",
              [breakpoints.down("sm")]: {
                textAlign: "center",
              },
            })}
          >
            {description2}
          </MKTypography>
        </CardContent>
      </Card>
    );
  };

  return (
    <div style={{ backgroundColor: "#FEFDF5", marginTop: "-4.5rem" }}>
      <NavBar />
      <div style={{ padding: 15 }}>
        <HeaderThree
          title={"Destination Weddings"}
          description={
            "Inhale the fresh mountain air while enjoying the scenic beauty of the misty hills is a favourite reasons to visit Ella, Sri Lanka"
          }
          subHead={"MICE Tours"}
          pageId={987}
          backgroundImage={weddingBgImg}
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
                image={weddingImg}
                title={"Destination Weddings"}
                description={
                  "Imagine a love story set in the beautiful paradise of Sri Lanka. Picture your wedding ceremony on palmfringed beaches, historical backdrops, and lush gardens. Your dream destination wedding becomes a reality in this stunning setting, where every detail is pure magic.Let the waves create a soothing soundtrack, and the tropical breeze adds to the celebration of your special day."
                }
                description2={
                  " It's not just a wedding; it's the start of your forever journey right in the heart of Sri Lanka's captivating beauty. Holding hands with your beloved, step into this enchanting love story, where the island's charm fills every moment with unmatched romance and beauty."
                }
                index={1}
              />
            </Grid>
          </Grid>
        </Box>

        {/*Wedding packages*/}
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
            marginBottom: "40px",
            backgroundColor: "#FEFDF5",
            marginTop: 7,
          }}
        >
          <Container
            id="package"
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
                  Heaven's Trail MICE Experiences
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
                Wedding Packages
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={({ breakpoints }) => ({
                  [breakpoints.down("sm")]: {
                    alignSelf: "center",
                  },
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                  maxWidth: "90%",
                })}
              >
                Crafting modern travel adventures that blend comfort with excitement. Explore vibrant cultures
                and stunning landscapes, creating lifelong memeories.
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
                {weddings && filteredWeddings.length > 0 ? (
                  filteredWeddings.map((item, index) => (
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
                          backgroundColor: "#FEFDF5",
                          borderWidth: 1,
                          borderColor: "#C9C5BA",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <CardActionArea
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <CardMedia
                            component="img"
                            height={"270px"}
                            image={process.env.REACT_APP_BASE_URL + item?.thumbnail?.url}
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
                            <Divider variant="middle" sx={{ height: 2, marginTop: 1, marginBottom: 1 }} />
                            <MKTypography variant="subtitle2">{item?.description}</MKTypography>
                            <Divider variant="middle" sx={{ height: 2, marginTop: 1, marginBottom: 1 }} />
                            <div style={{ display: "flex", gap: "10px" }}>
                              {item?.icons &&
                                item.icons.length > 0 &&
                                item?.icons.map((iconItem) => {
                                  return (
                                    <React.Fragment key={iconItem.id}>
                                      {iconMappings[iconItem.icon.toLowerCase()] || <span>Unknown Icon</span>}
                                    </React.Fragment>
                                  );
                                })}
                            </div>
                            <Divider variant="middle" sx={{ height: 2, marginTop: 1, marginBottom: 1 }} />
                            <Grid container display={"flex"} alignItems="center" justifyContent={"flex-end"}>
                              <MKButton
                                circular
                                variant="contained"
                                color="black"
                                sx={{
                                  marginTop: 1,
                                  width: isMobile ? "100%" : "35%",
                                }}
                              >
                                {"Inquire Us"}
                              </MKButton>
                            </Grid>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))
                ) : (
                  <MKTypography
                    variant="h6"
                    fontWeight="bold"
                    color="black"
                    sx={{ textAlign: "center", maxWidth: "100%", margin: "auto", marginTop: "1rem" }}
                  >
                    {"No Weddings to display"}
                  </MKTypography>
                )}
              </Grid>
            </Box>
          </Grid>
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
                  Heaven's Trail MICE Experiences
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
                {"Our Features"}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%", fontFamily: "Poppins, sans-serif" }}
              >
                {
                  "Our range of featured services ensures that every aspect of your MICE tour is meticulously planned and executed to perfection"
                }
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
                      borderWidth: 1,
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
                {pageTexts?.section4Description}
              </MKTypography>
            </Grid>
          </Container>

          <Box sx={{ width: "70%", marginBottom:"3rem" }}>
            <FAQs title="Home FAQ" faqs={faq} />
          </Box>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default Weddings;
