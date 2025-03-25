import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html, useProgress } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

// 3D Components
import { Laptop } from './components/Laptop.tsx';
import { SkillsSphere } from './components/SkillsSphere.tsx';
import { ProjectCards } from './components/ProjectCards.tsx';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' }
  ];

  return (
    <PortfolioContainer>
      {/* Navigation */}
      <Navbar>
        <Logo>Daniyal Bokhari</Logo>
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </Hamburger>
        <NavLinks className={menuOpen ? 'open' : ''}>
          {sections.map((section) => (
            <NavLink
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? 'active' : ''}
              onClick={() => {
                setActiveSection(section.id);
                setMenuOpen(false);
              }}
            >
              {section.name}
            </NavLink>
          ))}
        </NavLinks>
      </Navbar>

      {/* Main Content */}
      <MainContent>
        {/* Hero Section */}
        <Section id="home" onViewChange={(inView) => inView && setActiveSection('home')}>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I'm <span>Daniyal Bokhari</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              MERN Stack Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="buttons"
            >
              <a href="#projects" className="btn primary">
                View My Work
              </a>
              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </motion.div>
          </HeroContent>
        </Section>

        {/* About Section */}
        <Section id="about" onViewChange={(inView) => inView && setActiveSection('about')}>
          <AboutContainer>
            <motion.div
              className="image-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Placeholder for profile image */}
              <div className="profile-image-placeholder"></div>
            </motion.div>
            <motion.div
              className="content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2>About Me</h2>
              <p>
                I am a MERN stack software developer with more than 5000 hours of building, 
                maintaining and deploying single page applications. I can adapt to any technology 
                rapidly making myself flexible upon any tech stack.
              </p>
              <p>
                A passionate, diligent person who wants to learn continuously and solve 
                real-world problems through code.
              </p>
              <div className="info-grid">
                <div>
                  <h4>Education</h4>
                  <p>BE, CSE - Visvesvaraya Technological University</p>
                  <p>Higher Secondary - SET PU College</p>
                  <p>Secondary - ST Anthony's Church School</p>
                </div>
                <div>
                  <h4>Languages</h4>
                  <p>English, Hindi, Kannada</p>
                  <h4>Location</h4>
                  <p>Bangalore, Karnataka</p>
                </div>
              </div>
            </motion.div>
          </AboutContainer>
        </Section>

        {/* Projects Section */}
        <Section id="projects" onViewChange={(inView) => inView && setActiveSection('projects')}>
          <SectionTitle>My Projects</SectionTitle>
          <ProjectsContainer>
            <ProjectsCanvas>
              <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={<Loader />}>
                  <ProjectCards />
                  <Environment preset="city" />
                </Suspense>
                <OrbitControls enableZoom={false} />
              </Canvas>
            </ProjectsCanvas>
            <ProjectDetails>
              <ProjectCard className="active">
                <h3>Chat App</h3>
                <p>
                  MERN Stack application with real-time communication using Socket.io, 
                  MongoDB for data storage, and responsive UI with Chakra UI.
                </p>
                <div className="tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Socket.io</span>
                  <span>MongoDB</span>
                </div>
                <a href="https://github.com/Daniyal1229" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </ProjectCard>
              <ProjectCard>
                <h3>Expense Tracker App</h3>
                <p>
                  Single page application built with MERN stack for personal finance 
                  management with real-time dashboard and dynamic reports.
                </p>
                <div className="tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Chart.js</span>
                </div>
                <a href="https://github.com/Daniyal1229" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </ProjectCard>
              <ProjectCard>
                <h3>Computer Pointer Controller</h3>
                <p>
                  Control mouse cursor using hand gestures with computer vision in Python.
                </p>
                <div className="tags">
                  <span>Python</span>
                  <span>OpenCV</span>
                  <span>Computer Vision</span>
                </div>
                <a href="https://github.com/Daniyal1229" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </ProjectCard>
            </ProjectDetails>
          </ProjectsContainer>
        </Section>

        {/* Skills Section */}
        <Section id="skills" onViewChange={(inView) => inView && setActiveSection('skills')}>
          <SectionTitle>My Skills</SectionTitle>
          <SkillsContainer>
            <SkillsCanvas>
              <Canvas 
                camera={{ 
                  position: [0, 0, 15],
                  fov: 45
                }}
              >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#00d2ff" />
                
                <Suspense fallback={<Loader />}>
                  <SkillsSphere 
                    scale={1.5}
                    rotationSpeed={0.005}
                    hoverScale={1.2}
                  />
                  <Environment preset="city" />
                </Suspense>
                
                <OrbitControls 
                  enableZoom={false} 
                  autoRotate
                  autoRotateSpeed={1.5}
                />
              </Canvas>
            </SkillsCanvas>
            <SkillsList>
              <SkillCategory>
                <h3>Frontend</h3>
                <ul>
                  <li>JavaScript, TypeScript</li>
                  <li>React, Redux</li>
                  <li>HTML5, CSS3</li>
                  <li>Styled Components, SCSS</li>
                  <li>Webpack, Babel</li>
                </ul>
              </SkillCategory>
              <SkillCategory>
                <h3>Backend</h3>
                <ul>
                  <li>Node.js, Express.js</li>
                  <li>MongoDB, Mongoose</li>
                  <li>Python, Java</li>
                  <li>Nodemailer</li>
                </ul>
              </SkillCategory>
              <SkillCategory>
                <h3>DevOps</h3>
                <ul>
                  <li>Git, GitHub</li>
                  <li>Cloudinary, AWS S3</li>
                  <li>React Dev Tools</li>
                  <li>Redux Dev Tools</li>
                </ul>
              </SkillCategory>
            </SkillsList>
          </SkillsContainer>
        </Section>

        {/* Contact Section */}
        <Section id="contact" onViewChange={(inView) => inView && setActiveSection('contact')}>
          <SectionTitle>Get In Touch</SectionTitle>
          <ContactContainer>
            <ContactInfo>
              <ContactItem>
                <FaEnvelope />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:syeddaniyalbokhari72@gmail.com">syeddaniyalbokhari72@gmail.com</a>
                </div>
              </ContactItem>
              <ContactItem>
                <FaPhone />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:9353252474">9353252474</a>
                </div>
              </ContactItem>
              <ContactItem>
                <FaGithub />
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/Daniyal1229" target="_blank" rel="noopener noreferrer">
                    github.com/Daniyal1229
                  </a>
                </div>
              </ContactItem>
              <ContactItem>
                <FaLinkedin />
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/daniyal1229" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/daniyal1229
                  </a>
                </div>
              </ContactItem>
            </ContactInfo>
            <ContactForm>
              <form>
                <FormGroup>
                  <input type="text" placeholder="Your Name" required />
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder="Your Email" required />
                </FormGroup>
                <FormGroup>
                  <textarea placeholder="Your Message" rows={5} required></textarea>
                </FormGroup>
                <button type="submit">Send Message</button>
              </form>
            </ContactForm>
          </ContactContainer>
        </Section>

        {/* Footer */}
        <Footer>
          <p>&copy; {new Date().getFullYear()} Daniyal Bokhari. All rights reserved.</p>
          <SocialLinks>
            <a href="https://github.com/Daniyal1229" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/daniyal1229" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </SocialLinks>
        </Footer>
      </MainContent>
    </PortfolioContainer>
  );
};

