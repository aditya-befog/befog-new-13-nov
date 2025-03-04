import React from "react";
import "./Home.css";
import ServiceCard from "./Service/Service.jsx";
import Testimonial from "./Testimonial/Testimonial.jsx";

const services = [
  {
    title: "UI/UX Design",
    icon: "pencil",
    description:
      "Our Design Thinking team conceptualizes intuitive, engaging, and aesthetically attractive User Interface (UI) design that offers seamless User Experience (UX) across the web and mobile devices for your audience.",
  },
  {
    title: "Web Development",
    icon: "lightning",
    description:
      "We are Creative Nerds. We are Technocrats. But We are Passionate about creating a Successful Brand for You!!!",
  },
  {
    title: "Mobile App Development",
    icon: "mobile",
    description:
      "Nurture Your Vision, Magnify Your Brand & Increase Your Sales with Inspiring Digital Marketing Solutions.",
  },
  {
    title: "AI Development",
    icon: "circle",
    description:
      "Our Design Thinking team conceptualizes intuitive, engaging, and aesthetically attractive User Interface (UI) design that offers seamless User Experience (UX) across the web and mobile devices for your audience.",
  },
  {
    title: "ChatBot",
    icon: "circle",
    description:
      "We are Creative Nerds. We are Technocrats. But We are Passionate about creating a Successful Brand for You!!!",
  },
  {
    title: "SEO/CRM",
    icon: "circle",
    description:
      "Nurture Your Vision, Magnify Your Brand & Increase Your Sales with Inspiring Digital Marketing Solutions.",
  },
];

const steps = [
  {
    number: 1,
    title: "Strategy",
    description:
      "We begin our journey by analyzing your business objectives and end-user requirements to create a draft of Low-Fidelity Wireframes.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "We design and draft the appearance, feel, and functionality of your product.",
  },
  {
    number: 3,
    title: "Develop",
    description:
      "We use Agile methodology to collaborate and iterate on the product design and development until we achieve flawless UX/UI functionality and experience.",
  },
  {
    number: 4,
    title: "Support",
    description:
      "We provide maintenance and support if required. We monitor the performance of your website/application, fix bugs, and develop new functionalities.",
  },
];

const Home = () => {
  return (
    <header className="header">
      <div className="section1">
        <h1>Design Your Digital Identity</h1>
        <p>
          Build a Distinctive Digital Identity: Where Strategy Meets Creativity
          to Define Your Unique Online Presence.
        </p>
        <button className="cta-button">Get in Touch</button>
      </div>
      <div className="section2">
        <h1>We are one of the most effective Tech Solution Company</h1>
        <p>
          Empowering Your Digital Identity: Combining Purposeful Strategy and
          Creative Innovation to Build an Engaging and Memorable Online Presence
        </p>
      </div>
      <div className="services">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
      <div className="feature">
        <div className="feature-strategy">
          <div className="feature-strategy-1">
            <div className="feature-number">
              <h1>01</h1>
            </div>
            <div className="feature-title">
              <h2>Strategy</h2>
            </div>
          </div>
          <div className="feature-strategy-container">
            <div className="feature-circle"></div>
            <div className="feature-text">
              <p>
                We begin our journey by analyzing your business objectives and
                end-user requirements to create a draft of Low-Fidelity
                Wireframes.
              </p>
            </div>
          </div>
        </div>
        <div className="Design-strategy">
          <div className="Design-strategy-1">
            <div className="Design-number">
              <h1>02</h1>
            </div>
            <div className="Design-title">
              <h2>Design</h2>
            </div>
          </div>
          <div className="Design-strategy-container">
            <div className="Develop-circle"></div>
            <div className="feature-text">
              <p>
                We design and draft the appearance, feel, and functionality of
                your product.
              </p>
            </div>
          </div>
        </div>
        <div className="feature-strategy">
          <div className="feature-strategy-1">
            <div className="Develop-number">
              <h1>03</h1>
            </div>
            <div className="feature-title">
              <h2>Develop</h2>
            </div>
          </div>
          <div className="Develop-strategy-container">
            <div className="feature-circle"></div>
            <div className="feature-text">
              <p>
                We use Agile methodology to collaborate and iterate on the
                product design and development until we achieve flawless UX/UI
                functionality and experience.
              </p>
            </div>
          </div>
        </div>
        <div className="Design-strategy">
          <div className="Design-strategy-1">
            <div className="Support-number">
              <h1>04</h1>
            </div>
            <div className="Design-title">
              <h2>Support</h2>
            </div>
          </div>
          <div className="Support-strategy-container">
            <div className="Develop-circle"></div>
            <div className="feature-text">
              <p>
                We provide maintenance and support if required. We monitor the
                performance of your website/ application, fix bugs, and develop
                new functionalities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="button">
        <button>GET STARTED</button>
      </div>
      <div className="Founder">
        <h1>Meet the Founder</h1>
        <div className="pointer">
          <h1>Founder</h1>
        </div>
        <div className="container-Founder">
          <div className="text-content">
            <h3>Sanjay Mehrotra</h3>
            <p>
              It is with great enthusiasm and pride that I welcome you to Befog.
              As the founder of this innovative IT startup, I am excited to
              share our vision and the journey that has brought us here. At
              Befog, we are dedicated to pushing the boundaries of technology to
              deliver solutions that not only meet the needs of today but
              anticipate the challenges of tomorrow. <br />
              <br /> Our story began with a simple yet profound belief:
              technology holds the key to transforming businesses and enriching
              lives. With this conviction at our core, we have assembled a team
              of exceptional individuals who share a common passion for
              innovation and excellence. Together, we are committed to creating
              a future where technology empowers organizations to achieve their
              fullest potential.
            </p>
            <button>Explore more</button>
          </div>
          <div className="founder-img">
            <img
              src="https://images.unsplash.com/photo-1719937050640-71cfd3d851be?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Founder"
            />
          </div>
        </div>
      </div>
      <div className="Founder-button">
        <button>View all Team</button>
      </div>
      <div className="testimonial-body">
        <div className="testimonial-section">
          <h1>What client says about us</h1>
          <div className="testimonials">
            <Testimonial
              name="Aditya Kumar Kansaljiva"
              rating="2"
              text="Great service, but there's room for improvement."
            />
            <Testimonial
              name="Aditya Kumar Kansaljiva"
              rating="2"
              text="The experience was okay, could be better."
            />
          </div>
        </div>
      </div>
      <div className="box-container">
        <h1>Get in Touch</h1>
        <div className="boxes">
          <div className="box left-box"></div>
          <div className="box right-box"></div>
        </div>
      </div>
    </header>
  );
};

export default Home;
