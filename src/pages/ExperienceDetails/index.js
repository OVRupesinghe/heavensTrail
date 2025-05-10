import React, { useState, useEffect } from "react";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation } from "react-router-dom";
import CustomMap from "components/CustomMap";
import BookingForm from "components/InquiryForm";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import CategoryIcon from "@mui/icons-material/Category";
import GroupIcon from "@mui/icons-material/Group";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {
  UilCheck,
} from "@iconscout/react-unicons";
import FAQs from "components/FAQs";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import Footer from "components/Footer";
import { AccomadationPage } from "constants/images";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";
import { fetchExperienceDetail, fetchFAQs } from "services/TourServices";
import { useParams } from "react-router-dom";
import NavBar from "components/NavBar";

function ExperienceDetails() {

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
      console.log(experienceDetail)
    });
  };

  const getFaq = async () => {
    fetchFAQs().then((res) => {
      setFaq(res.data);
    });
  };



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


  useEffect(() => {
    getExperienceDetail();
    getFaq();

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
                  sx={{ boxShadow: "none", backgroundColor: "#FEFDF5"}}
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
                  overflow: "hidden",
                  boxShadow: "none",
                  "&:before": { display: "none" }, // Removes the default divider line
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id={`panel1-header-1`}
                  sx={{ boxShadow: "none", backgroundColor: "#FEFDF5",  }}
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
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5", height: "500px", overflow:"auto" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", lg: "flex-start" },
                      alignItems: { xs: "center", lg: "flex-start" },
                    }}
                  >
                    {experienceDetail && experienceDetail.cities && 
                    <CustomMap cities = {experienceDetail.cities} />
                    }
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
