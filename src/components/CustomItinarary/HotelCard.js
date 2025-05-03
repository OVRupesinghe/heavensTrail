import React, { useState } from "react";
import MKButton from "components/MKButton";
import { Box, Typography, Grid, Rating, Divider } from "@mui/material";
import { LocalParking, Hotel, Restaurant, Wifi, WbSunny, Pool } from "@mui/icons-material";
import MKTypography from "components/MKTypography";
import { iconMappings } from "constants/icons";

const HotelCard = ({ accommodation }) => {
  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        p: 1,
        display: "flex",
        gap: 2,
        maxWidth: 900,
        minWidth: 700,
        alignItems: "center",
      }}
    >
      {/* Hotel Image */}
      <Box
        component="img"
        src={`${process.env.REACT_APP_BASE_URL}${accommodation.thumbnail.url}`}
        alt="Hotel"
        sx={{
          width: 140,
          height: "100%",
          borderRadius: 2,
          objectFit: "cover",
          background: "transparent",
        }}
      />

      {/* Hotel Info */}
      <Box sx={{ flex: 1, width: "100%" }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          display="flex"
          gap="5px"
          padding="10px"
        >
          <Typography variant="subtitle1" fontWeight={600}>
            {accommodation.name}
          </Typography>
          <Box textAlign="center" display="flex" gap="5px" alignItems="center">
            <Typography variant="caption" color="text.secondary">
              {accommodation.reviewsCount} reviews
            </Typography>
            <Rating value={5} size="small" readOnly />
          </Box>
        </Grid>

        <Divider sx={{ margin: "0.5rem 0" }} />
        <Grid container spacing={1} mt={1} mb={1} sx={{ margin: 0 , gap: 1}}>
          {/* {[LocalParking, Hotel, Restaurant, Wifi, WbSunny, Pool].map((Icon, i) => (
            <Grid item key={i}>
              <Icon fontSize="small" />
            </Grid>
          ))} */}
          {accommodation.icons &&
            accommodation.icons.length > 0 &&
            accommodation.icons.map((iconItem) => (
              <React.Fragment key={iconItem.id}>
                {iconMappings[iconItem.icon.toLowerCase()] || <span>Unknown Icon</span>}
              </React.Fragment>
            ))}
        </Grid>

        <Divider sx={{ margin: "0.5rem 0" }} />
        <Box mt={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <MKTypography
              color="black"
              sx={({ breakpoints, typography: {} }) => ({
                fontFamily: "Poppins, sans-serif",
                fontSize: "0.7rem",
                width: "100%",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
              })}
            >
              {accommodation.facilities?.map((facility) => (
                <span key={facility.id} style={{ marginRight: "10px" }}>
                  {facility.value}
                </span>
              ))}
            </MKTypography>
          </Box>

          {/* View Button */}
          <MKButton
            circular
            variant="contained"
            color="black"
            href={accommodation.url} // or any other valid URL
            target="_blank"
          >
            View Hotel
          </MKButton>
        </Box>
      </Box>
    </Box>
  );
};

export default HotelCard;
