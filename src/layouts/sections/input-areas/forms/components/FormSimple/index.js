import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import emailjs from "@emailjs/browser";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import { useRef } from "react";

function FormSimple() {
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

  const sendSimpleMessage = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted with values:", form);
    console.log(process.env.REACT_APP_SERVICE_ID)
    console.log(process.env.REACT_APP_TEMPLATE_ID)
    console.log(process.env.REACT_APP_PUBLIC_ID)
    emailjs
      .send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {
        fname: form.fname,
        lname: form.lname,
        phone: form.phone,
        email: form.email,
        message: form.message,
      }, process.env.REACT_APP_PUBLIC_ID)
      .then(
        () => {
          alert("✅ Message sent successfully! We'll be in touch shortly.");
        },
        (error) => {
          console.error(error);
          alert("Oops!, something went wrong. Please try again.");
        }
      );
  };
  return (
    <MKBox component="section" sx={{ padding: "0px" }}>
      <Container>
        <Grid container item xs={12} lg={12}>
          <MKBox width="100%" autoComplete="off" component="form" onSubmit={sendSimpleMessage} ref={formRef}>
            <MKBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput
                    backgroundColor="#FEFDF5"
                    sx={{
                      backgroundColor: "#FEFDF5",
                      borderRadius: 30,
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderRadius: 30,
                        },
                      },
                    }}
                    variant="outlined"
                    label="First Name"
                    name="fname"
                    onChange={handleChange}
                    fullWidth
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
                        "& fieldset": {
                          borderRadius: 30,
                        },
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
                        "& fieldset": {
                          borderRadius: 30,
                        },
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
                        "& fieldset": {
                          borderRadius: 30,
                        },
                      },
                    }}
                  />
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
                        "& fieldset": {
                          borderRadius: 5,
                        },
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
