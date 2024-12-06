import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container className="footer-text">
        <Row className="d-flex justify-content-center ">
          <Col lg="5">
            <h3 className="fw-bold">Egbert</h3>
            <p className="desc">
              Silahkan kontak saya untuk berdiskusi dan mendapatkan informasi
              terbaru! 🙌
            </p>
            <div className="no mb-1 mt-4">
              <p className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 813-8915-0978</p>
              </p>
            </div>
            <div className="email">
              <p className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">piterwang@gmail.com</p>
              </p>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5 ">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="portofolio">Portofolio</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Subscribe untuk info menarik!</h5>
            <div className="subscribes">
              <input type="text" placeholder="cari" />
              <button className="btn btn-primary rounded-end rounded-0">
                Subscribe
              </button>
            </div>
            <div className=" social mt-3" >
              <a href="https://www.youtube.com/@Angeniusn7" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="http://www.linkedin.com/in/egbert-angenius-279865293" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/egbert_angenius?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com/Egbertn7" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.fiverr.com/egbertangenius" target="_blank" rel="noopener noreferrer">
                <i className="fa-fiverr fa-fiverr">Fiverr</i>
              </a>
              
              
              
              
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0">
              &copy;Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">Egbert Angenius</span>, All Right
              Reserved ❤️
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
