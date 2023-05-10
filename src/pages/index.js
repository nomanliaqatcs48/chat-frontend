import React from "react";
import { Box, Container } from "@mui/material";
import Layout from "../baseStructure/Layout";
// import Blog from "../components/Blog/Blog";
import { graphql } from "gatsby";
import "../components/FreeTrialAbout/index.scss";
import BlogHead from "../components/BlogHead";
import HeroSection from "../components/HeroSection/HeroSection";
import SimpleSetup from "../components/SimpleSetup/SimpleSetup";
import Plateforms from "../components/Plateforms/Plateforms";
import SuperEasy from "../components/SuperEasy/SuperEasy";
import GetStarted from "../components/common/GetStarted";
import Feedback from "../components/FeedBack/FeedBack";
import FrequentQuestions from "../components/common/FrequentQuestions";
import FreeTrial from "../components/FreeTrial/FreeTrial";
import "../../src/styles/common/globalStyles.module.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Seo from "../components/common/SEO";
import { Helmet } from "react-helmet";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Raleway",
    },
    body1: {
      fontFamily: "Raleway",
    },
  },
});

const IndexPage = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Helmet>
          <meta name="robots" content="index, follow" />
          <meta name="robots" content="max-image-preview:standard" />
        </Helmet>
        {/* \SEO Component */}
        <Seo
          title="Invochat - An all-in-one business collaboration tool"
          description="Invochat is an innovative way to conduct internal/external business collaboration. It's faster, better, organised, and more effective than email"
          tag="index"
          pageUrl=""
        />
        <HeroSection />
        <SimpleSetup />
        <Plateforms />
        <SuperEasy />
        <GetStarted />
        <Feedback />
        <Container>
          <Box className="BlogPage">
            <BlogHead blog={data?.allStrapiBlog?.nodes} />
          </Box>
        </Container>
        <FrequentQuestions />
        <FreeTrial />
      </Layout>
      <script type="application/ld+json">
        {`
            { 
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Invochat",
              "url": "https://invochat.io/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "{search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
        `}
      </script>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does InvoChat cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "InvoChat is free to use. You can see further details about the features we offer for free from here."
                }
              },
              {
                "@type": "Question",
                "name": "What features do I get with InvoChat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1. What features do I get with InvoChat? 2. Read receipts 3. Screen pin lock 4. Google Drive and Meet integration 5. Notification management 6. Dedicated workspaces 7. Topic-specific chatroom 8. Unlimited team members 9. File sharing & attachments& attachments"
                }
              },
              {
                "@type": "Question",
                "name": "How to enable desktop notifications for InvoChat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Go to your ‘notification’ settings. From there you can easily enable or disable notifications for your desktop. You can also turn on email notifications for unread msgs.  Easily manage room-specific notifications. You can change settings accordingly if you want to be notified about everything or nothing or just specific mentions."
                }
              },
              {
                "@type": "Question",
                "name": "How to create workspaces in InvoChat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Visit the website invochat.io, and click on this ‘create workspace’ button, given on the top right corner of your screen. Enter your email address. You will receive a six-digit confirmation code in your email for confirmation. Set up your details such as first name, last name, and username, and set your password and pin for further security. Give your workspace a name and hand-pick a URL. You can get started by bringing in your team members to your workspace."
                }
              }
            ]
          }
        `}
      </script>

      <script type="application/ld+json">
        {`
         {
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": "Invochat",
          "url": "https://invochat.io/",
          "logo": "https://invochat.io/static/InvoChat-Logo-2b715d305637b88a9882988f4d62b5b0.png",
          "alternateName": "Invochat",
          "sameAs": [
            "https://www.facebook.com/invochatnow",
            "https://www.linkedin.com/company/invochatnow",
            "https://twitter.com/Invochatnow"
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+1(754) 258-7812",
              "contactType": "customer service",
              "email": "info@invochat.io",
              "areaServed": "US",
              "availableLanguage": "en"
            }
          ]
        }
        
        `}
      </script>
    </ThemeProvider>
  );
};
export const query = graphql`
  query MyQuerystwo {
    allStrapiBlog(sort: { fields: createdAt, order: DESC }) {
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
        createdAt
      }
    }
  }
`;

export default IndexPage;
