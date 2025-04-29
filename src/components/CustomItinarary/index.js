import React, { useState, useRef, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UilArrowRight } from "@iconscout/react-unicons";
import "./Itinerary.css";
import Details from "./details";
import SubTask from "./SubTask";

const Itinerary = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props?.itinerary?.itinerary);
    console.log(data);
  });

  // useEffect(() => {
  //   setData(props?.itinerary?.itinerary.filter((item) => item.iTitle.toLowerCase().includes("day")).map(
  //     (item) => {
  //       return {
  //         iTitle: item.title,
  //         description: item.description,
  //         details: <Details subItineraries={item.subtasks} />
  //       }
  //     })
  //   )
  // }, [props?.itinerary?.tour_itineries]);

  // console.log(data?.itinerary?.filter((item) => item.iTitle.toLowerCase().includes("day")))
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [heights, setHeights] = useState({}); // Store heights for each accordion
  const detailsRefs = useRef([]);
  const summaryRefs = useRef([]);
  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    if (expandedIndex !== null && detailsRefs.current[expandedIndex] && summaryRefs.current[expandedIndex]) {
      const detailsHeight = detailsRefs.current[expandedIndex].scrollHeight;
      const summaryHeight = summaryRefs.current[expandedIndex].scrollHeight;

      const totalHeight = detailsHeight + summaryHeight; // Combine both heights
      setHeights((prevHeights) => ({
        ...prevHeights,
        [expandedIndex]: totalHeight,
      }));
    }
  }, [expandedIndex]);

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
            sx={{ boxShadow: "none", "&:before": { display: "none" } }}
            expanded={expandedIndex === index}
            onChange={() => handleExpand(index)}
            disableGutters
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
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, alignSelf: "start" }} color="black">
                    {item.title}
                  </Typography>

                  {item.description.split(/[-–]/).map((part, index) => (
                    <Typography
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "1rem",
                      }}
                    >
                      {part}
                      {index < item.description.split(/[-–]/).length - 1 && (
                        <UilArrowRight style={{ marginLeft: 4 }} />
                      )}
                    </Typography>
                  ))}
                </Typography>
              </Grid>
            </AccordionSummary>
            <AccordionDetails
              ref={(el) => (detailsRefs.current[index] = el)}
              sx={{ backgroundColor: "#FEFDF5", boxShadow: 0 }}
            >
              {item.subtasks?.map((subtask, index) => (
                <SubTask key={index} subtask={subtask} />
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </Box>
  );
};

export default Itinerary;
