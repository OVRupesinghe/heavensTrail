import React, { useEffect, useState } from "react";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";
import Footer from "components/Footer";
import MKBox from "components/MKBox";
import { UilArrowLeft, UilArrowRight } from "@iconscout/react-unicons";
import NavBarTwo from "components/NavBarTwo";
import { BlogArticlePage } from "constants/images";
import { Box } from "@mui/material";
import { PageIDs } from "constants/pageId";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBlogArticle, fetchFAQs } from "services/TourServices";
import ArticleMarkdown from "./ArticleMarkdown";
import NavBar from "components/NavBar";

function BlogArticle() {
  const [article, setArticle] = useState({});
  const { articleId } = useParams();
  const navigate = useNavigate();
  const getArticleDetails = async () => {
    fetchBlogArticle(articleId)
      .then((res) => {
        setArticle(res.data);
      })
      .catch((error) => {
        console.error("Fetch failed:", error.message);
      });
  };

  useEffect(() => {
    getArticleDetails();
  }, []);

  const handleBackToBlogs = ()=> {
    navigate(`/pages/blogs/`);

  }

  return (
    <div style={{ backgroundColor: "#FEFDF5" }}>
      <NavBar />
      <div style={{ padding: 15, marginTop: "-4.5rem" }}>
        <HeaderThree
          title={article.title}
          backgroundImage={process.env.REACT_APP_BASE_URL + article.heroImage?.url}
          subHead={article.type?.types}
          headerFontSize={55}
          pageId={2321}
        />
      </div>
      {/* Explore our travel Packages */}
      <Grid
        container
        justifyContent="center" // Center the main grid
        sx={{
          marginBottom: "40px",
          width: "100%", // Ensure full width of the container
        }}
      >
        <Grid
          sx={{
            display: "flex",
            marginBottom: "40px",
            backgroundColor: "#FEFDF5",
            width: "80%",
            marginTop: 7,
          }}
        >
          <Grid container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "90%",
                margin: "0 auto",
                padding: 2,
                flexDirection: "column",
              }}
            >
              <ArticleMarkdown content={article.content} />
              {/* <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
              >
                There’s something magical about sunsets in Sri Lanka. The sky
                transforms into a vivid canvas of orange, pink, and purple hues,
                while the golden light bathes the island's diverse landscapes,
                from lush jungles to serene beaches. Each sunset tells a
                different story, leaving an indelible mark on those who
                experience it.
              </MKTypography>
              <MKTypography
                color="black"
                mt={5}
                mb={4}
                sx={{
                  fontSize: "30px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Tranquil Evening at Mirissa Beach
              </MKTypography>
              <MKBox display="flex" justifyContent="center" alignItems="center">
                <MKBox
                  component="img"
                  style={{
                    width: "600px",
                    height: "400px",
                    borderRadius: "4px",
                  }}
                  src={BlogArticlePage.Blog_Article_3}
                  alt={"bgImage"}
                />
              </MKBox>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                Figure 01: Mirissa Beach
              </MKTypography>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
                mt={4}
              >
                As I arrived at Mirissa Beach, the sun was already low in the
                sky, casting long shadows on the soft, golden sand. The waves
                lapped gently against the shore, creating a soothing rhythm that
                matched the calmness of the evening. Families, couples, and solo
                travelers gathered along the coastline, their faces illuminated
                by the warm, amber glow.
              </MKTypography>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
                mt={4}
              >
                The famous Parrot Rock stood prominently against the backdrop of
                the fading sun. I climbed to its top and felt the ocean breeze
                on my face, carrying with it the scent of salt and freedom. From
                this vantage point, the sun seemed almost close enough to touch,
                painting the sky with a dazzling array of colors that reflected
                off the water like liquid gold.
              </MKTypography>
              <MKTypography
                color="black"
                mt={5}
                mb={4}
                sx={{
                  fontSize: "30px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                A Serendipitous Encounter in Ella
              </MKTypography>
              <MKBox display="flex" justifyContent="center" alignItems="center">
                <MKBox
                  component="img"
                  style={{
                    width: "600px",
                    height: "400px",
                    borderRadius: "4px",
                  }}
                  src={BlogArticlePage.Blog_Article_2}
                  alt={"bgImage"}
                />
              </MKBox>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                Figure 01: Mirissa Beach
              </MKTypography>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
                mt={4}
              >
                As I arrived at Mirissa Beach, the sun was already low in the
                sky, casting long shadows on the soft, golden sand. The waves
                lapped gently against the shore, creating a soothing rhythm that
                matched the calmness of the evening. Families, couples, and solo
                travelers gathered along the coastline, their faces illuminated
                by the warm, amber glow.
              </MKTypography>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
                mt={4}
              >
                The famous Parrot Rock stood prominently against the backdrop of
                the fading sun. I climbed to its top and felt the ocean breeze
                on my face, carrying with it the scent of salt and freedom. From
                this vantage point, the sun seemed almost close enough to touch,
                painting the sky with a dazzling array of colors that reflected
                off the water like liquid gold.
              </MKTypography>
              <MKTypography
                color="black"
                mt={5}
                mb={4}
                sx={{
                  fontSize: "30px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                A Golden Hour in Galle Fort
              </MKTypography>
              <MKBox display="flex" justifyContent="center" alignItems="center">
                <MKBox
                  component="img"
                  style={{
                    width: "600px",
                    height: "400px",
                    borderRadius: "4px",
                  }}
                  src={BlogArticlePage.Blog_Article_1}
                  alt={"bgImage"}
                />
              </MKBox>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                Figure 01: Mirissa Beach
              </MKTypography>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
                mt={4}
              >
                As I arrived at Mirissa Beach, the sun was already low in the
                sky, casting long shadows on the soft, golden sand. The waves
                lapped gently against the shore, creating a soothing rhythm that
                matched the calmness of the evening. Families, couples, and solo
                travelers gathered along the coastline, their faces illuminated
                by the warm, amber glow.
              </MKTypography>
              <MKTypography
                color="black"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  lineHeight: "30px",
                }}
                mt={4}
              >
                The famous Parrot Rock stood prominently against the backdrop of
                the fading sun. I climbed to its top and felt the ocean breeze
                on my face, carrying with it the scent of salt and freedom. From
                this vantage point, the sun seemed almost close enough to touch,
                painting the sky with a dazzling array of colors that reflected
                off the water like liquid gold.
              </MKTypography> */}
              <MKBox display="flex" justifyContent="center" alignItems="center" mt={4}>
                <MKButton
                onClick={handleBackToBlogs}
                  style={{
                    marginTop: "5px",
                    marginBottom: "5px",
                    marginRight: "20px",
                  }}
                  size="small"
                  circular
                  variant="outlined"
                  color="black"
                >
                  <UilArrowLeft style={{ marginRight: 5 }} />
                  Back to Blogs
                </MKButton>
                {/* <MKButton
                  style={{ marginTop: "5px", marginBottom: "5px" }}
                  size="small"
                  circular
                  variant="contained"
                  color="black"
                >
                  Next Article
                  <UilArrowRight style={{ marginLeft: 5 }} />
                </MKButton> */}
              </MKBox>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default BlogArticle;
