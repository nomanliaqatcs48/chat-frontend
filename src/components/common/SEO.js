import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
// import favicon from "../../images/favicon.svg";
import { useStaticQuery, graphql } from "gatsby";
import { siteMetadata } from "../../../gatsby-config";

const Seo = ({ description, lang, meta, title, blogId, tag, pageUrl, data }) => {
//   const data = useStaticQuery(
//     graphql`
//       query {
//         allStrapiBlog {
//           nodes {
//             Slug
//             Content
//             Title
//             id
//             Image {
//               url
//               alternativeText
//             }
//             createdAt
//             check {
//               data {
//                 check
//               }
//             }
//             metaTitle
//             metaKeywords
//             metaDescription
//             Tags
//             Add_Canonical_Link
//           }
//         }
//       }
//     `
//   );

  /* Filtering the data from the query to get the data for the specific blog. */
//   const GlobalSeo = data?.allStrapiBlog?.nodes;
//   const results = GlobalSeo?.filter((element) => element?.id === blogId);

//   console.log("title", blogId);
//   console.log("title_1", title || data?.metaTitle);
//   console.log("title_2", description || data?.metaDescription);
  //   const pageTitle = title || data?.metaTitle;
  const pageTitle = "InvoChat Title";
  //   const pageDesc = description || data?.metaDescription;
  const pageDesc = "InvoChat Description";
  const image = `https://invozone.com/static/fdff9a8231f428161146a1d36f03e5de/collaborative_intelligence_c7fcee57a2.jpg`; //data ? data.Image[0].url : "";
  const imgAlt = title || data?.metaTitle; //data ? data?.Image[0]?.alternativeText : "";
  const pageLink =
    pageUrl == "blogs"
      ? data?.Add_Canonical_Link
      : siteMetadata?.siteUrl + pageUrl;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={pageTitle}
      link={[
        {
          rel: `canonical`,
          href: pageLink,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: pageDesc,
        },
        {
          name: `robots`,
          content: "index, follow",
        },
        {
          name: `keywords`,
          content: data ? data?.metaKeywords : "",
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: pageDesc,
        },
        {
          property: `og:url`,
          content: pageLink,
        },
        {
          property: `og:type`,
          content: "website",
        },
        {
          property: "og:image:alt",
          content: imgAlt,
        },
        {
          property: `tag`,
          content: tag || data?.Tags,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: pageDesc,
        },
        {
          name: `twitter:url`,
          content: pageLink,
        },
        {
          name: "twitter:image",
          content: image,
        },
        {
          name: `twitter:creator`,
          content: `@invochat`,
        },
        {
          name: `og:locale`,
          content: "en-us",
        },
        {
          name: `image`,
          content: image,
        },
        {
          property: "og:image:width",
          content: 1200,
        },
        {
          property: "og:image:height",
          content: 600,
        },
        {
          name: `twitter:image:alt`,
          content: imgAlt,
        },
        {
          name: `twitter:site`,
          content: `@invochat`,
        },
      ]
        .concat(
          image
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    >
      {/* <link rel="shortcut icon" href={GlobalSeo?.metaImage.localFile.publicURL} /> */}
    </Helmet>
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
