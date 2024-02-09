import React from "react";
import { Box, Typography, Container, Button, Stack } from "@mui/material";
import Faq from "react-faq-component";
import Layout from "../../components/Layout/Layout";
import FAQImage from "../../images/faq.svg"; 


const FAQ = () => {
    const styles = {
      titleTextColor: "blue",
      rowTitleColor: "blue",
    };
  
    const config = {};
  
    return (
      <Layout>
            <div>
              <Typography
                textAlign="center"
                font-size="1.5rem"
                sx={{ fontWeight: 600 }}
                variant="h2"
                marginTop="17px"
                marginBottom={"30px"}
                bgcolor={"#89ffac"}
                padding={"6px"}
              >
                Frequently Asked Questions
              </Typography>
          </div>     
           
        <Container sx={{ mt: 2 }}>
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
              alt="FAQ Image"
              style={{ maxWidth: "40%", marginRight: "10px" , marginBottom: "50px"}}
            />
  
            {/* FAQ on the right */}
            <div>
              {/* <Typography
                textAlign="center"
                font-size="3.5rem"
                sx={{ fontWeight: 600 }}
                variant="h2"
                marginTop="27px"
                marginBottom={"30px"}
              >
                Frequently Asked Questions.
              </Typography> */}
  
              <Faq
                data={data}
                styles={{ ...styles, bgColor: "#c2fae4" }}
                config={config}
              />
            </div>
          </Box>
        </Container>
      </Layout>
    );
  };
  
  export default FAQ;






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
        title: "Can I apply for the schemes through myScheme?",
        content: `For now, the platform shall direct you to the application page of the scheme of 
        your choice.It is envisaged that in the upcoming phases, myScheme shall have the feature to 
        apply for schemes / services from within the platform/ app.`,
      },
      {
        title: "What all information about a particular scheme can I find on myScheme ?",
        content: `myScheme provides details on the eligibility criteria, application process,
         and benefits being offered under that scheme. myScheme also answers the 
         Frequently Asked Questions(FAQs) about the scheme.`
      },
      {
        title: "What are the broad sectors across which the schemes are available in myScheme ?",
        content: `In myScheme, schemes & services are available across a wide range of sectors
         such as Agriculture, Rural & Environment, Business & Entrepreneurship, Education & Learning,
          Health & Wellness, Housing & Shelter, Banking, Financial Services & Insurance, Public Safety,
           Law & Justice, Science, IT & Communication, Skills & Employment, Social welfare & Empowerment,
            Sports & Culture, Tax & Revenue, Transport & Infrastructure, Travel & Tourism, 
            Utility & Sanitation..`,
      },

      {
        title: "Does the myScheme platform provide multilingual support?",
        content: `Yes, currently the platform content is available in two languages i.e., 
        Hindi & English. Content in other Indian languages will also be provided soon..`,
      },

      {
        title: "Does myScheme showcase Central as well as State - specific schemes ?",
        content: `Currently, around 100 Central Government schemes have been onboarded on the 
        platform. State schemes will also be onboarded soon..`,
      },

      {
        title: "I found some errors in the content of the schemes..?",
        content: `In case of any issue in the content, please refer to the English version and 
        if the issue is found there also please refer to respective Ministry's portal. You may
         also send email to support-myscheme[at]digitalindia[dot]gov[dot]in.`,
      },

      {
        title: `I want to explore the schemes under which Legal Assistance is provided to the 
        citizens.Would it be possible through myScheme??`,
        content: `Yes, the “Tags” feature of myScheme empowers the citizen to explore the schemes 
        based on the type and the extent of the benefits provided..`,
      },

      {
        title: `I want to apply for a specific scheme but I need to know the documents that I am 
        needed to provide to apply.Can I find this information in myScheme??`,
        content: `Yes, myScheme provides the complete list of the required documents for all the schemes..`,
      }

    ],
  };