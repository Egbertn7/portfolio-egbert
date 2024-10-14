import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";

import FaqComponent from "../components/FaqComponent";

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">
                Semua Testimonial
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
              Berikut adalah beberapa pengalaman dan kesan positif dari klien yang telah bekerja sama dengan saya. Komitmen terhadap kualitas, kreativitas, dan hasil terbaik selalu menjadi prioritas utama dalam setiap proyek.
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((data) => {
              return (
                <Col key={data.id} className="mb-5 shadow-lg p-3">
                  <p className="desc">{data.desc}</p>
                  <div className="people">
                    <img src={data.image} alt="" />
                    <div className="info-section">
                      <h5 className="text-lg font-medium mb-1">{data.name}</h5>
                      <p className="text-base font-semibold m-0">
                        {data.skill}
                      </p>
                      <h6 className="text-sm font-semibold mb-1">
                        {data.country}
                      </h6>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <FaqComponent />
    </div>
  );
};

export default TestimonialPage;
