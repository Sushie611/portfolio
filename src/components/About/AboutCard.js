import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SUSHMITA SHAW </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />I am a upcoming software engineer persuing Computuer Science in UEMK
            Kolkata.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Creative writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching 
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "LIVE LOVE CODE REPEAT!"{" "}
          </p>
          <footer className="blockquote-footer">SUSHMITA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
