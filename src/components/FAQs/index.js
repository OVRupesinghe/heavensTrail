import Grid from "@mui/material/Grid";
import React, { useState } from "react";
// Material Kit 2 React components
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
// Images

function FAQs({ title, faqs }) {
  const [value, setValue] = useState(title);

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
