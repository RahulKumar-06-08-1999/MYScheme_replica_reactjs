import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import React from "react";
import { Typography, Button, Stack } from "@mui/material";
import Faq from "react-faq-component";
import FAQImage from "../../images/faq.svg"; 
import { Link } from "react-router-dom";



// ----------------------------------------------------------------------


export default function FAQHOME() {

  const handleViewMoreClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

    const styles = {
        titleTextColor: "blue",
        rowTitleColor: "blue",
      };
    
    const config = {};
  
    const mainFooter = (
      <Box

        component="footer"
        sx={{
          position: "relative",
          bgcolor: "#a1ffc5",
          clipPath: "polygon(0 0, 100% 39%, 100% 100%, 0% 100%)",
        }}
      >
        <Divider />

        <Typography
                textAlign="center"
                font-size="1.5rem"
                sx={{ fontWeight: 600 }}
                variant="h2"
                marginTop="237px"
                marginBottom={"-90px"}
                bgcolor={"#89ffac"}
                padding={"6px"}
              >
                Frequently Asked Questions
              </Typography>

        <Container
        sx={{
          pt: 13,
          pb: 6,
          textAlign: { xs: "center", md: "unset" },
        }}
      >

        <Container sx={{ mt: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row", // Updated to row
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#cbeee5",
            }}
          >
            {/* Image on the left */}
            <img
              src={FAQImage}
              alt="FAQ"
              style={{ maxWidth: "40%", marginRight: "10px" , marginBottom: "50px"}}
            />
  
            {/* FAQ on the right */}
            <div>            
              <Faq
                data={data}
                styles={{ ...styles, bgColor: "#c2fae4" }}
                config={config}
              />
            </div>
          </Box>
        </Container>

            <Button
                variant="contained"
                size="large"
                style={{
                  marginLeft: '750px',
                  marginTop: '17px',
                  padding: '2%',
                  fontWeight: 'bold',
                  backgroundColor: '#89ffac', // Set the background color to white
                  color: 'black', // Set the text color to black or your preferred color
                }}
                onClick={handleViewMoreClick} // Scroll to the top before opening FAQ
            >
             <Link to='/faq'  style={{ textDecoration: 'none', color: 'inherit' }}>
              View More
             </Link>
            </Button>
        </Container> 
      </Box>

    );
    return mainFooter;
};





const data = {
    rows: [
      {
        title: "What is myScheme?,",
        content: `myScheme is an e-Marketplace for Govt. schemes and services.
         Using myScheme you can find various government schemes, check your eligibility,
          and apply for the schemes..`,
      },
      {
        title: "How myScheme will help common citizens?",
        content:
          `myScheme will reduce the time and effort of citizens in searching for appropriate
           government schemes.The easy user interface of myScheme helps common people 
           a lot in discovering and applying for schemes.`,
      },
      {
        title: "How does myScheme work? How do I check for my eligibility through myScheme ?",
        content: `myScheme offers a convenient three - step process for the citizens to discover the
         government schemes for which they are eligible: 
         
         Step 1 - The user enters his / her attributes such as demographic, income, social details, etc.

         Step 2 - The myScheme findsthe relevant schemes from hundreds of schemes for the user.

         Step 3 - The user can select from the list of eligible schemes and get more information
          from the dedicated scheme page with detailed knowledge, FAQs, and application process 
          and traverse to the application URL to apply.         
         `,
      },
      {
        title: "Does myScheme showcase Central as well as State - specific schemes ?",
        content: `Currently, around 100 Central Government schemes have been onboarded on the 
        platform. State schemes will also be onboarded soon..`,
      },
      {
        title: `I want to apply for a specific scheme but I need to know the documents that I am 
        needed to provide to apply.Can I find this information in myScheme??`,
        content: `Yes, myScheme provides the complete list of the required documents for all the schemes..`,
      }
    ],
};