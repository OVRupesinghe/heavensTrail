import { Box, Card, CardContent, CardMedia } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Footer from "components/Footer";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import NavBar from "components/NavBar";
import { ContactUsPage } from "constants/images";
import { PageIDs } from "constants/pageId";
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";
import HeaderTwo from "layouts/sections/page-sections/page-headers/components/HeaderTwo";
import React, { useEffect, useState } from "react";
import { fetchPropertyPageImages, fetchPropertyPageTexts } from "services/PropertyService";

function ContactUs() {
  const [pageTexts, setPageTexts] = useState();
  const [pageImages, setPageImages] = useState();
  const cardsData = [
    {
      image: ContactUsPage.Contact_Us_Card,
      title: "Destination Weddings",
      description:
        "Heaven's Trail is a proud subsidiary of a respected Sri Lankan group of companies, offering extraordinary journeys across Sri Lanka with support from our hotels, agriculture ventures, and event industry ties in Australia. As a locally owned and Sri Lanka Tourist Board Approved Destination Management Company (DMC), we specialize in crafting personalized holidays that showcase the island’s diverse landscapes, rich heritage, and warm hospitality.",
      description2:
        'Sri Lanka, often called the "Pearl of the Indian Ocean," is a tropical paradise with a unique blend of stunning beaches, lush tea estates, vibrant wildlife, and ancient cultural sites. Our dedicated team leverages deep local expertise to create memorable itineraries that highlight the best of Sri Lanka, from its 8 UNESCO World Heritage Sites to its pristine coastlines and majestic national parks.',
      btnText: "Contact Us",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // getPropertyImages();
    // getPropertyText();
  }, []);

  // const getPropertyText = async () => {
  //   // Usage
  //   fetchPropertyPageTexts(PageIDs.ContactUs)
  //     .then((response) => {
  //       console.log("asasasasas");

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
  //   fetchPropertyPageImages(PageIDs.ContactUs, 1)
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

  const CustomCard = ({ image, title, index }) => {
    const isEven = index % 2 === 0;

    return (
      <Card
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : isEven ? "row" : "row-reverse",
          marginBottom: "20px",
          borderRadius: "15px",
          backgroundColor: "#EEECE2",
          boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          alt={title}
          image={image}
          title={title}
          style={{
            flex: 1,
            borderRadius: "15px",
            height: "500px",
            marginTop: 0,
          }}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            padding: isMobile ? "10px" : "20px",
            border: "solid",
            marginLeft: 8,
            borderRadius: "15px",
            borderColor: "#C9C5BA",
            flex: 1,
          }}
        ></CardContent>
      </Card>
    );
  };

  const contactMethods = [
    {
      title: "Phone",
      des: "Tel: +94 77 77 0 4000 / +94 37 22 8 1908",
      des2: "WhatsApp: +94 77 770 4000",
      img: ContactUsPage.Contact_Us_Method_1,
    },
    {
      title: "Email",
      des: "hello@heavenstrails.com",
      des2: "marketing@heavenstrails.com",
      img: ContactUsPage.Contact_Us_Method_2,
    },
    {
      title: "Office",
      des: "Kandanegedara Road, Weralugama,",
      des2: "Kuliyapitiya, Sri Lanka",
      img: ContactUsPage.Contact_Us_Method_3,
    },
  ];

  const contactPlaces = [
    {
      title: "Head Office",
      subHead: "(SLTDA Reg.No: SLTDA/SQA/TA/01806)",
      des: "Kandanegedara Road, Weralugama,",
      des2: "Kuliyapitiya, Sri Lanka,",
      des3: "+94 37 2281908",
    },
    {
      title: "UAE",
      des: "AI Bassam Building,4th Floor, Port Saeed,",
      des2: "Deira-Dubai",
      des3: "+971 50 316 6948",
    },
    {
      title: "Australia",
      des: "890 North Road,",
      des2: "Bentleigh East VIC 3165",
      des3: "+61 43 103 7027",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBar />
      <div style={{ padding: 15 }}>
        <HeaderTwo title="Contact Us" backgroundImage={ContactUsPage.Header} pageId={PageIDs.ContactUs} />
      </div>
      <div style={{ overflowX: "hidden" }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
            backgroundColor: "#FEFDF5",
            marginTop: 5,
          }}
        >
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
              lg={11}
            >
              {contactMethods.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} lg={4}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "16px",
                      backgroundColor: "#FEFDF5",
                      boxShadow: "none",
                      borderWidth: 2,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="80px"
                      image={item?.img}
                      alt="Image"
                      sx={{
                        objectFit: "contain",
                        width: "70px",
                        margin: 0,
                      }}
                    />
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
                    <MKTypography variant="subtitle2">{item?.des2}</MKTypography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>

        {/*Whoe we are*/}
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "16px",
            paddingRight: "16px",
            marginBottom: "40px",
            backgroundColor: "#EEECE2",
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
              mt={7}
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
                Contact Us
              </MKTypography>
            </Grid>
          </Container>
          <Box
            style={{
              backgroundColor: "#EEECE2",
              marginBottom:"2rem"
            }}
          >
            <Grid
              container
              spacing={4}
              mt={1}
              mb={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "60%",
                margin: "auto",
                border: "1px solid #d3d3d3",
                borderRadius: 2,
                padding:"2rem 1rem",
              }}
            >
              {/* {cardsData.map((card, index) => (
                <Grid item xs={12} sm={6} lg={10} key={index}>
                  <CustomCard
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    description2={card.description2}
                    index={index}
                    btnText={card?.btnText}
                  />
                </Grid>
              ))} */}

              <FormSimple />
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
            backgroundColor: "#FEFDF5",
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
                {"Our Offices"}
              </MKTypography>
              <MKTypography
                variant="h6"
                fontWeight="regular"
                color="black"
                sx={{ textAlign: "center", maxWidth: "90%" }}
              >
                {"Contact today to get your tour planned."}
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
              lg={11}
            >
              {contactPlaces.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} lg={4}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "16px",
                      backgroundColor: "#FEFDF5",
                      boxShadow: "none",
                      borderWidth: 1,
                    }}
                  >
                    <MKTypography
                      color="#1A1814"
                      mb={2}
                      sx={{
                        fontSize: "24px",
                        fontFamily: "Playfair Display, serif",
                        fontWeight: 400,
                        width: "90%",
                      }}
                    >
                      {item?.title}
                      <MKTypography
                        sx={{
                          lineHeight: 0.8,
                          fontSize: 12,
                          fontStyle: "italic",
                          color: "black",
                        }}
                        variant="subtitle2"
                      >
                        {item?.subHead}
                      </MKTypography>
                    </MKTypography>
                    <MKTypography color="black" variant="subtitle2">
                      {item?.des}
                    </MKTypography>
                    <MKTypography color="black" variant="subtitle2">
                      {item?.des2}
                    </MKTypography>
                    <MKBox display="flex" alignItems="center">
                      <MKTypography color="black" mt={2} variant="subtitle2">
                        Tel:
                      </MKTypography>
                      <MKTypography sx={{ color: "#929E03" }} mt={2} variant="subtitle2" ml={1}>
                        {item?.des3}
                      </MKTypography>
                    </MKBox>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
