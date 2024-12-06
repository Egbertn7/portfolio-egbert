import {Container, Row, Col} from 'react-bootstrap';
import { project, semuaKelas } from '../data/index';

import FaqComponent from '../components/FaqComponent';


const PortofolioPage = () => {
return (
<div className="kelas-page">
<div className="project">
<Container>
            <Row>
                <h1 className='fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s'>Project</h1>
                <p className='text-center animate__animated animate__fadeInUp animate__delay-1s'>Project saya yang telah di ikuti</p>
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
                                    className="btn btn-primary w-100"
                                >
                                    Preview 
                                </a>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
        </div>
    <div className='kelas min-vh-100'>
        <Container>
            <Row>
                <Col>
                <h1 className='fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s'>Portfolio</h1>
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

export default PortofolioPage