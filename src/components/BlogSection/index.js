
import React from "react";
import { Box, Grid, Container } from "@mui/material";
import Blog from "../Blog/Blog";
import FreeTrialAbout from "../FreeTrialAbout";
import { Link, graphql } from "gatsby";
import "../FreeTrialAbout/index.scss";
import BlogHead from "../BlogHead";

const BlogSection = ({ data }) => {
  {
    console.log(data, "Husnain");
  }
  return (
    <>
      <Container>
        <Box className="BlogPage">
          <BlogHead />
          <Grid container spacing={3} sx={{ display: "flex" }}>
            {/* {data?.allStrapiBlog?.nodes?.map((blog, index) => {
              return (
                <Blog
                //   blog={blog}
                //   key={index}
                  customClass={index === 0 ? true : false}
                />
              );
            })} */}
            <Blog
                //   blog={blog}
                //   key={index}
                //   customClass={index === 0 ? true : false}
                />
          </Grid>
        </Box>
      </Container>
      <FreeTrialAbout />
    </>
  );
};
export const query = graphql`
query MyQuerys {
    allStrapiBlog {
      nodes {
        Slug
        Content
        Title
        id
        Image {
          url
        }
        createdAt
        check {
          data {
            check
          }
        }
      }
    }
  }`;

export default BlogSection;