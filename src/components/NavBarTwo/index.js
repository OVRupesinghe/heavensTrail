import Link from "@mui/material/Link";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";
import { ReactComponent as Ausi } from "assets/icons/australia.svg";
import Logo_2 from "assets/images/homePage/Logo_2.png";
import CustomSelect from "components/CustomSelect";
import "./navBarTwo.css"; // Import the CSS file for styling
import { CountryContext } from "context/CountryContext";

function NavBarTwo() {
  const [scrolled, setScrolled] = useState(false);
  const { countries, loading } = useContext(CountryContext);
  const navigate = useNavigate();
  const navItems = ["Home", "Tour Packages", "Business Tours", "About Us", "Contact Us"];

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
      case "Round Tours":
        navigate("/pages/round-tours");
        break;
      case "Day Tours":
        navigate("/pages/day-tours");
        break;
      case "Corporate Events":
        navigate("/pages/corporate-events");
        break;
      case "Workshops":
        navigate("/pages/workshops");
        break;
      case "Meetings":
        navigate("/pages/meetings");
        break;
      case "Destination Wedding":
        navigate("/pages/weddings");
        break;
      case "Destinations":
        navigate("/pages/destinations");
        break;
      case "Blogs":
        navigate("/pages/blogs");
        break;
      default:
        navigate("/home");
    }
  };

  const handleScroll = () => {
    if (window.scrollY >= 30) {
      // 30rem in pixels3
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbartwo ${scrolled ? "scrolled" : ""}`}>
      {/* Logo on the left */}
      <div className="logo">
        <img src={Logo_2} alt="Logo" />
      </div>

      {/* Navigation items in the center */}
      <ul className={`nav-items ${scrolled ? "scrolled" : ""}`}>
        {navItems.map((text) => (
          <MKBox component="li" key={text}>
            <MKTypography
              component={Link}
              href="#"
              variant="button"
              sx={{ color: "black" }}
              fontWeight="regular"
              p={1}
              onClick={(e) => onItemClick(text)}
            >
              {text}
            </MKTypography>
          </MKBox>
        ))}
      </ul>

      {/* Button on the right */}
      <div className={`cta ${scrolled ? "scrolled" : ""}`}>
        <MKBox component="ul" display={{ xs: "none", lg: "flex" }} p={0} m={0} sx={{ listStyle: "none" }}>
        <Grid sx={{ maxWidth: "130px" }}>
            <CustomSelect frontIcon={<Ausi />} menuList={countries} isScrolled={scrolled} />
          </Grid>
          <MKButton circular variant="contained" color="black">
            Plan a Trip
          </MKButton>
        </MKBox>
      </div>
    </nav>
  );
}

export default NavBarTwo;
