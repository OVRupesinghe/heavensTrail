import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Rating,
  Grid,
  Box,
  Typography,
} from "@mui/material";

const SubTask = ({ subtask }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1, // spacing between rows
        padding: 2,
        borderRadius: 2,
        width: "100%",
        maxWidth: 600,
      }}
    >
      {/* Row 1: Title */}
      <Typography variant="h6" component="div" sx={{ color: '#000 !important', fontFamily:"Poppins, sans-serif", fontWeight:"500", fontSize:"1rem" }}>
        {subtask.title}
      </Typography>

      {/* Row 2: Description */}
      <Typography variant="body2" color="black" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "0.8rem", textAlign:"justify"}}>
        {subtask.description}
      </Typography>

      <Box sx={{ display: "flex", gap: 1, overflowX: "auto", whiteSpace: "nowrap",    paddingBottom: 1, }}>
        {subtask.images?.map((img, index) => (
          <img
            key={index}
            src={`${process.env.REACT_APP_BASE_URL}${img.url}`}
            alt={`Subtask Image ${index + 1}`}
            style={{
              maxWidth: "200px",
              maxHeight: "200px",
              width: "auto",
              height: "auto",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SubTask;
