import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sushma Balami </span>
            from <span className="purple"> Kathmandu, Nepal</span>
            <br />
            I'm currently seeking opportunities for a software development internship, eager to apply my skills and gain practical experience in a professional setting. I'm actively exploring possibilities and excited about the prospect of contributing to innovative projects in a hands-on learning environment.
            <br />
            <br />
            "I am currently pursuing my Bachelor's in Computer Application at EIC.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

         
          <footer className="blockquote-footer">SUSHMA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
