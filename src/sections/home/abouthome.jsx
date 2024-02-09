import React from "react";
import './abouthome.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const AboutHome  = () => {

    const handleViewMoreClick = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      };


    return (
        <div>
         <h4 className="green">About</h4>
         <div className="Main">
           
            <div className="one" style= {{marginLeft: "80px"}}>
            myScheme is a National Platform that aims to offer one-stop search and discovery of the Government schemes.<br />

            <br />
            It provides an innovative, technology-based solution to discover scheme information based upon the eligibility of the citizen.

            The platform helps the citizen to find the right Government schemes for them. It also guides on how to apply for different Government schemes. Thus no need to visit multiple Government websites
            <div>
            <br />
            <a href="#" style={{ textDecoration: 'none', color: 'white' }}>
            <Button
                variant="contained"
                size="large"
                style={{
                marginLeft: '1px',
                marginTop: '17px',
                padding: '2%',
                fontWeight: 'bold',
                backgroundColor: '#c2fae4', // Set the background color to white
                color: 'black', // Set the text color to black or your preferred color
                }}
                onClick={handleViewMoreClick}
            >
            <Link to='/about'  style={{ textDecoration: 'none', color: 'inherit' }}>
              View More
             </Link>
            </Button>
            </a>

            </div>
            </div>

            <div className="video-container">
              <div>
              <iframe 
              width="500" 
              height="315" 
              src="https://www.youtube.com/embed/bNOWkB-6cmc?si=f8e4LnW9eQfVhan9" 
              title="YouTube video player" 
              frameborder="10" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
              >
             </iframe>
             </div>
            </div>

        </div>
    </div>
    )
}

export default AboutHome;