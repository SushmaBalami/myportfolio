import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectsCard";
import Particle from "../ReusableComp/Particle";
import supu from "../assets/Projects/supu.png";
import wldrs from "../Assets/Projects/wldrs.png";
import portfolio from "../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supu}
              isBlog={false}
              title="Supu Store"
              description="Supu Store(Sushma Purnima Store) is a web based application for clothing Store build with PHP, HTML, CSS and JavaScript. Have features which allows user for realtime shopping, selecting cloths."
              ghLink="https://github.com/SushmaBalami/SupuStore"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wldrs}
              isBlog={false}
              title="Weight Loss Diet Recommendation System"
              description="Weight Loss Diet Recommendation System is the web based recommendation System for providing personalized diet plan to the user for weight loss. It is build with HTML, CSS, React and Java. Have features which allows users to provide diet plan according to their BMI, Weight and Height."
              ghLink="https://github.com/SushmaBalami/Weight-loss-Diet-Planner"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="This is the portfolio of mine, which is build using React. With my social accounts."
              ghLink="https://github.com/SushmaBalami/Weight-loss-Diet-Planner"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
