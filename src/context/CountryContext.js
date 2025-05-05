import React, { createContext, useEffect, useState } from "react";
import { fetchCountries  as fetchCountriesService} from "services/TourServices";

export const CountryContext = createContext();


export const CountryProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCountryCode, setSelectedCountryCode] = useState("");

    const fetchCountries = async () => {
      try {
        const data = await fetchCountriesService();
        const fetchedCountries = data.data;
        setCountries(fetchedCountries);
        if (fetchedCountries.length > 0) {
          setSelectedCountryCode(fetchedCountries[0].shortCode);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchCountries();
    }, []);
  
    return (
      <CountryContext.Provider value={{ countries, loading, selectedCountryCode, setSelectedCountryCode }}>
        {children}
      </CountryContext.Provider>
    );
  };