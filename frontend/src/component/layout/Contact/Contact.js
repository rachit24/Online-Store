import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import MetaData from "../MetaData";

const Contact = () => {
  return (
    <div className="contactContainer">
      <MetaData title="Contact" />
      <a className="mailBtn" href="mailto:dekhlo30@gmail.com">
        <Button>Click to send mail at my email ID</Button>
      </a>
    </div>
  );
};

export default Contact;
