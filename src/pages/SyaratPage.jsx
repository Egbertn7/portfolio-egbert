import {Container, Row, Col} from 'react-bootstrap';
import FaqComponent from '../components/FaqComponent';

const SyaratPage = () => {
return (
<div className="syarat-ketentuan-page">
    <div className="syarat-ketentuan min-vh-100">
        <Container>
            <Row>
                <Col>
                    <h1 className='fw-bold text-center mb-5 animate__animated animate__fadeInUp animate__delay-1s'>About me</h1>
                </Col>
            </Row>
            <Row className='py-3 align-items-center animate__animated animate__fadeInUp animate__delay-1s'>
                <Col md={4} className="text-center mb-4 mb-md-0">
                    <div className="position-relative d-inline-block">
                        <div className="bg-shape position-absolute" 
                             style={{
                                 width: '120%',
                                 height: '120%',
                                 top: '-10%',
                                 left: '-10%',
                                 zIndex: 0,
                             }}>
                           
                        </div>
                        <img 
                            src="/src/assets/img/foto-egbert.png" 
                            alt="Profile" 
                            className="position-relative rounded-3"
                            style={{
                                width: '280px',
                                height: '340px',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                zIndex: 1,
                                padding: '15px'
                            }}
                        />
                    </div>
                </Col>
                <Col md={8}>
                    <h4 className='fw-bold'>Perkenalan</h4>
                    <p>Halo, Nama saya Egbert Angenius. Saya seorang pengembang perangkat lunak yang memiliki hasrat untuk desain kreatif. Dengan pengalaman, saya terampil dalam Pengembangan Web, Mendesain, Menggambar, dan banyak lagi, mendesain antarmuka pengguna yang menarik dengan fokus pada pengalaman pengguna yang optimal. Pengalaman saya meliputi pengembangan aplikasi web yang sukses. Saya terus berinovasi dan berusaha untuk menggabungkan keterampilan teknis dalam pengembangan perangkat lunak dengan pemikiran desain yang kuat.</p>
                    
                    <h5 className='fw-bold mt-4'>Skills</h5>
                    <div className="skills-container d-flex flex-wrap gap-2">
                        {['ReactJS', 'ViteJS', 'TailwindCSS', 'Javascript', 'Laravel', 'AlphineJS', 'UI/UX Design, Illustrator'].map((skill, index) => (
                            <span 
                                key={index}
                                className="skill-badge px-3 py-2"
                                style={{
                                    background: '#f8f9fa',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={(e) => e.target.style.background = '#e9ecef'}
                                onMouseOut={(e) => e.target.style.background = '#f8f9fa'}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
    <FaqComponent />
</div>
)
}

export default SyaratPage