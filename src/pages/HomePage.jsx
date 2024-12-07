import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/foto-egbert.png";
import MyImage from '../assets/img/profile.jpeg';

import { kelasTerbaru, dataSwiper, project } from "../data/index";
import { useNavigate } from "react-router-dom";
import Faqcomponent from "../components/FaqComponent";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-3 fw-bold animate__animated animate__fadeInUp animate__delay-1s">
                Hello!I’m Egbert Angenius 😎
              </h1>
              <h4 className="mb-3 fw-bold animate__animated animate__fadeInUp animate__delay-1s">
                Software Developer | Graphic Designer
              </h4>
              <p className="mb-3 animate__animated animate__fadeInUp animate__delay-1s">
              Here you will find a collection of my creative works.
              this is a brief glimpse into my creative world. Lets explore and explore inspiration together.
              </p>
              <button
                className="btn btn-primary btn-lg rounded-1 animate__animated animate__fadeInUp animate__delay-1s"
                onClick={() => navigate("/about")}
              >
                About me
                
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="hero-img"
                className="animate__fadeInUp animate__animated"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="freelance-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="animate__animated animate__fadeInLeft">
              <h2 className="fw-bold mb-4">Need a Freelance Developer?</h2>
              <p className="mb-4">Im available for freelance projects and collaborations. Lets work together to bring your ideas to life!</p>
              <div className="d-flex gap-3 mb-4">
                <div className="freelance-stats">
                  <h4 className="fw-bold text-primary">100%</h4>
                  <p className="mb-0">Job Success</p>
                </div>
                <div className="freelance-stats">
                  <h4 className="fw-bold text-primary">24/7</h4>
                  <p className="mb-0">Support</p>
                </div>
                <div className="freelance-stats">
                  <h4 className="fw-bold text-primary">Fast</h4>
                  <p className="mb-0">Delivery</p>
                </div>
              </div>
              <a 
                href="https://www.fiverr.com/egbertangenius" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg rounded-1"
              >
                <i className="fas fa-external-link-alt me-2"></i>
                Hire Me on Fiverr
              </a>
            </Col>
            <Col lg={6} className="animate__animated animate__fadeInRight">
              <div className="freelance-card p-4 rounded-3 shadow-sm">
                <div className="d-flex align-items-center mb-4">
                  <img 
                    src={MyImage} 
                    alt="Fiverr Profile" 
                    className="rounded-circle me-3"
                    style={{width: "60px", height: "60px", objectFit: "cover"}}
                  />
                  <div>
                    <h5 className="fw-bold mb-1">Egbert</h5>
                    <p className="mb-0 text-primary">
                      <i className="fas fa-star me-1"></i>
                      Top Rated Seller
                    </p>
                  </div>
                </div>
                <div className="services-list">
                  <h6 className="fw-bold mb-3">Services I Offer:</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-check text-primary me-2"></i>
                      Web Development & Responsive Design
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-primary me-2"></i>
                      Editing Video
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-primary me-2"></i>
                      Illustrator / Cartoon
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check text-primary me-2"></i>
                      UI/UX Implementation
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="project min-vh-100">
        <Container>
          <Row>
            <h1 className='fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s'>
              Project
            </h1>
            <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>
              My completed project
            </p>
          </Row>
          <Row className="g-4">
            {project.map((project) => {
              return (
                <Col key={project.id} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay={project.delay}>
                  <div className="project-card p-3 h-100 rounded shadow-sm">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-100 rounded mb-3"
                      style={{height: "200px", objectFit: "cover"}}
                    />
                    <h5 className="fw-bold mb-2">{project.title}</h5>
                    <p className="text-muted mb-3">{project.desc}</p>
                    
                    <div className="skills-container mb-3">
                      {project.skills && project.skills.map((skill, index) => (
                        <span key={index} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="btn btn-primary w-50"
                    >
                      Source
                    </a>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Portfolio</h1>
              <p className="text-center">This is the result of my experience</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col
                  key={kelas.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={kelas.delay}
                >
                  <img
                    src={kelas.image}
                    alt="unsplash.com"
                    className="w-100 mb-5 rounded-top"
                  />
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-success rouded-5 btn-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
                onClick={() => navigate("/portofolio")}
              >
                View Portfolio{" "}
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div className="info-section">
                        <h5 className="text-lg font-medium mb-1">
                          {data.name}
                        </h5>
                        <p className="text-base font-semibold m-0">
                          {data.skill}
                        </p>
                        <h6 className="text-sm font-semibold mb-1">
                          {data.country}
                        </h6>
                      </div>    
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      <Faqcomponent />
    </div>
  );
};

export default HomePage;
