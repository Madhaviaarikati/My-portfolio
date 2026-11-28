
import profileImage from "./assets/Madhavi.png";
import "./App.css";

const sections = [
  "home",
  "about",
  "education",
  "experience",
  "skills",
  "projects",
  "contact",
];

const experienceData = [
  {
    number: "01",
    period: "OCTOBER 2026 — NOVEMBER 14, 2026",
    company: "Innodata",
    role: "Robotics Data Annotator",
    description:
      "Worked on robotics-related data annotation, reviewing object interactions, actions, and manipulation sequences while following project-specific guidelines.",
    points: [
      "Annotated object movements, placements, and spatial relationships.",
      "Reviewed task data for accuracy and consistency.",
      "Followed detailed annotation guidelines and quality requirements.",
    ],
    tags: ["Robotics", "Data Annotation", "Quality Review"],
    visual: "robotics",
    visualTitle: "ROBOTICS",
    visualText: "OBJECTS · ACTIONS · MOVEMENT",
  },
  {
    number: "02",
    period: "JANUARY 2026 — OCTOBER 2026",
    company: "Innodata",
    role: "AI/LLM Data Analyst · Data Annotator",
    description:
      "Worked on AI and large language model data annotation and evaluation, supporting model quality through careful review and structured data workflows.",
    points: [
      "Evaluated AI-generated responses for quality, accuracy, and relevance.",
      "Performed data annotation and structured data review.",
      "Identified errors and followed task-specific quality guidelines.",
    ],
    tags: ["AI / LLM", "Data Annotation", "AI Evaluation", "Data Quality"],
    visual: "ai",
    visualTitle: "AI / DATA",
    visualText: "ANNOTATION · EVALUATION · QUALITY",
  },
  {
    number: "03",
    period: "JUNE 2023 — DECEMBER 2025",
    company: "MJM Vocational Junior College",
    role: "CSE Junior Lecturer",
    description:
      "Taught computer science subjects and helped students understand technical concepts through structured lessons, learning materials, and practical explanations.",
    points: [
      "Delivered lessons in C, Java, RDBMS, Computer Networks, OS concepts, and MS Office.",
      "Prepared learning materials and explained concepts clearly.",
      "Responded to student questions and supported different learning needs.",
    ],
    tags: ["Teaching", "Programming", "Mentoring", "Communication"],
    visual: "teaching",
    visualTitle: "TEACHING",
    visualText: "LEARNING · GUIDANCE · GROWTH",
  },
];

const skillGroups = [
  {
    number: "01",
    code: "AI",
    title: "AI & Data",
    subtitle: "Understanding data. Evaluating intelligence.",
    skills: [
      "AI / LLM Evaluation",
      "Data Annotation",
      "Data Quality Review",
      "Structured Data Review",
      "CNN",
    ],
  },
  {
    number: "02",
    code: "</>",
    title: "Programming & Database",
    subtitle: "Building logic and working with data.",
    skills: ["C", "Java", "Python", "SQL", "DBMS", "RDBMS"],
  },
  {
    number: "03",
    code: "WEB",
    title: "Frontend Development",
    subtitle: "Creating clean and user-friendly interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    number: "04",
    code: "TOOL",
    title: "Tools & Platforms",
    subtitle: "Tools that support everyday work.",
    skills: ["Git", "GitHub", "VS Code", "MS Office", "Excel", "PowerPoint"],
  },
];

