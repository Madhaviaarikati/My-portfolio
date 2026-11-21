import { useState } from "react";
import profileImage from "./assets/madhavi.jpg";
import aboutImage from "./assets/madhavi-about.jpg";
import "./App.css";

function App() {
  const slides = [
    "home",
    "about",
    "education",
    "experience",
    "skills",
    "projects",
    "contact",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setActiveSlide(index);
    }
  };

  const nextSlide = () => goToSlide(activeSlide + 1);
  const prevSlide = () => goToSlide(activeSlide - 1);

  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="nav-links">
          {slides.map((slide, index) => (
            <button
              key={slide}
              className={activeSlide === index ? "active" : ""}
              onClick={() => goToSlide(index)}
            >
              {slide.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* SLIDE VIEWPORT */}
      <main className="slide-viewport">
        <div
          className="slides-track"
          style={{
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          {/* HOME */}
          <section className="slide hero" id="home">
            <div className="hero-content">
              <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

              <p className="intro">Hello, I'm</p>

              <h1 className="hero-name">
                Venkata <span>Madhavi.</span>
              </h1>

              <h2>
                Data Annotator <span>|</span> AI/LLM Data Analyst
              </h2>

              <p className="hero-description">
                An Electronics and Communication Engineering graduate
                with experience in AI/LLM data operations, data annotation,
                evaluation, and teaching. Passionate about technology,
                continuous learning, and meaningful work.
              </p>

              <div className="hero-actions">
                <button
                  className="btn primary-btn"
                  onClick={() => goToSlide(1)}
                >
                  Explore My Profile
                </button>

                <button
                  className="btn secondary-btn"
                  onClick={() => goToSlide(6)}
                >
                  Contact Me
                </button>
              </div>

              <div className="hero-meta">
                <span>AI & DATA</span>
                <span>TECHNOLOGY</span>
                <span>CONTINUOUS LEARNING</span>
              </div>
            </div>

            <div className="hero-image-area">
              <div className="image-frame">
                <img
                  src={profileImage}
                  alt="Venkata Madhavi"
                  className="profile-image"
                />
              </div>

              <div className="image-caption">
                <span>AARIKATI VENKATA MADHAVI</span>
                <span>PORTFOLIO 2026</span>
              </div>
            </div>
          </section>

         {/* ABOUT */}
<section className="slide section about-section" id="about">
  <div className="section-heading">
    <p className="eyebrow">ABOUT ME</p>

    <h2>
      A little about <span>my journey.</span>
    </h2>
  </div>

  <div className="about-content">
    <div className="about-text">
      <p>
        I'm Aarikati Venkata Madhavi, an Electronics and
        Communication Engineering graduate with experience
        in AI/LLM data operations and academic teaching.
      </p>

      <p>
        My professional journey has helped me develop skills
        in data annotation, AI model evaluation, structured
        data review, and quality-focused workflows.
      </p>

      <p>
        Along with my experience in the AI domain, I have
        teaching experience in programming and computer
        science subjects. I enjoy learning new technologies
        and improving my skills through practical experience.
      </p>

      <button
        className="text-link"
        onClick={() => goToSlide(2)}
      >
        Explore my education →
      </button>
    </div>

    {/* SECOND PROFILE IMAGE */}
    <div className="about-image">
      <img
        src={aboutImage}
        alt="Venkata Madhavi"
      />
    </div>
  </div>
</section>

          {/* EDUCATION */}
          <section className="slide section" id="education">
            <div className="section-heading">
              <p className="eyebrow">EDUCATION</p>

              <h2>
                My academic <span>background.</span>
              </h2>

              <p className="section-subtitle">
                The foundation of my learning and professional journey.
              </p>
            </div>

            <div className="education-grid">
              <article className="education-card">
                <span className="card-number">01</span>
                <p className="experience-period">2020 — 2023</p>

                <h3>B.Tech – ECE</h3>

                <h4>
                  Andhra Loyola Institute of Engineering and Technology
                </h4>

                <p className="experience-description">
                  Vijayawada · JNTU Kakinada
                </p>

                <span className="education-score">7.8 / 10 CGPA</span>
              </article>

              <article className="education-card">
                <span className="card-number">02</span>
                <p className="experience-period">2017 — 2020</p>

                <h3>Diploma – ECE</h3>

                <h4>Chundi Ranganayakulu College</h4>

                <p className="experience-description">
                  Electronics and Communication Engineering
                </p>

                <span className="education-score">9.1 / 10 CGPA</span>
              </article>

              <article className="education-card">
                <span className="card-number">03</span>
                <p className="experience-period">2016 — 2017</p>

                <h3>SSC</h3>

                <h4>Z.P.G. High School</h4>

                <p className="experience-description">
                  Secondary School Education
                </p>

                <span className="education-score">9.3 / 10 GPA</span>
              </article>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="slide section" id="experience">
            <div className="section-heading">
              <p className="eyebrow">EXPERIENCE</p>

              <h2>
                My professional <span>journey.</span>
              </h2>

              <p className="section-subtitle">
                Experience across AI data operations, robotics, and teaching.
              </p>
            </div>

            <div className="experience-grid">
              <article className="experience-card">
                <p className="experience-period">OCTOBER — NOVEMBER</p>

                <h3>Innodata</h3>

                <h4>Robotics</h4>

                <p className="experience-description">
                  Gained practical exposure to robotics-related tasks
                  and technical workflows as part of my experience
                  with Innodata.
                </p>

                <div className="tags">
                  <span>Robotics</span>
                  <span>Technical Learning</span>
                </div>
              </article>

              <article className="experience-card">
                <p className="experience-period">JANUARY — OCTOBER</p>

                <h3>Innodata</h3>

                <h4>AI/LLM Data Analyst · Data Annotator</h4>

                <p className="experience-description">
                  Worked on AI/LLM data annotation, model evaluation,
                  structured data review, and quality-focused workflows.
                </p>

                <div className="tags">
                  <span>Data Annotation</span>
                  <span>AI Evaluation</span>
                  <span>Data Quality</span>
                </div>
              </article>

              <article className="experience-card">
                <p className="experience-period">JUNE 2023 — MARCH 2024</p>

                <h3>MJM Vocational Junior College</h3>

                <h4>CSE Junior Lecturer</h4>

                <p className="experience-description">
                  Taught C, Java, DBMS, Computer Networks, and MS Office.
                  Prepared learning materials and guided students.
                </p>

                <div className="tags">
                  <span>Teaching</span>
                  <span>Programming</span>
                  <span>Communication</span>
                </div>
              </article>
            </div>
          </section>

          {/* SKILLS */}
          <section
            className={`slide section ${activeSlide === 4 ? "skills-active" : ""}`}
            id="skills"
          >
            <div className="section-heading">
              <p className="eyebrow">SKILLS</p>

              <h2>
                Skills & <span>expertise.</span>
              </h2>

              <p className="section-subtitle">
                Technologies and tools I have learned and worked with.
              </p>
            </div>

            <div className="skills-list">
              <article className="skill-card">
                <span className="skill-number">01</span>
                <div>
                  <h3>AI & Data</h3>
                  <p>
                    AI/LLM Evaluation · Data Annotation · Data Quality · CNN
                  </p>
                </div>
              </article>

              <article className="skill-card">
                <span className="skill-number">02</span>
                <div>
                  <h3>Programming & Database</h3>
                  <p>C · Java · Python · SQL · DBMS</p>
                </div>
              </article>

              <article className="skill-card">
                <span className="skill-number">03</span>
                <div>
                  <h3>Frontend Development</h3>
                  <p>HTML · CSS · JavaScript · React · Tailwind CSS</p>
                </div>
              </article>

              <article className="skill-card">
                <span className="skill-number">04</span>
                <div>
                  <h3>Tools & Platforms</h3>
                  <p>
                    Git · GitHub · VS Code · MS Office · Excel · PowerPoint
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="slide section" id="projects">
            <div className="section-heading">
              <p className="eyebrow">PROJECTS</p>

              <h2>
                Things I've <span>worked on.</span>
              </h2>

              <p className="section-subtitle">
                A few projects from my academic and development journey.
              </p>
            </div>

            <div className="projects-grid">
              <article className="project-card">
                <div className="project-top">
                  <span>WEB DEVELOPMENT</span>
                  <span className="project-symbol">⌘</span>
                </div>

                <h3>GeeksforGeeks Website</h3>

                <p>
                  A website development project focused on frontend
                  structure, styling, and user interface design.
                </p>

                <div className="tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
              </article>

              <article className="project-card">
                <div className="project-top">
                  <span>IOT PROJECT</span>
                  <span className="project-symbol">⌁</span>
                </div>

                <h3>Smart Irrigation</h3>

                <p>
                  An IoT-based irrigation project designed to support
                  smarter water usage through sensor-based automation.
                </p>

                <div className="tags">
                  <span>Arduino</span>
                  <span>IoT</span>
                  <span>Sensors</span>
                </div>
              </article>

              <article className="project-card">
                <div className="project-top">
                  <span>AI & MACHINE LEARNING</span>
                  <span className="project-symbol">✧</span>
                </div>

                <h3>Fruit Disease Detection</h3>

                <p>
                  An academic project exploring fruit disease detection
                  using image processing and CNN-based techniques.
                </p>

                <div className="tags">
                  <span>CNN</span>
                  <span>MATLAB</span>
                  <span>Image Processing</span>
                </div>
              </article>
            </div>
          </section>

          {/* CONTACT */}
          <section className="slide section contact-section" id="contact">
            <p className="eyebrow">GET IN TOUCH</p>

            <h2>
              Let's connect<span>.</span>
            </h2>

            <p className="contact-description">
              I'm open to meaningful conversations, professional
              opportunities, and new learning experiences.
            </p>

            <div className="contact-list">
              <a
                href="mailto:madhavimadhuriaarikati-oct@gmail.com"
                className="contact-item"
              >
                <span className="contact-label">EMAIL</span>
                <div className="contact-detail">
                  <strong>madhavimadhuriaarikati-oct@gmail.com</strong>
                </div>
              </a>

              <a href="tel:+917569099434" className="contact-item">
                <span className="contact-label">PHONE</span>
                <div className="contact-detail">
                  <strong>+91 75690 99434</strong>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/madhavi-aarikati"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >
                <span className="contact-label">LINKEDIN</span>
                <div className="contact-detail">
                  <strong>Connect with me</strong>
                </div>
              </a>
            </div>

            <div className="resume-actions">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn primary-btn"
              >
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download="Venkata_Madhavi_Resume.pdf"
                className="btn secondary-btn"
              >
                Download Resume
              </a>
            </div>

            <p className="contact-note">
              Thank you for visiting my portfolio.
            </p>
          </section>
        </div>
      </main>

      {/* SIDE NAVIGATION ARROWS */}
      <button
        className="side-arrow left-arrow"
        onClick={prevSlide}
        disabled={activeSlide === 0}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        className="side-arrow right-arrow"
        onClick={nextSlide}
        disabled={activeSlide === slides.length - 1}
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
}

export default App;

