import {Container, Row, Col} from 'react-bootstrap';
import { semuaKelas } from '../data/index';

import FaqComponent from '../components/FaqComponent';


const ProjectPage = () => {
return (
<div className="kelas-page">
    <div className='kelas min-vh-100'>
        <Container>
            <Row>
                <Col>
                <h1 className='fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s'>Semua Portofolio</h1>
                <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>Ini adalah hasil pengalaman saya</p>
                </Col>
            </Row>
            <Row>
                {semuaKelas.map((kelas) => {
                return (
                <Col key={kelas.id} className='shadow rounded' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                <img src={kelas.image} alt="unsplash.com" className='w-100 mb-5 rounded-top' />
                </Col>
                )
                }) }
            </Row>
        </Container>
    </div>

    <FaqComponent />
</div>
)
}

export default ProjectPage