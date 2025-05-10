import React, { useState, useEffect } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import FAQs from "components/FAQs";
import MKBox from "components/MKBox";
import NavBar from "components/NavBar";
import {
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import Footer from "components/Footer";
import { AboutUsPage } from "constants/images";
import { fetchFAQs } from "services/TourServices";

function AboutUs() {
  const [pageTexts, setPageTexts] = useState();
  const [pageImages, setPageImages] = useState();
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    // getPropertyImages();
    // getPropertyText();
    getFaq();
  }, []);

  const getFaq = async () => {
    fetchFAQs().then((res) => {
      setFaq(res.data);
    });
  };

  const cardsData = [
    {
      image: AboutUsPage.About_Us_Card,
      title: "sadasdas",
      description:
        "Heaven's Trail is a proud subsidiary of a respected Sri Lankan group of companies, offering extraordinary journeys across Sri Lanka with support from our hotels, agriculture ventures, and event industry ties in Australia. As a locally owned and Sri Lanka Tourist Board Approved Destination Management Company (DMC), we specialize in crafting personalized holidays that showcase the island’s diverse landscapes, rich heritage, and warm hospitality.",
      description2:
        'Sri Lanka, often called the "Pearl of the Indian Ocean," is a tropical paradise with a unique blend of stunning beaches, lush tea estates, vibrant wildlife, and ancient cultural sites. Our dedicated team leverages deep local expertise to create memorable itineraries that highlight the best of Sri Lanka, from its 8 UNESCO World Heritage Sites to its pristine coastlines and majestic national parks.',
      btnText: "Contact Us",
    },
  ];

  const adventures = [
    {
      title: "Custom Tour Packages",
      des: "Our expert wedding planners work with you to customize every detail, ensuring your wedding day reflects your unique love story.",
      img: AboutUsPage.About_Us_Feature_1,
    },
    {
      title: "MICE Packages",
      des: "Our MICE packages offer seamless planning for corporate events, including meetings, incentive trips, conferences, and exhibitions. With tailored solutions, premium venues, and professional services, we ensure every event is impactful and hassle-free.",
      img: AboutUsPage.About_Us_Feature_2,
    },
    {
      title: "Comprehensive Custom Tour Planner",
      des: "Plan your dream vacation effortlessly with our Comprehensive Custom Tour Planner, offering tailored itineraries, expert recommendations, and seamless arrangements to suit your unique preferences and travel goals.",
      img: AboutUsPage.About_Us_Feature_3,
    },
    {
      title: "Special Interest Tours",
      des: "Our Special Interest Tours are designed for travelers with unique passions and hobbies, offering curated experiences that cater to specific interests such as wildlife, heritage, adventure, wellness, or culinary exploration. Each tour is thoughtfully crafted to provide deep engagement and memorable moments.",
      img: AboutUsPage.About_Us_Feature_4,
    },
    {
      title: "24/7 Customer Support",
      des: "Our 24/7 Customer Support ensures that assistance is always just a call or message away. Whether you need help with bookings, itinerary adjustments, or travel advice, our dedicated team is available around the clock to provide prompt and reliable support.",
      img: AboutUsPage.About_Us_Feature_5,
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

  const CustomCard = ({ image, title, description, description2, index, btnText }) => {
    const isEven = index % 2 === 0;

    return (
      <Card
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : isEven ? "row" : "row-reverse",
          marginBottom: "20px",
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
            borderRadius: "15px",
            height: "500px",
            flex: 1,
          }}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            padding: isMobile ? "10px" : "20px",
            flex: 1,
          }}
        >
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
          <MKButton
            circular
            variant="contained"
            color="black"
            sx={{
              marginTop: 2,
              width: isMobile ? "100%" : "35%",
            }}
          >
            {btnText}
          </MKButton>
        </CardContent>
      </Card>
    );
  };

  const btnArray = [
    {
      title: "Who We Are",
    },
    {
      title: "Why Choose Us",
    },
    {
      title: "Our Features",
    },
  ];

  const whyChooseUSArra = [
    {
      title: "Personalized Itineraries",
      des: "At Heaven’s Trail, we understand that every traveler is unique. Our team of experts works closely with you to craft tailor-made itineraries that cater to your interests, preferences, and travel style. Whether you seek adventure, relaxation, culture, or nature, we ensure a personalized experience that exceeds your expectations.",
    },
    {
      title: "Local Expertise & Trusted Partnerships",
      des: "As a locally owned and Sri Lanka Tourist Board Approved Destination Management Company, we have deep roots in the community and strong partnerships with trusted local providers. Our insider knowledge allows us to offer authentic experiences, from hidden gems to popular landmarks, with unparalleled attention to detail and quality.",
    },
    {
      title: "Commitment to Sustainability",
      des: "We believe in responsible tourism that supports local communities and protects the environment. Our tours are designed to minimize the ecological footprint while maximizing positive impact. By choosing Heaven's Trail, you are not just exploring Sri Lanka, but also contributing to its preservation for future generations.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBar />
      <div style={{ padding: 15 }}>
        <HeaderTwo
          title={"About Us"}
          buttonArray={btnArray}
          backgroundImage={AboutUsPage.Header}
          pageId={987}
        />
      </div>
      <div style={{ overflowX: "hidden" }}>
        {/*Whoe we are*/}
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
                {"Who We Are"}
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
          <Box
            style={{
              backgroundColor: "#FEFDF5",
            }}
          >
            <Grid container spacing={4} sx={{ display: "flex", justifyContent: "center" }}>
              {cardsData.map((card, index) => (
                <Grid item xs={12} sm={6} lg={10} key={index}>
                  {console.log("CARDDDD", card)}
                  <CustomCard
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    description2={card.description2}
                    index={index}
                    btnText={card?.btnText}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* WHY choose US */}
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
                {"Why Choose Heaven's Trail?"}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {
                  "Choosing Heaven’s Trail for your accommodation means opting for quality, comfort, and a seamless experience tailored to your needs."
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
              {whyChooseUSArra.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} lg={4}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "16px",
                      backgroundColor: "#EEECE2",
                      boxShadow: "none",
                      borderWidth: 1,
                      minHeight: "350px",
                    }}
                  >
                    <MKTypography
                      color="#1A1814"
                      mb={2}
                      sx={{
                        fontSize: "24px",
                        fontFamily: "Playfair Display, serif",
                        fontWeight: 400,
                        width: "70%",
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

        <Grid
          lg={11}
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#FEFDF5",
            marginTop: 7,
          }}
        >
          <MKBox
            display="flex"
            alignItems="center"
            justifySelf="center"
            pt={4}
            pb={4}
            sx={{
              backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
                `${linearGradient("#BFCF0F", "#818B0C")}, url(${""})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",

              margin: 1,
              borderRadius: 5,
              width: "85%",
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
                  fontSize: "50px",
                  fontFamily: "Playfair Display, serif",
                  width: "70%",
                  textAlign: "center",
                  lineHeight: "90%",
                })}
              >
                {"Where Will Your Journey Begin? Create your trip today."}
              </MKTypography>
              <MKTypography
                color="white"
                mb={3}
                sx={({ breakpoints, typography: {} }) => ({
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  width: "70%",
                  textAlign: "center",
                })}
              >
                {
                  "Sri Lanka, often called the 'Pearl of the Indian Ocean,' is a tropical paradise with a unique blend of stunning beaches, lush tea estates, vibrant wildlife, and ancient cultural sites."
                }
              </MKTypography>
              <Stack direction="row" spacing={1} mt={3}>
                <MKButton circular variant="outlined" color="white">
                  {"Tour Packages"}
                </MKButton>
                <MKButton circular variant="contained" color="white">
                  {"Plan your Trip"}
                </MKButton>
              </Stack>
            </Grid>
          </MKBox>
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
                  {"Heaven's Trail MICE Experiences"}
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
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {
                  "Our range of featured services ensures that every aspect of your MICE tour is meticulously planned and executed to perfection."
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
                justifyContent: "center",
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
                      minHeight: "350px",
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
                        fontSize: "28px",
                        fontFamily: "Playfair Display, serif",
                        fontWeight: 400,
                        width: "70%",
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
                  [breakpoints.down("sm")]: {
                    fontSize: size["xl"],
                  },
                  fontFamily: "Playfair Display, serif",
                  fontSize: "60px",
                  fontWeight: 400,
                  textAlign: "center",
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
          <Box sx={{ width: "70%",  marginBottom:"3rem"  }}>
            <FAQs title="Home FAQ" faqs={faq} />
          </Box>
        </Grid>

        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
