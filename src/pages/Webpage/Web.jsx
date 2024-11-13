import React from "react";
import "./Web.css";

const services = [
  {
    title:
      "Designing Adaptive and Responsive Websites using Magneto, PHP, Drupal & WordPress",
  },
  { title: "E-commerce solutions" },
  { title: "Website Audit & Restoration" },
  { title: "Website Maintenance" },
];

const workservices = [
  {
    title: "Product Research & Strategy",
    description:
      "We begin our journey by analyzing your business objectives and end-user requirements to create a draft of Low-Fidelity Wireframes.",
  },
  {
    title: "Product Conceptualization",
    description:
      "Succeeding the approval of the Low-Fidelity Wireframes, our Design Thinking team creates High-Fidelity Wireframes for your review and feedback.",
  },
  {
    title: "Development",
    description:
      "We use Agile methodology to collaborate and iterate on the product design and development until we achieve flawless UX/UI functionality and experience.",
  },
];
function Web() {
  return (
    <div className="main-uiux">
      <div className="uiux">
        <div className="text-section">
          <h1 className="title">
            <span className="highlight">WEB DEVELOPMENT</span>
          </h1>
          <p className="subtitle">
            We are Creative Nerds. We are Technocrats. But We are Passionate
            about creating a Successful Brand for You!!!
          </p>
          <button className="contact-button">Get in Touch</button>
        </div>
        <div className="image-section">
          <div className="ui-img">
            <div className="img-web"></div>
          </div>
        </div>
      </div>
      <div className="offer">
        <h1>What are we offering</h1>
        <div className="offering-container">
          {services.map((service, index) => (
            <div key={index} className="service-box">
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text">
        <div className="text-containter-web">
          <h2>Our Strengths</h2>
          <ul>
            <li>10 years of rendering excellent Web Development solutions.</li>
            <li>1000 projects successfully delivered.</li>
            <li>1000 projects successfully delivered.</li>
            <li>Dedicated Project Manager</li>
          </ul>
        </div>
      </div>
      <div className="work">
        <div className="work-befog">
          <h2>How BEFOG Works</h2>
          <div className="Rectangle-16-work"></div>
          <div className="work-container">
            {workservices.map((workservice, index) => (
              <div key={index} className="work-box">
                <h3>{workservice.title}</h3>
                <p>{workservice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web;
