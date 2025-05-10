import React, { useEffect, useState } from "react";
import MKButton from "components/MKButton";
import Grid from "@mui/material/Grid";
import HeaderThree from "layouts/sections/page-sections/page-headers/components/HeaderThree";
import Footer from "components/Footer";
import MKBox from "components/MKBox";
import { UilArrowLeft } from "@iconscout/react-unicons";
import { Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBlogArticle } from "services/TourServices";
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
