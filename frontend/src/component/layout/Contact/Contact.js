import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import MetaData from "../MetaData";

const Contact = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/rachitk24";
  };
  return (
    <div className="contactContainer">
      <MetaData title="Contact" />
      <a className="mailBtn" href="mailto:dekhlo30@gmail.com">
        <Button>Click here to send your query to us via mail</Button>
      </a>
      <a className="mailBtn"
      href="https://www.youtube.com"
      target="blank"
      >
        <Button>Visit our YouTube Channel  </Button>
        <YouTubeIcon className="youtubeSvgIcon" />
      </a>
      <a className="mailBtn" href="https://instagram.com" target="blank">
        <Button onClick={visitInstagram}> Visit Instagram Page</Button>
        <InstagramIcon className="instagramSvgIcon" />
      </a>
            
    </div>
  );
};

export default Contact;
