import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  IconButton,
  Divider,
  InputAdornment,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import dayjs from "dayjs";

export default function BookingForm() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [date, setDate] = useState(null);

  return (
    <Box
      sx={{
        bgcolor: "#EEECE2",
        borderRadius: 4,
        p: { xs: 2, sm: 4 },
        maxWidth: 800,
        mx: "auto",
        my: 4,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 0.5,
          fontSize: "16px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Ready to Book?
      </Typography>
      <Typography
        sx={{ mb: 3, fontSize: "16px", fontFamily: "Poppins, sans-serif" }}
      >
        Fill out the form below, and we’ll get back to you with more details!
      </Typography>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            placeholder="First Name"
            variant="outlined"
            InputProps={{
              sx: { borderRadius: 5, bgcolor: "#fff" },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            placeholder="Last Name"
            variant="outlined"
            InputProps={{
              sx: { borderRadius: 5, bgcolor: "#fff" },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            placeholder="Email"
            variant="outlined"
            InputProps={{
              sx: { borderRadius: 5, bgcolor: "#fff" },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            placeholder="Phone"
            variant="outlined"
            InputProps={{
              sx: { borderRadius: 5, bgcolor: "#fff" },
            }}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        {/* Adults Counter */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
          <Typography
            sx={{
              mr: 1,
              fontWeight: 500,
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Adults
          </Typography>
          <IconButton
            onClick={() => setAdults(Math.max(0, adults - 1))}
            sx={{
              border: "1px solid #ccc",
              borderRadius: 2,
              p: 0.5,
              mx: 0.5,
              bgcolor: "#fff",
            }}
          >
            <RemoveIcon />
          </IconButton>
          <Typography sx={{ minWidth: 20, textAlign: "center" }}>
            {adults}
          </Typography>
          <IconButton
            onClick={() => setAdults(adults + 1)}
            sx={{
              border: "1px solid #ccc",
              borderRadius: 2,
              p: 0.5,
              mx: 0.5,
              bgcolor: "#fff",
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
        {/* Children Counter */}
        <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
          <Typography
            sx={{
              mr: 1,
              fontWeight: 500,
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Children
          </Typography>
          <IconButton
            onClick={() => setChildren(Math.max(0, children - 1))}
            sx={{
              border: "1px solid #ccc",
              borderRadius: 2,
              p: 0.5,
              mx: 0.5,
              bgcolor: "#fff",
            }}
          >
            <RemoveIcon />
          </IconButton>
          <Typography sx={{ minWidth: 20, textAlign: "center" }}>
            {children}
          </Typography>
          <IconButton
            onClick={() => setChildren(children + 1)}
            sx={{
              border: "1px solid #ccc",
              borderRadius: 2,
              p: 0.5,
              mx: 0.5,
              bgcolor: "#fff",
            }}
          >
            <AddIcon />
          </IconButton>
        </Box>
        {/* Info Text */}
        <Typography
          sx={{
            fontSize: 13,
            color: "#222",
            ml: 2,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Only children aged 12 years and under should be categorized as kids.
          If a child’s age is above 12 years, please add them as an adult.
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Date Picker */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={date}
          onChange={setDate}
          format="DD/MM/YYYY"
          slotProps={{
            textField: {
              fullWidth: true,
              placeholder: "Select Preferred Date",
              InputProps: {
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonthIcon sx={{ color: "#222" }} />
                  </InputAdornment>
                ),
                sx: { borderRadius: 5, bgcolor: "#fff" },
              },
              sx: { mb: 2 },
            },
          }}
        />
      </LocalizationProvider>

      <Divider sx={{ my: 2 }} />

      {/* Message */}
      <TextField
        fullWidth
        multiline
        minRows={5}
        placeholder="Your Message"
        variant="outlined"
        InputProps={{
          sx: { borderRadius: 3, bgcolor: "#fff" },
        }}
        sx={{ mb: 3 }}
      />

      {/* Submit Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#222",
            color: "#fff",
            borderRadius: 5,
            px: 4,
            py: 1.5,
            fontWeight: 600,
            fontSize: 16,
            textTransform: "none",
            boxShadow: "none",
            "&:hover": { bgcolor: "#111" },
          }}
        >
          Send Inquiry
        </Button>
      </Box>
    </Box>
  );
}