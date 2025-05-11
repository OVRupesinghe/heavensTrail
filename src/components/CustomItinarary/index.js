import React, { useState, useRef, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UilArrowRight } from "@iconscout/react-unicons";
import "./Itinerary.css";
import Details from "./details";
import SubTask from "./SubTask";
import HotelCard from "./HotelCard";

const Itinerary = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props?.itinerary?.itinerary);
  });

  const [expandedIndex, setExpandedIndex] = useState(0);
  const [heights, setHeights] = useState({}); // Store heights for each accordion
  const detailsRefs = useRef([]);
  const summaryRefs = useRef([]);
  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const changeHeightOfLine = () => {
    if (expandedIndex !== null && detailsRefs.current[expandedIndex] && summaryRefs.current[expandedIndex]) {
      const detailsHeight = detailsRefs.current[expandedIndex].scrollHeight;
      const summaryHeight = summaryRefs.current[expandedIndex].scrollHeight;

      const totalHeight = detailsHeight + summaryHeight; // Combine both heights
      setHeights((prevHeights) => ({
        ...prevHeights,
        [expandedIndex]: totalHeight,
      }));
    }
  };

  useEffect(() => {
    changeHeightOfLine();
  }, [expandedIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeHeightOfLine();
    }, 300); // Delay of 0 allows the DOM to finish rendering

    return () => clearTimeout(timeout); // Cleanup in case component unmounts quickly
  }, [data]);

  return (
    <Box className="itinerary-container">
      {data?.map((item, index) => (
        <div className="itinerary-day" key={index}>
          <div className="timeline-container">
            <div className="day-text">Day {item.dayNumber}</div>
            <div className={index === 0 ? "dot" : "dot2"}></div>
            {index !== data.length - 1 && (
              <div
                className="dot-line"
                style={{
                  height: expandedIndex === index ? `${heights[index] || 70}px` : "70px",
                }} /* Adjust heights here */
              ></div>
            )}
          </div>
          <Accordion
            defaultExpanded
            disableGutters
            sx={{ boxShadow: "none", width: "100%", "&:before": { display: "none" } }}
            expanded={expandedIndex === index}
            onChange={() => handleExpand(index)}
          >
            <AccordionSummary
              ref={(el) => (summaryRefs.current[index] = el)}
              sx={{ boxShadow: "none", backgroundColor: "#FEFDF5" }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Grid>
                <Typography
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      alignSelf: "start",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "1.1rem",
                    }}
                    color="black"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 300,
                      alignSelf: "start",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "1rem",
                      textAlign: "justify",
                    }}
                    color="black"
                  >
                    {item?.description}
                  </Typography>
                </Typography>
              </Grid>
            </AccordionSummary>
            <AccordionDetails
              ref={(el) => (detailsRefs.current[index] = el)}
              sx={{ backgroundColor: "#FEFDF5", boxShadow: 0 }}
            >
              {item.images && (
                <Box
                  sx={{ display: "flex", gap: 1, overflowX: "auto", whiteSpace: "nowrap", paddingBottom: 1 }}
                >
                  {item.images?.map((img, index) => (
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
              )}
              {item.subtasks?.map((subtask, index) => (
                <SubTask key={index} subtask={subtask} />
              ))}

              <Typography
                variant="body2"
                color="black"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.8rem",
                  textAlign: "justify",
                  marginBottom: "10px",
                  marginTop: "1.5rem",
                }}
              >
                Check in to the Hotel to rest and relax
              </Typography>
              <div className="itinerary-accomadation">
                {item.accommodations?.map((acc) => (
                  <HotelCard key={acc.id} accommodation={acc} />
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </Box>
  );
};

export default Itinerary;
