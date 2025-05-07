import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import emailjs from "@emailjs/browser";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import { useRef } from "react";
import MKTypography from "components/MKTypography";
import { Grid, Typography, IconButton, Box } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function FormSimple() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const formRef = useRef();
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [checked, setChecked] = useState(true);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleChecked = () => setChecked(!checked);

  const sendSimpleMessage = (e) => {
    e.preventDefault();

    console.log(form.message)
    console.log(form.phone)
    console.log(form.email)
    console.log(form.fname)
    console.log(form.lname)
    console.log(adults)
    console.log(children)
    emailjs
      .send(
        "service_vcs6z5m",
        "template_5vdn41n",
        {
          from_name: form.lname,
          to_name: "Heaven's Trails",
          from_email: "ruchirxv2@gmail.com",
          to_email: "ruchira.bogahawatta@gmail.com",
          message: `Message : ${form.message} \n Phone Number : ${form.phone}\n Email : ${form.email}`,
        },
        "Lv9XB4mwOjQROFarw"
      )
      .then(
        () => {
          alert("Thank you. we will get back to you as soon as possible.");
        },
        (error) => {
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <MKBox component="section">
      <Container>
        <Grid container item xs={12} lg={12}>
          <Box>
            <MKTypography
              variant="h6"
              fontWeight="bold"
              color="black"
              sx={{ textAlign: "left", fontFamily: "Poppins, sans-serif" }}
            >
              Ready To Book?
            </MKTypography>
            <MKTypography
              variant="h6"
              fontWeight="regular"
              color="black"
              sx={{ textAlign: "left", fontFamily: "Poppins, sans-serif", fontSize: "0.9rem" }}
            >
              Fill out the Form below, and we'll get back to you with more details!
            </MKTypography>
          </Box>
          <MKBox width="100%" autoComplete="off" component="form" onSubmit={sendSimpleMessage} ref={formRef}>
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="outlined"
                    label="First Name"
                    name="fname"
                    onChange={handleChange}
                    fullWidth
                    sx={{
                      backgroundColor: "#FEFDF5",
                      borderRadius: 30,
                      "& .MuiOutlinedInput-root": {
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "0.9rem",
                        "& input": {
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "0.9rem",
                        },
                        "& fieldset": {
                          borderRadius: 30,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: "Poppins, sans-serif",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    variant="outlined"
                    label="Last Name"
                    name="lname"
                    onChange={handleChange}
                    fullWidth
                    sx={{
                      backgroundColor: "#FEFDF5",
                      borderRadius: 30,
                      "& .MuiOutlinedInput-root": {
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "0.9rem",
                        "& input": {
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "0.9rem",
                        },
                        "& fieldset": {
                          borderRadius: 30,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: "Poppins, sans-serif",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="outlined"
                    type="email"
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    fullWidth
                    sx={{
                      backgroundColor: "#FEFDF5",
                      borderRadius: 30,
                      "& .MuiOutlinedInput-root": {
                        fontFamily: "Poppins, sans-serif", // For input wrapper
                        fontSize: "0.9rem",
                        "& input": {
                          fontFamily: "Poppins, sans-serif", // For actual text input
                          fontSize: "0.9rem",
                        },
                        "& fieldset": {
                          borderRadius: 30,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: "Poppins, sans-serif", // Optional: affects label font
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="outlined"
                    label="Phone"
                    name="phone"
                    onChange={handleChange}
                    fullWidth
                    sx={{
                      backgroundColor: "#FEFDF5",
                      borderRadius: 30,
                      "& .MuiOutlinedInput-root": {
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "0.9rem",
                        "& input": {
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "0.9rem",
                        },
                        "& fieldset": {
                          borderRadius: 30,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: "Poppins, sans-serif",
                      },
                    }}
                  />
                </Grid>
                <Grid
                  container
                  alignItems="center"
                  sx={{ marginTop: "0.5rem", paddingLeft: "24px" }}
                  spacing={3}
                >
                  {/* Adults */}
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "0.9rem", fontFamily: "Poppins, sans-serif" }}
                    >
                      Adults
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      border="1px solid #ccc"
                      borderRadius="999px"
                      px={2}
                      py={0.5}
                      backgroundColor="#FEFDF5"
                    >
                      <IconButton onClick={() => setAdults(Math.max(0, adults - 1))} size="small">
                        <RemoveIcon />
                      </IconButton>
                      <Typography
                        mx={1}
                        minWidth="20px"
                        textAlign="center"
                        sx={{ margin: "0 0.5rem", fontSize: "0.9rem" }}
                      >
                        {adults}
                      </Typography>
                      <IconButton onClick={() => setAdults(adults + 1)} size="small">
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Grid>

                  {/* Children */}
                  <Grid item>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "0.9rem", fontFamily: "Poppins, sans-serif" }}
                    >
                      Children
                    </Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      border="1px solid #ccc"
                      borderRadius="999px"
                      px={2}
                      py={0.5}
                      backgroundColor="#FEFDF5"
                    >
                      <IconButton onClick={() => setChildren(Math.max(0, children - 1))} size="small">
                        <RemoveIcon />
                      </IconButton>
                      <Typography
                        mx={1}
                        minWidth="20px"
                        textAlign="center"
                        sx={{ margin: "0 0.5rem", fontSize: "0.9rem" }}
                      >
                        {children}
                      </Typography>
                      <IconButton onClick={() => setChildren(children + 1)} size="small">
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Grid>

                  {/* Info text */}
                  <Grid item xs>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "0.8rem", fontFamily: "Poppins, sans-serif", fontWeight: 500, textAlign:"justify" }}
                    >
                      Only children aged 12 years and under should be categorized as kids. If a child’s age is
                      above 12 years, please add them as an adult.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    variant="outlined"
                    label="Your Message"
                    multiline
                    fullWidth
                    onChange={handleChange}
                    name="message"
                    rows={6}
                    sx={{
                      backgroundColor: "#FEFDF5",
                      borderRadius: 5,
                      "& .MuiOutlinedInput-root": {
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "0.9rem",
                        alignItems: "flex-start", // Ensures text starts at the top in multiline
                        "& textarea": {
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "0.9rem",
                        },
                        "& fieldset": {
                          borderRadius: 5,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontFamily: "Poppins, sans-serif",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container item justifyContent="flex-end" xs={12} my={2}>
                <MKButton sx={{ borderRadius: 30 }} type="submit" variant="gradient" color="dark">
                  Send Message
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FormSimple;
