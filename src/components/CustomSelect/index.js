import React, { useState, useEffect, useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import OutlinedInput from "@mui/material/OutlinedInput";
import { UilAngleDown } from "@iconscout/react-unicons";
import { getCountryIcon } from "../../constants/countryFlagMapper";
import { CountryContext } from "context/CountryContext";

const CustomSelect = ({ title, menuList, frontIcon, isScrolled, fullWidth, backgroundColor }) => {
  const [value, setValue] = useState("");
  const [flag, setFlag] = useState(null);
  const { setSelectedCountryCode } = useContext(CountryContext);

  const handleChange = (event) => {
    setValue(event.target.value);
    setSelectedCountryCode(value);
  };

  useEffect(() => {
    setValue(menuList[0]?.shortCode);
    const icon = getCountryIcon(menuList[0]?.shortCode);
    setSelectedCountryCode(menuList[0]?.shortCode);
    setFlag(icon);
  }, [menuList]);

  const handleFlag = (shortCode) => {
    console.log(shortCode);
    const icon = getCountryIcon(shortCode);
    setFlag(icon);
  };

  return (
    <FormControl fullWidth size="medium">
      <InputLabel
        sx={{
          color: "white",
        }}
        id="custom-select-label"
      >
        {title}
      </InputLabel>
      <Select
        MenuProps={{
          disableScrollLock: true,
        }}
        labelId="custom-select-label"
        id="demo-select-large"
        value={value}
        onChange={handleChange}
        input={
          <OutlinedInput
            label={title}
            startAdornment={
              <InputAdornment style={{ width: "20px", height: "20px" }} position="start">
                {flag}
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                {fullWidth ? <UilAngleDown /> : <ArrowDropDownIcon />}
              </InputAdornment>
            }
          />
        }
        sx={{
          height: "2.8rem",
          width: "100%",
          color: "white",
          backgroundColor: fullWidth ? (backgroundColor ? backgroundColor : "#FEFDF5 ") : "",
          borderRadius: "30px",
          "& .MuiOutlinedInput-notchedOutline": {
            border: fullWidth ? "solid" : "none",
            borderRadius: "30px",
            borderWidth: "1px",
            borderColor: "#C9C5BA",
          },
          "& .MuiSvgIcon-root": {
            color: !isScrolled ? "white !important" : "black !important",
          },
          "& .MuiSelect-select": {
            color: !isScrolled ? "white !important" : "black !important",
            backgroundColor: fullWidth ? (backgroundColor ? backgroundColor : "#FEFDF5 ") : "",
          },
        }}
      >
        <MenuItem value=""></MenuItem>
        {menuList &&
          menuList.length > 0 &&
          menuList.map((item) => (
            <MenuItem
              sx={{ marginBottom: "2px" }}
              key={item.shortCode}
              value={item.shortCode}
              onClick={() => handleFlag(item.shortCode)}
            >
              {item.shortCode}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
