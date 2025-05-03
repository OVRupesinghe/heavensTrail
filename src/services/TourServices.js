const apiKey =
  "d42fed51636727929221682c66241c03b1b48f56349f69f5785496a657901b97";
async function fetchTourPackages() {
  const url = `https://www.heavenstrails.com/api/v1/web/tour_packages`;
  const headers = {
    "x-api-key": apiKey,
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching property data:", error.message);
    throw error;
  }
}

async function fetchTourPackage(propertyCode, tpId){
  const url = `https://www.heavenstrails.com/api/v1/web/tour_package/${propertyCode}/${tpId}`
  const headers = {
    "x-api-key": apiKey,
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching property data:", error.message);
    throw error;
  }
}

// New
async function fetchTourListings() {
  // const newurl = `http://localhost:1337/api/tour-listings?populate=*`;
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/tour-listings?populate=*`;

  const headers = {
    "x-api-key": apiKey,
  };

  try {
    const response = await fetch(newurl, {
      method: "GET",
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching property data:", error.message);
    throw error;
  }
}

async function fetchTourDetail(tourDetailId) {
  const populationParams = "?populate[0]=tourOverview&populate[1]=itinerary.subtasks.images&populate[2]=itinerary.accommodations&populate[3]=packages&populate[4]=tourOverview.locations&populate[5]=inclusions&populate[6]=exclusions&populate[7]=packages.currency&populate[8]=facilities.icon&populate[9]=heroImage&populate[10]=itinerary.images&populate[11]=itinerary.accommodations.thumbnail&populate[12]=itinerary.accommodations.facilities&populate[13]=itinerary.accommodations.icons"
  // const newurl = `http://localhost:1337/api/tour-details/` + tourDetailId + populationParams;
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/tour-details/${tourDetailId}${populationParams}`;


  const headers = {
    "x-api-key": apiKey,
  };

  try {
    const response = await fetch(newurl, {
      method: "GET",
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching property data:", error.message);
    throw error;
  }
}

async function fetchAccommodationById(accId) {
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/accommodations/${accId}?populate=*`;
  const headers = {
    "x-api-key": apiKey,
  };

  try {
    const response = await fetch(newurl, {
      method: "GET",
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching property data:", error.message);
    throw error;
  }
}


export { fetchTourPackages, fetchTourPackage, fetchTourListings, fetchTourDetail, fetchAccommodationById };
