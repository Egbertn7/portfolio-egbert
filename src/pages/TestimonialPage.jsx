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
                Testimonial
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
              positive experiences and impressions from clients who have worked with me. Commitment to quality, creativity, and the best results are always the top priorities in every project.
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-1  animate__animated animate__fadeInUp animate__delay-1s">
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
