import React from "react";
import "./aboutSection.css";
import { Button, Typography } from "@material-ui/core"; //Add Avatar here
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import MetaData from "../MetaData";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/randomacc2400";
  };
  return (
    <div className="aboutSection">
      <MetaData title="About" />
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            {/* <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              alt="Founder"
            /> */}
            <Typography>Rachit Khurana</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/randomacc2400" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