// Section component with intersection observer
const Section = ({ id, children, onViewChange }: { id: string; children: React.ReactNode; onViewChange: (inView: boolean) => void }) => {
  const [ref] = useInView({
    threshold: 0.3,
    onChange: (inView) => inView && onViewChange(inView),
  });

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
};

// Loader component
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <LoaderContainer>{progress.toFixed(0)}% loaded</LoaderContainer>
    </Html>
  );
};

// Styled Components
const PortfolioContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
  overflow-x: hidden;
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background: rgba(26, 26, 46, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem 5%;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #e94560;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1001;

  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 3px 0;
    background: #fff;
    transition: all 0.3s ease;

    &.open:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    &.open:nth-child(2) {
      opacity: 0;
    }

    &.open:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  &.open {
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    height: 100vh;
    background: #16213e;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #e94560;
  }

  &.active {
    color: #e94560;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #e94560;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
`;

const MainContent = styled.main`
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #e94560;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #e94560;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const HeroCanvas = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  z-index: 10;
  max-width: 600px;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;

    span {
      color: #e94560;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #ccc;
  }

  .buttons {
    display: flex;
    gap: 1rem;

    .btn {
      padding: 0.8rem 1.5rem;
      border-radius: 5px;
      width:50%;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.3s ease;

      &.primary {
        background: #e94560;
        color: #fff;

        &:hover {
          background: #d13354;
        }
      }

      &.secondary {
        border: 2px solid #e94560;
        color: #e94560;

        &:hover {
          background: #e94560;
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 992px) {
    left: 5%;
    right: 5%;
    max-width: 100%;
    text-align: center;

    h1 {
      font-size: 2.5rem;
    }

    .buttons {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    .buttons {
      flex-direction: column;
      align-items: center;
    }

    .btn {
      width: 100%;
      text-align: center;
    }
  }
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;

  .image-container {
    flex: 1;
    min-width: 300px;

    .profile-image-placeholder {
      width: 100%;
      height: 400px;
      background: rgba(233, 69, 96, 0.1);
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
  }

  .content {
    flex: 1;

    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: #e94560;
    }

    p {
      margin-bottom: 1rem;
      line-height: 1.6;
      color: #ccc;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      margin-top: 2rem;

      h4 {
        color: #e94560;
        margin-bottom: 0.5rem;
      }

      p {
        margin-bottom: 1.5rem;
      }
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
    padding: 3rem 2rem;

    .image-container {
      max-width: 400px;
    }

    .info-grid {
      grid-template-columns: 1fr !important;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;

    .content {
      h2 {
        font-size: 1.8rem;
      }

      p {
        font-size: 0.95rem;
      }
    }

    .image-container {
      min-width: 250px;

      .profile-image-placeholder {
        height: 300px;
      }
    }
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ProjectsCanvas = styled.div`
  width: 100%;
  height: 400px;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: rgba(30, 30, 60, 0.7);
  padding: 2rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &.active {
    border-color: #e94560;
    box-shadow: 0 5px 15px rgba(233, 69, 96, 0.3);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #e94560;
  }

  p {
    color: #ccc;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    span {
      background: rgba(233, 69, 96, 0.2);
      color: #e94560;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
    }
  }

  a {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    background: #e94560;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: #d13354;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 3rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const SkillsCanvas = styled.div`
  width: 600px;
  height: 600px;
  background: radial-gradient(circle at center, #1a1a2e 0%, #16213e 100%);
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(0, 194, 255, 0.1);

  @media (max-width: 1200px) {
    width: 500px;
    height: 500px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 300px;
  }
`;

const SkillsList = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  h3 {
    color: #e94560;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
      color: #ccc;
      position: relative;
      padding-left: 1.5rem;

      &::before {
        content: '▹';
        position: absolute;
        left: 0;
        color: #e94560;
      }
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1.2rem;
    }

    li {
      font-size: 0.95rem;
    }
  }
`;

const ContactContainer = styled.div`
  display: flex;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 3rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  svg {
    font-size: 1.5rem;
    color: #e94560;
  }

  h4 {
    margin-bottom: 0.5rem;
    color: #e94560;
  }

  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #e94560;
    }
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 1.5rem;

    svg {
      font-size: 1.2rem;
    }

    h4 {
      font-size: 1rem;
    }

    a {
      font-size: 0.9rem;
    }
  }
`;

const ContactForm = styled.div`
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  button {
    padding: 1rem;
    background: #e94560;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #d13354;
    }
  }

  @media (max-width: 480px) {
    button {
      padding: 0.8rem;
    }
  }
`;

const FormGroup = styled.div`
  input,
  textarea {
    width: 100%;
    padding: 1rem;
    background: rgba(30, 30, 60, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    color: #fff;
    font-family: inherit;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #e94560;
    }

    &::placeholder {
      color: #aaa;
    }
  }

  textarea {
    resize: vertical;
    min-height: 150px;
  }

  @media (max-width: 480px) {
    input, textarea {
      padding: 0.8rem;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background: rgba(26, 26, 46, 0.9);
  margin-top: 5rem;

  p {
    color: #ccc;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;

    p {
      font-size: 0.9rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  a {
    color: #ccc;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #e94560;
    }
  }

  @media (max-width: 480px) {
    gap: 1rem;

    a {
      font-size: 1.2rem;
    }
  }
`;

const LoaderContainer = styled.div`
  color: #fff;
  font-size: 1.2rem;
`;

export default App;