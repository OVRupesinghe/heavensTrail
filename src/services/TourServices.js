const apiKey = "d42fed51636727929221682c66241c03b1b48f56349f69f5785496a657901b97";

// New End Points
async function fetchTourListings() {
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
    console.error("Error fetching tour listing data:", error.message);
    throw error;
  }
}

async function fetchTourDetail(tourDetailId) {
  const populationParams =
    "?populate[0]=tourOverview&populate[1]=itinerary.subtasks.images&populate[2]=itinerary.accommodations&populate[3]=packages&populate[4]=tourOverview.locations&populate[5]=inclusions&populate[6]=exclusions&populate[7]=packages.currency&populate[8]=facilities.icon&populate[9]=heroImage&populate[10]=itinerary.images&populate[11]=itinerary.accommodations.thumbnail&populate[12]=itinerary.accommodations.facilities&populate[13]=itinerary.accommodations.icons&populate[14]=countries";
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
    console.error("Error fetching tour detail data:", error.message);
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
    console.error("Error fetching accommodation data:", error.message);
    throw error;
  }
}

async function fetchExperiences() {
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/experiences?populate=*`;

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
    console.error("Error fetching experiences data:", error.message);
    throw error;
  }
}

async function fetchFAQs() {
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/faqs?populate=*`;

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

async function fetchCountries() {
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/countries?populate=*`;

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
    console.error("Error fetching countries data:", error.message);
    throw error;
  }
}

async function fetchWeddings() {
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/weddings?populate=*`;

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
    console.error("Error fetching weddings data:", error.message);
    throw error;
  }
}

async function fetchDestinations() {
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/destinations?populate=*`;

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
    console.error("Error fetching destinations data:", error.message);
    throw error;
  }
}

async function fetchMeetings() {
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/meetings?populate[0]=facilities.icon&populate[1]=standardPrices&populate[2]=deluxePrices&populate[3]=images&populate[4]=thumbnail&populate[5]=premiumPrices&populate[6]=countries&populate[7]=duration`;

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
    console.error("Error fetching meeting data:", error.message);
    throw error;
  }
}

async function fetchDestinationDetail(destinationId) {
  const populationParams =
    "?&populate[0]=countries&populate[1]=activities.thumbnail&populate[2]=travelSpots.thumbnail&populate[3]=heroImage&populate[4]=city&populate[5]=activities.destinationFeatures.icon";
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/destinations/${destinationId}${populationParams}`;

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
    console.error("Error fetching destination data:", error.message);
    throw error;
  }
}

async function fetchBlogs() {
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/articles?populate=*`;

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
    console.error("Error fetching blogs data:", error.message);
    throw error;
  }
}

async function fetchBlogArticle(articleId) {
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/articles/${articleId}?populate=*`;

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
    console.error("Error fetching blog article data:", error.message);
    throw error;
  }
}

async function fetchAccommodations() {
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/accommodations?populate=*`;

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
    console.error("Error fetching accommodation data:", error.message);
    throw error;
  }
}

async function fetchPageDetails() {
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/page-details?&populate[0]=homePage.backgroundImage&populate[1]=country`;

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
    console.error("Error fetching page detail data:", error.message);
    throw error;
  }
}

async function fetchExperienceDetail(detailId) {
  const newurl = `${process.env.REACT_APP_BASE_URL}/api/experiences/${detailId}?&populate[0]=images&populate[1]=countries&populate[2]=cities.city&populate[3]=highlights&populate[4]=inclusions&populate[5]=whatToWear&populate[6]=whatToBring&populate[7]=tags&populate[8]=heroImage`;

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
    console.error("Error fetching experience data:", error.message);
    throw error;
  }
}

export {

  fetchTourListings,
  fetchTourDetail,
  fetchAccommodationById,
  fetchExperiences,
  fetchFAQs,
  fetchCountries,
  fetchMeetings,
  fetchDestinations,
  fetchWeddings,
  fetchDestinationDetail,
  fetchBlogs,
  fetchBlogArticle,
  fetchAccommodations,
  fetchPageDetails,
  fetchExperienceDetail
};
