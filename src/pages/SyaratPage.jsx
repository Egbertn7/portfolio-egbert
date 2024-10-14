import {Container, Row, Col} from 'react-bootstrap';
import FaqComponent from '../components/FaqComponent';

const SyaratPage = () => {
return (
<div className="syarat-ketentuan-page">
    <div className="syarat-ketentuan min-vh-100">
        <Container>
            <Row>
                <Col>
                <h1 className='fw-bold text-center mb-5 animate__animated animate__fadeInUp animate__delay-1s'>About</h1>
                </Col>
            </Row>
            <Row className='py-3'>
                <Col>
                <h4 className='fw-bold'>Perkenalan</h4>
                <p>Halo, Nama saya Egbert Angenius. Saya seorang pengembang perangkat lunak yang memiliki hasrat untuk desain kreatif. Dengan pengalaman, saya terampil dalam Pengembangan Web, Mendesain, Menggambar, dan banyak lagi, mendesain antarmuka pengguna yang menarik dengan fokus pada pengalaman pengguna yang optimal. Pengalaman saya meliputi pengembangan aplikasi web yang sukses. Saya terus berinovasi dan berusaha untuk menggabungkan keterampilan teknis dalam pengembangan perangkat lunak dengan pemikiran desain yang kuat.</p>
                </Col>
            </Row>
        </Container>
    </div>
    <FaqComponent />
</div>
)
}

export default SyaratPage