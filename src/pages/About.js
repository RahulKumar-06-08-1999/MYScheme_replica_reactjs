import React from "react";
import Layout from "../components/Layout/Layout";
// import Button from '@mui/material/Button';
import { Typography, Box, Grid } from "@mui/material";
import './About.css'; // Import CSS file for styling
import Container from "@mui/material/Container";
import Abouimage from "../images/about-text.svg"; 
import Image1 from "../images/AbouteligibilityCheck.svg";
import Image2 from "../images/AboutSchemeFinder.svg";
import Image3 from "../images/AboutSchemeindetails.svg";

const About = () => {
    return (
        <Layout>
            <div style={{ position: "relative", overflow: "hidden" }}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "90px",
                        left: "10px",
                        width: "220%",
                        height: "160%",
                        background: "linear-gradient(to right, #89ffac, #ffffff)",
                        zIndex: -1,
                        transform: "skewY(-10deg)",
                        transformOrigin: "0",
                    }}
                />
                <div>
                    <Typography
                        textAlign="center"
                        fontSize="2.8rem"
                        fontWeight={600}
                        variant="h2"
                        marginTop="17px"
                        marginBottom={"30px"}
                        padding={"16px"}
                    >
                        About us
                    </Typography>
                </div>
            </div>

            <div className="Main">          
            <Typography variant="h4" style={{ marginLeft: "30px", marginTop: "-90px", display: "inline-block" }} gutterBottom>
              Our Objective
            </Typography>

            <Typography variant="body1" style={{ marginLeft: "-140px", marginTop: "20px"}} paragraph>
                <strong>Our vision:</strong> To enhance the quality of life for citizens by simplifying their access to government
                 services and resources. <br /> <br /> 
                <strong>Our Mission:</strong> To revolutionize the government-user interface for accessing 
                schemes and benefits, making it efficient and user-friendly. We aim to significantly reduce the 
                time and effort required for citizens to discover and utilize government programs.
            </Typography>
        </div>

            <div className="video-container" style={{ marginLeft: "640px", marginTop: "-360px"}} >
                <div>
                    <iframe 
                        width="500" 
                        height="315" 
                        src="https://www.youtube.com/embed/bNOWkB-6cmc?si=f8e4LnW9eQfVhan9" 
                        title="YouTube video player" 
                        frameBorder="10" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    />
                </div>
            </div>

            <Box
                component="footer"
                sx={{
                marginTop: "40px",
                position: "relative",
                bgcolor: "#89ffac",
                clipPath: "polygon(0 0, 100% 39%, 100% 100%, 10% 100%)",
                }}
                >
            

            <Container
                sx={{
                pt: 15,
                pb: 13,
                textAlign: { xs: "center", md: "unset" },
                }}
            >
            {/* Image on the Right */}
            <img
              src={Abouimage}
              alt="About"
              style={{ maxWidth: "40%", marginLeft: "690px" , marginTop: "10px"}}
            />

            {/* FAQ on the left */}
            <Container style={{width:"600px", marginLeft:"20px", marginTop:"-350px" }}>
            {data.map((item, idx) => (
            <Typography key={idx} style={{}}>
                {item.data}
            </Typography>
            ))}
            </Container>
        </Container>
        </Box>

        

        <Container sx={{ pt: 11, pb: 13, }}>
        <Grid container spacing={7.3}>

        <Grid item xs={12} md={4}>
        <Box>
            <img
            src={Image1}
            alt="Eligibiltycheck"
            style={{ height: "240px", marginLeft: "45px", marginTop: "30px" }}
            />
            <Typography variant="h5" fontWeight={"bold"} marginLeft={"66px"} gutterBottom>
            Eligibility Check
            </Typography>
            <Typography marginLeft={"66px"}>
            You can check your eligibility for schemes using different criteria and personal attributes
            </Typography>
        </Box>
        </Grid>


            <Grid item xs={12} md={4}>
            <Box>
                <img
                src={Image2}
                alt="Schemefinder"
                style={{ height: "240px", marginTop: "30px" }}
                />
            <Typography variant="h5" fontWeight={"bold"} marginLeft={"66px"} gutterBottom>
            Scheme Finder
            </Typography>
            <Typography marginLeft={"66px"}>
            Fast and easy searching with filter based drill downs for various Government Schemes
            </Typography>
            </Box>
            </Grid>

            <Grid item xs={12} md={4}>
            <Box>
                <img
                src={Image3}
                alt="SchemeinDetails"
                style={{ height: "240px", marginTop: "30px" }}
                />
            <Typography variant="h5" fontWeight={"bold"} marginLeft={"66px"} gutterBottom>
            Scheme in detail
            </Typography>
            <Typography marginLeft={"66px"}>
            Deep dive into dedicated scheme pages for fine grained scheme details before you apply
            </Typography>
            </Box>
            </Grid>

        </Grid>
        </Container>

            
        </Layout>
    )
}

export default About;

const data = 
[{ data :
    `The myScheme platform, spearheaded by the National e-Governance Division (NeGD) and 
    supported by the Ministry of Electronics and Information Technology (MeitY) and the 
    Department of Administrative Reforms and Public Grievances (DARPG), serves as a pioneering 
    national initiative. It revolutionizes access to government schemes by providing a unified 
    interface for citizens to seamlessly explore and discover relevant schemes tailored to their
     eligibility criteria. By amalgamating innovative technology solutions, myScheme eliminates 
     the hassle of navigating through multiple government websites. It not only assists citizens 
     in identifying suitable government schemes but also offers guidance on the application process.
      Through collaboration with various central and state ministries/departments, myScheme embodies 
      a collaborative effort towards empowering citizens with efficient access to government resources.`
}]