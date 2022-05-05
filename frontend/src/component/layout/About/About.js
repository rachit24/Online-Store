import React from "react";
import "./aboutSection.css";
import { Typography } from "@material-ui/core"; //Add Avatar here
import MetaData from "../MetaData";
const About = () => {
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
            <span>
              <h4>Who We Work With</h4>
              <h5>RETAILERS</h5>
              <p>Retailers love our products because we have a huge variety of stunning and beautiful handmade products that are in huge demands.</p>
              <h5>SUSTAINABLE BRANDS</h5>
              <p>Sustainable brands loves our green packaging, we have developed products that can be used as green packaging which have the lowest environmental impact.</p>
              <h5>HANDICRAFTS BUYERS</h5>
              <p>Handicrafts buyer loves our products because all of our products are beautifully designed and at the same time are safe for the environment.</p>
            </span>
          </div>
          <div className="aboutSectionContainer2">
          <Typography>Our Online Handicraft Store has brought together artisans from West Bengal, Orissa, Uttar Pradesh and Kashmir to create sustainable handmade products. We have a huge range of products designed by using natural substances. These products include home and decorative products such as lanterns, wind chimes, clocks as well as lifestyle products such as bags.</Typography>
          <h6>QUALITY</h6>
          <p>All our products handmade and are made up of natural fibers but we ensure that the quality we deliver be nothing less than what can be expected of industrial goods if not better.</p>
          <h6>ECO-FRIENDLY</h6>
          <p>The core of all our design though is to create eco-friendly products that our users can use to replace plastic products for everyday use.</p>
          <h6>TIMELESS DESIGNS</h6>
          <p>All of our products are designed such that they remain appealing through the passage of time and can even be passed down from generation to the next.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
