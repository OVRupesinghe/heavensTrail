import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import React, { useState, useEffect } from "react";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "react-slick";
import CustomPagination from "components/CustomPagination";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
// Images
import footerLogo from "assets/images/homePage/footerlogo.png";
import { UilUsersAlt, UilMapPinAlt } from "@iconscout/react-unicons";
import bgImage from "assets/images/homePage/header_bg.jpeg";
import headerLogo from "assets/images/homePage/headerLogo.png";
import footerBg from "assets/images/homePage/beach.jpeg";
import Logo from "assets/images/homePage/Logo.svg";
import CustomSelect from "components/CustomSelect";
import CustomDateRangePicker from "components/CustomeDateRangerPicker";
import NavBar from "components/NavBar";
import { fetchFAQByTitle } from "services/FAQService";

function FAQs({ title, faqs }) {
  const [value, setValue] = useState(title);
  const [FAQs, setFAQs] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [images, setImages] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);

  const faq = [
    {
      title: "What is the best time to visit Sri Lanka?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Ut in sed feugiat viverra commodo sed malesuada pharetra tempor. Tempor mauris morbi leo erat. Pellentesque ut convallis interdum condimentum id ultrices pretium. Faucibus lorem accumsan quis mauris ac pellentesque lectus.",
    },
    {
      title: "How can Heaven's Trail help me plan my Sri Lankan tour?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Ut in sed feugiat viverra commodo sed malesuada pharetra tempor. Tempor mauris morbi leo erat. Pellentesque ut convallis interdum condimentum id ultrices pretium. Faucibus lorem accumsan quis mauris ac pellentesque lectus.",
    },
    {
      title: "What should I pack for my trip to Sri Lanka?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Ut in sed feugiat viverra commodo sed malesuada pharetra tempor. Tempor mauris morbi leo erat. Pellentesque ut convallis interdum condimentum id ultrices pretium. Faucibus lorem accumsan quis mauris ac pellentesque lectus.",
    },
    {
      title: "How can I get around Sri Lanka?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Ut in sed feugiat viverra commodo sed malesuada pharetra tempor. Tempor mauris morbi leo erat. Pellentesque ut convallis interdum condimentum id ultrices pretium. Faucibus lorem accumsan quis mauris ac pellentesque lectus.",
    },
  ];

  useEffect(() => {
    getFAQDataByTitle();
  }, [title]);

  const navItems = ["Home", "Tour Packages", "Business Tours", "About Us", "Contact Us"];

  const getFAQDataByTitle = async () => {
    // Usage
    // fetchFAQByTitle(title)
    //   .then((response) => {
    //     setFAQs(response?.data);
    //     // console.log("RePOSNESE FQ", response?.data);
    //   })
    //   .catch((error) => {
    //     console.error("Fetch failed:", error.message);
    //   });
  };

  const socials = [
    {
      icon: <Instagram />,
      link: "",
    },
    {
      icon: <LinkedIn />,
      link: "",
    },
    {
      icon: <TwitterIcon />,
      link: "",
    },
    {
      icon: <FacebookIcon />,
      link: "",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    customPaging: () => <MKBox />,
    afterChange: (current) => setCurrentSlide(current),
  };

  const backgroundImages = [bgImage, footerBg, bgImage];

  return (
    <Grid container item xs={12} lg={12} flexDirection="column" alignItems="center" >
      <Box  container display={"flex"} flexDirection="column" sx={{width:"100%"}}>
        {faqs && faqs.length > 0
          ? faqs.map((item, index) => (
              <Accordion key={index} sx={{ boxShadow: "none", width:"100%" }}>
                {/* {console.log("ITEN", item)} */}
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id={`panel1-header-${index}`}
                  sx={{ boxShadow: "none", backgroundColor: "#FEFDF5", width:"100%"  }}
                >
                  <MKTypography
                    fontWeight="regular"
                    
                    color="black"
                    sx={{ textAlign: "center", maxWidth: "90%", fontSize: "1rem", fontWeight: "500", fontFamily: "Playfair Display, serif", }}
                  >
                  {item?.question}
                  </MKTypography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: "#FEFDF5", fontSize: "1rem" }}>{item?.answer}</AccordionDetails>
              </Accordion>
            ))
          : null}
      </Box >

      {/* Load More FAQs Button */}
      <MKButton
        circular
        variant="contained"
        color="black"
        sx={{
          paddingLeft: 5,
          paddingRight: 5,
          marginTop: 5,
        }}
      >
        Load More FAQs
      </MKButton>
    </Grid>
  );
}

export default FAQs;