function ExperienceVisual({ type, title, text }) {
  return (
    <div className={`experience-visual visual-${type}`}>
      <div className="visual-orbit orbit-one"></div>
      <div className="visual-orbit orbit-two"></div>

      {type === "robotics" && (
        <div className="robot-art">
          <div className="robot-base"></div>
          <div className="robot-joint joint-one"></div>
          <div className="robot-arm arm-one"></div>
          <div className="robot-joint joint-two"></div>
          <div className="robot-arm arm-two"></div>
          <div className="robot-joint joint-three"></div>
          <div className="robot-grip"></div>
          <span className="robot-dot dot-one"></span>
          <span className="robot-dot dot-two"></span>
          <span className="robot-dot dot-three"></span>
        </div>
      )}

      {type === "ai" && (
        <div className="ai-art">
          <div className="ai-core">AI</div>
          <span className="ai-node node-one">DATA</span>
          <span className="ai-node node-two">LLM</span>
          <span className="ai-node node-three">CHECK</span>
          <span className="ai-node node-four">✓</span>
          <span className="ai-line line-one"></span>
          <span className="ai-line line-two"></span>
          <span className="ai-line line-three"></span>
          <span className="ai-line line-four"></span>
        </div>
      )}

      {type === "teaching" && (
        <div className="teaching-art">
          <div className="board">
            <span className="board-heading">LEARN & GROW</span>
            <span className="board-line line-a"></span>
            <span className="board-line line-b"></span>
            <span className="board-line line-c"></span>
            <span className="board-equation">C + JAVA</span>
          </div>
          <div className="book book-one"></div>
          <div className="book book-two"></div>
          <div className="book book-three"></div>
          <span className="teaching-star star-one">✦</span>
          <span className="teaching-star star-two">✧</span>
        </div>
      )}

      <div className="visual-bottom">
        <span>{title}</span>
        <span className="visual-plus">✦</span>
      </div>
      <p className="visual-caption">{text}</p>
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="nav-brand">
          M<span>.</span>
        </a>

        <div className="nav-links">
          {sections.map((section) => (
            <a key={section} href={`#${section}`}>
              {section.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      <main className="page-content">
        {/* HOME */}
        <section className="section hero" id="home">
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
              evaluation, robotics-related workflows, and teaching.
              Passionate about technology, continuous learning, and
              meaningful work.
            </p>

            <div className="hero-actions">
              <a href="#about" className="btn primary-btn">
                Explore My Profile
              </a>
              <a href="#contact" className="btn secondary-btn">
                Contact Me
              </a>
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
              
            </div>
          </div>
        </section>

        {/* ABOUT */}
        
        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="about-bg-orb about-bg-orb-one"></div>
          <div className="about-bg-orb about-bg-orb-two"></div>

          <div className="about-layout">
            <div className="about-copy">
              <p className="eyebrow">GET TO KNOW ME</p>

              <h2>
                Beyond the <span>resume.</span>
                <br />
                A mind that loves to learn.
              </h2>

              <div className="about-accent-line"></div>

              <p>
                I'm Aarikati Venkata Madhavi, an Electronics and
                Communication Engineering graduate with experience
                in AI/LLM data operations and academic teaching.
              </p>

              <p>
                From evaluating AI-generated responses to exploring
                robotics-related workflows, I've enjoyed working
                with technology, solving problems, and learning
                something new with every experience.
              </p>

              <p>
                I believe growth comes from curiosity, consistency,
                and the courage to explore beyond what we already know.
              </p>

              <a href="#education" className="about-journey-link">
                EXPLORE MY JOURNEY <span>↗</span>
              </a>
            </div>

            <div className="about-art">
              <div className="about-art-label label-top">
                <span className="label-dot"></span>
                CURIOUS MIND · CREATIVE THINKING
              </div>

              <div className="about-orbit orbit-large"></div>
              <div className="about-orbit orbit-medium"></div>
              <div className="about-orbit orbit-small"></div>

              <div className="about-center">
                <div className="about-center-inner">
                  <span className="about-sparkle">✦</span>
                  <span className="about-center-title">GROW</span>
                  <span className="about-center-sub">LEARN · BUILD · EVOLVE</span>
                </div>
              </div>

              <div className="about-float about-float-ai">
                <span className="float-icon">✧</span>
                <span>AI & TECHNOLOGY</span>
              </div>

              <div className="about-float about-float-code">
                <span className="float-icon">&lt;/&gt;</span>
                <span>LOGIC & CODE</span>
              </div>

              <div className="about-float about-float-idea">
                <span className="float-icon">✳</span>
                <span>NEW IDEAS</span>
              </div>

              <div className="about-float about-float-learn">
                <span className="float-icon">↗</span>
                <span>ALWAYS LEARNING</span>
              </div>

              <div className="about-art-label label-bottom">
                A JOURNEY OF CONTINUOUS GROWTH
              </div>
            </div>
          </div>

          <div className="about-bottom-note">
            <span>01 / ABOUT</span>
            <span>CURIOUS BY NATURE <b>✦</b></span>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section" id="education">
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
        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">PROFESSIONAL EXPERIENCE</p>
            <h2>
              My professional <span>journey.</span>
            </h2>
            <p className="section-subtitle">
              Three experiences that shaped my technical, analytical,
              and communication skills.
            </p>
          </div>

          <div className="experience-list">
            {experienceData.map((item) => (
              <article className="experience-card" key={item.number}>
                <div className="experience-card-visual">
                  <ExperienceVisual
                    type={item.visual}
                    title={item.visualTitle}
                    text={item.visualText}
                  />
                </div>

                <div className="experience-card-content">
                  <div className="experience-card-top">
                    <span className="experience-period">{item.period}</span>
                    <span className="experience-index">{item.number}</span>
                  </div>

                  <h3>{item.company}</h3>
                  <h4>{item.role}</h4>
                  <p className="experience-description">
                    {item.description}
                  </p>

                  <ul className="experience-points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">MY TOOLKIT</p>
            <h2>
              Skills & <span>expertise.</span>
            </h2>
            <p className="section-subtitle">
              A collection of technologies, tools, and skills
              developed through learning and experience.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.number}>
                <div className="skill-card-top">
                  <span className="skill-number">{group.number}</span>
                  <span className="skill-code">{group.code}</span>
                </div>

                <h3>{group.title}</h3>
                <p className="skill-subtitle">{group.subtitle}</p>

                <div className="skill-divider"></div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className="skill-card-glow"></div>
              </article>
            ))}
          </div>

          <div className="skills-footer">
            <span className="skills-footer-star">✦</span>
            <p>
              Curious by nature. Always learning. Always improving.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
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
                An IoT-based irrigation project using sensors and
                automatic water pumping based on sensor thresholds.
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
        <section className="section contact-section" id="contact">
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
              href="mailto:madhavimadhuriaarikati@gmail.com"
              className="contact-item"
            >
              <span className="contact-label">EMAIL</span>
              <div className="contact-detail">
                <strong>madhavimadhuriaarikati@gmail.com</strong>
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
      </main>

      <footer className="portfolio-footer">
        <span> Venkata Madhavi</span>
        <span>Designed with purpose <b>✦</b></span>
      </footer>
    </div>
  );
}

export default App;
