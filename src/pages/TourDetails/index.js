import {
  UilBuilding,
  UilCalender,
  UilCheck,
  UilDiceFive,
  UilGlassMartini,
  UilPlaneDeparture,
  UilPresentation,
  UilShoppingCart,
  UilTimes,
  UilUtensils,
} from "@iconscout/react-unicons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Rating,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CustomItinarary from "components/CustomItinarary";
import Footer from "components/Footer";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { AboutUsPage } from "constants/images";
import React, { useEffect, useState } from "react";
import { useUID } from "react-uid";
import FloatingOfferCard from "./FloatingOfferCard";
// import Itinerary from "components/Itinerary";
import NavBarTwo from "components/NavBarTwo";
import { PageIDs } from "constants/pageId";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";
import { useLocation } from "react-router-dom";
import { fetchTourPackage, fetchTourDetail } from "services/TourServices";
import { iconMappings } from "constants/icons";
import { useMemo } from "react";
import { useParams } from 'react-router-dom';

function TourDetails() {
  const location = useLocation();
  const [tourDetails, setTourDetails] = useState(null);
  const [facilities, setFacilities] = useState([]);
  const { detailId } = useParams(); 

  const getTourDetails = async () => {

    fetchTourDetail(detailId).then((res) => {
        console.log(res.data); 
        setTourDetails(res.data);
    }).catch((error) => {
      console.error("Fetch failed:", error.message);
    });

    // fetchTourPackage(propCode, tpId)
    //   .then((response) => {
    //     setTourDetails(response.data);
    //     console.log(response.data); 
    //   })
    //   .catch((error) => {
    //     console.error("Fetch failed:", error.message);
    //   });
  };

  useEffect(() => {
    getTourDetails();
  }, [])

  // useEffect(() => {
  //   if (location.hash) {
  //     const hashParts = location.hash.substring(1).split("#"); // Remove `#` and split by `#`

  //     if (hashParts.length >= 2) {
  //       const propertyCode = hashParts[0];
  //       const tpId = hashParts[1];

  //     }
  //   }
  // }, [location.hash]);

  // const facilitiesData = useMemo(() => {
  //   if (!tourDetails) return [];
  //   return tourDetails.textListData
  //     ?.filter((item) => item.listTitle === "Overview Icon List")
  //     .flatMap((item) => item.text_list_items)
  //     .map((item, idx) => ({
  //       icon: (
  //           React.cloneElement(iconMappings[item.listItemTitle], { style: { color: '#AF4D06' } })
  //       ),
  //       text: item.listItem,
  //     }));
  // }, [tourDetails]);

  // useEffect(() => {
  //   setFacilities(facilitiesData);
  // }, [facilitiesData]);

  const id = useUID();

  const packages = [
    {
      amount: "USD 2,200",
      amountBefore: "USD 2,350",
      paxCount: "(2 Pax Travelling)",
      reviewValue: 5,
      reviewText: "4.9 (370)",
    },
    {
      amount: "USD 2,050",
      amountBefore: "USD 2,150",
      paxCount: "(4 Pax Travelling)",
      reviewValue: 5,
      reviewText: "4.9 (370)",
    },
    {
      amount: "USD 1,990",
      amountBefore: "USD 2,100",
      paxCount: "(6 Pax Travelling)",
      reviewValue: 5,
      reviewText: "4.9 (370)",
    },
  ];

  const inclusions = [
    "Accommodation at the hotels mentioned or similar in Standard Rooms",
    "Breakfast during tour as indicated on the program",
    "Lunch, Afternoon tea, dinner, Selected Spirits, cocktails, Tea Experience Tour at Ceylon Tea Trails Luxury Bungalows",
    "Transportation in a luxury air-conditioned Vehicle",
    "The services of an English-Speaking Chauffeur Guide",
    "Driver accommodation, meals, and driver expenses during stay",
    "Sightseeing to locations indicated EXCLUDING Entrance Fees",
    "Government Tax",
  ];

  const exclusions = [
    "Dinner and Lunch or any meal not mentioned above",
    "Cost of Entrance Fees at sightseeing locations",
    "Additional Transfers, sightseeing or entrance fees to locations not mentioned on the program",
    "Early check-in or late check-out charges",
    "Expenses of a personal nature",
  ];

  return (
    <div style={{ backgroundColor: "#FEFDF5" }} id={id}>
      <NavBarTwo />
      <div style={{ padding: 15 }}>
      {tourDetails && tourDetails.heroImage ? (
        <HeaderThree
          title={tourDetails?.title}
          backgroundImage={process.env.REACT_APP_BASE_URL + tourDetails.heroImage.url}
          subHead={tourDetails?.tourType}
          pageId={PageIDs.TourDetails}
          duration={`${tourDetails?.tourOverview?.nights} Nights ${tourDetails?.tourOverview?.days} Days`}
        />
      ) : (
        <div>Loading...</div>
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
            lg={7.5}
            flexDirection="column"
            alignItems="center"
            sx={{ width: "70%" }}
          >
            <Grid container display={"flex"} flexDirection="column">
              {/* <FloatingOfferCard /> */}
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
                    Trip Overview
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
                    {tourDetails?.tourOverview?.description}
                  </MKTypography>
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="black"
                    sx={{
                      textAlign: "left",
                      maxWidth: "90%",
                      fontWeight: "bold",
                      marginTop: 3,
                    }}
                  >
                    <li>
                      Tour Name:{" "}
                      <span style={{ fontWeight: 400 }}>
                        {tourDetails?.tourOverview?.tourName}
                      </span>
                    </li>
                  </MKTypography>
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="black"
                    sx={{
                      textAlign: "left",
                      maxWidth: "90%",
                      fontWeight: "bold",
                    }}
                  >
                    <li>
                      Duration:{" "}
                      <span
                        style={{ fontWeight: 400 }}
                      >{`${tourDetails?.tourOverview?.nights} Nights ${tourDetails?.tourOverview?.days} Days`}</span>
                    </li>
                  </MKTypography>
                  <MKTypography
                    variant="h6"
                    fontWeight="regular"
                    color="black"
                    sx={{
                      textAlign: "left",
                      maxWidth: "90%",
                      fontWeight: "bold",
                    }}
                  >
                    <li>
                      Locations:{" "}
                      <span style={{ fontWeight: 400 }}>
                            {tourDetails?.tourOverview?.locations?.map((loc) => loc.name).join(", ")}
                      </span>
                    </li>
                  </MKTypography>
                  <Divider
                    variant="middle"
                    sx={{
                      height: 2,
                      width: "100%",
                      opacity: 1,
                      backgroundColor: "#C9C5BA",
                    }}
                  />
                  <Grid container>
                    { tourDetails && tourDetails.facilities && tourDetails?.facilities.map((facility, index) => (
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
                              fontSize: "16px",
                              fontFamily: "Poppins, sans-serif",
                              lineHeight: "30px",
                              marginLeft: 2,
                            }}
                          >
                            {facility?.name}
                          </MKTypography>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#FEFDF5",
                  marginTop: 2,
                }}
              >
                <MKBox
                  display="flex"
                  alignItems="center"
                  pt={4}
                  pb={4}
                  sx={{
                    backgroundImage: ({
                      palette: { gradients },
                      functions: { linearGradient, rgba },
                    }) =>
                      `${linearGradient("#BFCF0F", "#818B0C")}, url(${
                        AboutUsPage.Sub_Head
                      })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "overlay",
                    borderRadius: 5,
                    width: "100%",
                  }}
                >
                  <Grid
                    container
                    xs={12}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      paddingX: "15px",
                    }}
                    flexDirection="row"
                    justifyContent="space-between"
                  >
                    <Grid>
                      <MKTypography
                        variant="h1"
                        color="black"
                        sx={({ breakpoints, typography: { size } }) => ({
                          [breakpoints.down("md")]: {
                            fontSize: size["3xl"],
                          },
                          fontSize: "40px",
                          fontFamily: "Poppins, sans-serif",
                          width: "100%",
                          fontWeight: 600,
                          textAlign: "left",
                        })}
                      >
                        {`Limited Time Offer`}
                      </MKTypography>
                      <MKTypography
                        color="black"
                        sx={({ breakpoints, typography: {} }) => ({
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "15px",
                          fontWeight: 400,
                          width: "100%",
                          textAlign: "left",
                        })}
                      >
                        Exclusive deal — ends soon!.
                      </MKTypography>
                    </Grid>
                    <Stack direction="row" spacing={1}>
                      <MKButton circular variant="contained" color="black">
                        Find out more
                      </MKButton>
                    </Stack>
                  </Grid>
                </MKBox>
              </Grid>
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
                    Itinerary
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5" }}>
                  <CustomItinarary itinerary = {tourDetails}/>
                </AccordionDetails>
              </Accordion>
              <Accordion
                disableGutters // Removes padding and default spacing
                sx={{
                  boxShadow: "none",
                  "&:before": { display: "none" },
                  backgroundColor: "#FEFDF5",
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
                    Packages
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
                </AccordionDetails>
                <Grid
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row", lg: "row" },
                    backgroundColor: "#FEFDF5",
                    gap: 2,
                  }}
                >
                  {tourDetails && tourDetails.packages && tourDetails.packages?.map((item) => {
                    return (
                      <Grid
                        sx={{
                          border: "solid",
                          borderRadius: 5,
                          borderColor: "#C9C5BA",
                          paddingX: 2,
                          paddingY: 2,
                          backgroundColor: "#FEFDF5",
                          width: "90%",
                          maxWidth: "300px"
                        }}
                      >
                        <MKTypography
                          color="black"
                          sx={({ breakpoints, typography: {} }) => ({
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "15px",
                            fontWeight: 600,
                            width: "100%",
                            textAlign: "left",
                          })}
                        >
                          {item.price}{" "}
                          <span style={{ fontSize: 12, fontWeight: 400 }}>
                            per person sharing DBL
                          </span>
                        </MKTypography>
                        <MKTypography
                          sx={({ breakpoints, typography: {} }) => ({
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "12px",
                            fontWeight: 400,
                            width: "100%",
                            textAlign: "left",
                            textDecoration: "line-through",
                            color: "#8C8679",
                          })}
                        >
                          {item.discountedPrice}
                        </MKTypography>
                        <MKTypography
                          sx={({ breakpoints, typography: {} }) => ({
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "14px",
                            fontWeight: 500,
                            width: "100%",
                            textAlign: "left",
                          })}
                        >
                          (${item.headCount}  Pax Travelling) 
                        </MKTypography>
                        <Divider
                          variant="middle"
                          sx={{
                            height: 2,
                            width: "100%",
                            opacity: 1,
                            backgroundColor: "#EEECE2",
                          }}
                        />
                        <Grid
                          sx={{
                            flexDirection: "row",
                            display: "flex",
                            alignItems: "flex-end",
                          }}
                        >
                          <Rating
                            name="read-only"
                            value={5}
                            readOnly
                            max={1}
                          />
                          <MKTypography
                            sx={({ breakpoints, typography: {} }) => ({
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "14px",
                              fontWeight: 500,
                              width: "100%",
                              textAlign: "left",
                              color: "#8C8679",
                            })}
                          >
                            {item.ratingScore + " (" + item.totalRatings + ")"}
                          </MKTypography>
                          <MKButton circular variant="contained" color="black">
                            Select
                          </MKButton>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
                <Grid
                  lg={12}
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
                      backgroundImage: ({
                        palette: { gradients },
                        functions: { linearGradient, rgba },
                      }) =>
                        `${linearGradient("#BFCF0F", "#818B0C")}, url(${
                          AboutUsPage.Sub_Head
                        })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay",

                      margin: 1,
                      borderRadius: 5,
                      width: "100%",
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
                        color="black"
                        mb={3}
                        sx={({ breakpoints, typography: { size } }) => ({
                          [breakpoints.down("md")]: {
                            fontSize: size["3xl"],
                          },
                          fontSize: "50px",
                          fontFamily: "Poppins, sans-serif",
                          width: "90%",
                          textAlign: "center",
                          lineHeight: "90%",
                        })}
                      >
                        {`Get a 25% Off`}
                      </MKTypography>
                      <MKTypography
                        color="black"
                        sx={({ breakpoints, typography: {} }) => ({
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "15px",
                          fontWeight: 400,
                          width: "70%",
                          textAlign: "center",
                        })}
                      >
                        Book Before 20th July 2024
                      </MKTypography>
                      <MKTypography
                        color="black"
                        mb={3}
                        sx={({ breakpoints, typography: {} }) => ({
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "15px",
                          fontWeight: 400,
                          width: "70%",
                          textAlign: "center",
                        })}
                      >
                        (Stay Period valid from 15th September – 31st October
                        2024)
                      </MKTypography>
                    </Grid>
                  </MKBox>
                </Grid>
              </Accordion>
              <Accordion
                disableGutters // Removes padding and default spacing
                sx={{
                  boxShadow: "none",
                  "&:before": { display: "none" },
                  backgroundColor: "#FEFDF5",
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
                    What’s Included
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
                </AccordionDetails>
                <MKBox
                  borderRadius="lg"
                  border="1px solid #e0e0e0"
                  padding="20px"
                  backgroundColor="#f9f9f9"
                >
                  <MKBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="stretch" // Ensures both sections and divider stretch to the same height
                    width="100%"
                  >
                    {/* Inclusions Section */}
                    <MKBox sx={{ width: "48%" }}>
                      <MKTypography variant="h5" fontWeight="bold" mb={2}>
                        Inclusions
                      </MKTypography>
                      {tourDetails && tourDetails.inclusions && tourDetails.inclusions.map((item, index) => (
                        <MKBox key={index} mb={2} display="flex">
                          <UilCheck
                            color="#929E03"
                            style={{
                              marginRight: "8px",
                              width: "16px",
                              height: "16px",
                              flexShrink: 0,
                            }}
                          />
                          <MKTypography
                            sx={{
                              lineHeight: "100%",
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                              fontWeight: 500,
                              width: "100%",
                            }}
                            variant="body1"
                          >
                            {item.value}
                          </MKTypography>
                        </MKBox>
                      ))}
                    </MKBox>

                    {/* Vertical Divider */}
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        mx: 3,
                        width: "2px",
                        backgroundColor: "#e0e0e0",
                        height: "auto",
                        minHeight: "100%",
                        opacity: 1,
                      }}
                    />

                    {/* Exclusions Section */}
                    <MKBox sx={{ width: "48%" }}>
                      <MKTypography variant="h5" fontWeight="bold" mb={2}>
                        Exclusions
                      </MKTypography>
                      {tourDetails && tourDetails.exclusions && tourDetails.exclusions.map((item, index) => (
                        <MKBox key={index} mb={2} display="flex">
                          <UilTimes
                            color="#AF4D06"
                            style={{
                              marginRight: "8px",
                              width: "16px",
                              height: "16px",
                              flexShrink: 0,
                            }}
                          />
                          <MKTypography
                            sx={{
                              lineHeight: "100%",
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                              fontWeight: 500,
                              width: "100%",
                            }}
                            variant="body1"
                          >
                            {item.value}
                          </MKTypography>
                        </MKBox>
                      ))}
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Accordion>
              <Divider
                variant="middle"
                sx={{
                  height: 2,
                  width: "100%",
                  opacity: 1,
                  backgroundColor: "#C9C5BA",
                }}
              />
              <MKBox
                display="flex"
                alignItems="center"
                justifySelf="center"
                pt={4}
                pb={4}
                sx={{
                  margin: 1,
                  borderRadius: 5,
                  width: "100%",
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
                    color="black"
                    sx={({ breakpoints, typography: {} }) => ({
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "15px",
                      fontWeight: 400,
                      width: "70%",
                      textAlign: "center",
                    })}
                  >
                    Locally Serviced By
                  </MKTypography>
                  <MKTypography
                    variant="h1"
                    color="black"
                    sx={({ breakpoints, typography: { size } }) => ({
                      [breakpoints.down("md")]: {
                        fontSize: size["3xl"],
                      },
                      fontSize: "25px",
                      fontFamily: "Poppins, sans-serif",
                      width: "90%",
                      textAlign: "center",
                      lineHeight: "90%",
                    })}
                  >
                    Heaven’s Trial Pvt Ltd.
                  </MKTypography>

                  <MKTypography
                    color="black"
                    mb={3}
                    sx={({ breakpoints, typography: {} }) => ({
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "15px",
                      fontWeight: 400,
                      width: "70%",
                      textAlign: "center",
                    })}
                  >
                    Sri Lanka
                  </MKTypography>
                </Grid>
              </MKBox>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </div>
  );
}

export default TourDetails;
