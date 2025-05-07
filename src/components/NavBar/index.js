import Link from "@mui/material/Link";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MKBox from "components/MKBox";
import Grid from "@mui/material/Grid";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import { ReactComponent as Ausi } from "assets/icons/australia.svg";
import Logo from "assets/images/homePage/Logo.svg";
import Logo_2 from "assets/images/homePage/Logo_2.png";
import CustomSelect from "components/CustomSelect";
import "./styles.css"; // Import the CSS file for styling
import { CountryContext } from "context/CountryContext";

function NavBar() {
  const { countries, loading } = useContext(CountryContext);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home" },
    {
      name: "Tour Packages",
    },
    {
      name: "Business Tours",
      dropdown: ["Destination Wedding", "Incentive Tours", "Meetings", "Conferences & Exhibitions"],
    },
    { name: "Destinations" },
    { name: "Accommodations" },
    { name: "Blogs" },
    { name: "About Us" },
    { name: "Contact Us" },
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
      case "Accommodations":
        navigate("/pages/accomadation");
        break;
      default:
        navigate("/home");
    }
  };

  const handleScroll = () => {
    if (window.scrollY >= 250) {
      // 30rem in pixels
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
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo on the left */}
      <div className="logo">
        <img src={scrolled ? Logo_2 : Logo} alt="Logo" />
      </div>

      {/* Navigation items in the center */}
      <ul className={`nav-items ${scrolled ? "scrolled" : ""}`}>
        {navItems.map((item, index) => (
          <MKBox
            component="li"
            key={index}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <MKTypography
              component={Link}
              href="#"
              variant="button"
              sx={{ color: "black" }}
              fontWeight="regular"
              p={1}
              onClick={(e) => onItemClick(item.name)}
            >
              {item.name}
            </MKTypography>
            {/* Dropdown Menu */}
            {item.dropdown && hoveredItem === item.name && (
              <MKBox className="dropdown-menu">
                {item.dropdown.map((subItem) => (
                  <MKTypography
                    key={subItem}
                    component={Link}
                    variant="button"
                    fontWeight="regular"
                    href="#"
                    style={{
                      color: "black",
                      fontFamily: "Poppins",
                      textAlign: "center",
                      fontSize: "0.8rem",
                    }}
                    onClick={() => onItemClick(subItem)}
                  >
                    {subItem}
                  </MKTypography>
                ))}
              </MKBox>
            )}
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

export default NavBar;
