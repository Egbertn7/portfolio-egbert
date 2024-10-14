import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/foto-egbert.png";

import { kelasTerbaru, dataSwiper } from "../data/index";
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
                Hello! I’m Egbert Angenius😎
              </h1>
              <p className="mb-3 animate__animated animate__fadeInUp animate__delay-1s">
                Di sini, kamu akan menemukan koleksi karya-karya kreatif saya.
                ini adalah pandangan singkat ke dalam dunia kreatif saya. Mari
                bersama-sama menjelajahi dan mengeksplorasi inspirasi bersama.
              </p>
              <button
                className="btn btn-primary btn-lg rounded-1 animate__animated animate__fadeInUp animate__delay-1s"
                onClick={() => navigate("/portofolio")}
              >
                Lihat Yuk!
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
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Portofolio</h1>
              <p className="text-center">Ini adalah hasil pengalaman saya</p>
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
                Lihat Portofolio{" "}
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
