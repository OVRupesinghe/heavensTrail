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
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Divider,
} from "@mui/material";
// Images
import {
  fetchPropertyPageTexts,
  fetchPropertyPageImages,
} from "services/PropertyService";
import { useNavigate } from "react-router-dom";

function HeaderThree({
  title,
  buttonArray,
  description,
  backgroundImage,
  subHead,
  headerFontSize,
  pageId,
  duration,
}) {
  const [value, setValue] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [images, setImages] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getPropertyText();
    getPropertyImages();
  }, [pageId]);

  const getPropertyText = async () => {
    // Usage
    fetchPropertyPageTexts()
      .then((response) => {
        const headerTexts = response?.data.reduce((acc, item) => {
          acc[item.tag] = item.text;
          return acc;
        }, {});

        setValue(headerTexts);
        // console.log("headerTextssss", headerTexts);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const getPropertyImages = () => {
    fetchPropertyPageImages(pageId, 1)
      .then((response) => {
        const headerImages = response?.data.reduce((acc, item) => {
          acc[item.tag] = item.imgeUrl;
          return acc;
        }, {});
        setImages(headerImages);
        // console.log("headerImages", headerImages);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const navItems = [
    "Home",
    "Tour Packages",
    "Business Tours",
    "About Us",
    "Contact Us",
  ];

  const onItemClick = (item) => {
    switch (item) {
      case "Home":
        navigate("/home");
        break;
      case "Tour Packages":
        navigate("/pages/tour-list");
        break;
      case "Business Tours":
        navigate("/pages/mice-tours");
        break;
      case "About Us":
        navigate("/pages/about-us");
        break;
      case "Contact Us":
        navigate("/pages/contact-us");
        break;
      default:
        navigate("/home");
    }
  };

  return (
    <div>
      <MKBox
        sx={{
          top: 10,
          marginTop: {
            xs: 0,
          },
          height: "30rem",
        }}
      >
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="100%"
          sx={{
            backgroundImage: ({
              palette: { gradients },
              functions: { linearGradient, rgba },
            }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0),
                rgba(gradients.dark.state, 0)
              )}, url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 1,
            borderRadius: 4,
            padding: { xs: 2, md: 4 },
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
          >
            {subHead && (
              <div className="text-with-lines">
                {subHead ? subHead : "MICE Tours"}
              </div>
            )}
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                fontFamily: "Playfair Display, serif",
                fontSize: headerFontSize || "90px",
                fontWeight: 400,
              })}
            >
              {title}
            </MKTypography>
            <MKTypography
              color="white"
              mb={3}
              sx={({ breakpoints, typography: {} }) => ({
                fontFamily: "Poppins, sans-serif",
                fontSize: "20px",
                fontWeight: 400,
              })}
            >
              {description}
            </MKTypography>
            {duration && (
              <div className="text-with-lines">
                {duration ? duration : "MICE Tours"}
              </div>
            )}
            <Grid justifyContent="center">
              {buttonArray &&
                buttonArray.length > 0 &&
                buttonArray?.map((item) => {
                  return (
                    <MKButton
                      sx={({ breakpoints }) => ({
                        [breakpoints.down("sm")]: {
                          marginY: 1,
                        },
                        marginLeft: 2,
                      })}
                      circular
                      variant="outlined"
                      color="white"
                    >
                      {item?.icon}
                      {item.title}
                    </MKButton>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
        {/* Mobile Menu Drawer */}
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              width: "240px",
              boxSizing: "border-box",
            },
          }}
        >
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ margin: 2, justifyContent: "flex-end" }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            {navItems.map((text) => (
              <ListItem button key={text}>
                <ListItemText
                  sx={{ marginY: 1, marginLeft: 1 }}
                  primary={text}
                  onClick={() => onItemClick(text)}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Mobile Menu Button */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            display: { xs: "block", lg: "none" },
            position: "fixed",
            zIndex: 1200,
            borderRadius: "10%",
            top: "16px",
            right: "16px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </MKBox>
    </div>
  );
}

export default HeaderThree;
