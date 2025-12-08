import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const MainPage = () => {
  return (
    <div className="main-page">
      {/* Hero Section */}
      <section 
        className="d-flex align-items-center justify-content-center text-center text-white position-relative"
        style={{
          minHeight: '85vh',
          background: 'url("https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80") no-repeat center/cover',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-75"></div>
        <Container className="position-relative z-1">
          <h1 className="display-2 fw-bold mb-4">
            한계를 넘어선 <span className="text-danger">움직임</span>
          </h1>
          <p className="lead mb-5 text-light opacity-75 fs-4">
            예의, 인내, 염치, 극기, 백절불굴.<br />정통 태권도의 정신을 이곳에서 시작하세요.
          </p>
          <div className="d-flex justify-content-center gap-4">
            <Button variant="danger" size="lg" className="px-5 py-3 fw-bold fs-5 rounded-0 shadow">입관 문의</Button>
            <Button variant="outline-light" size="lg" className="px-5 py-3 fw-bold fs-5 rounded-0 shadow">프로그램 소개</Button>
          </div>
        </Container>
      </section>

      {/* Info Widgets */}
      <section className="py-5 bg-black">
        <Container className="py-5">
          <Row className="g-4">
            <Col xs={12} md={4}>
              <Card className="h-100 text-center py-5 rounded-0 border-secondary border-opacity-25 bg-dark text-white">
                <Card.Body>
                  <div className="display-4 text-danger mb-4"><i className="bi bi-clock"></i></div>
                  <Card.Title className="fw-bold fs-3 mb-3">수련 시간</Card.Title>
                  <Card.Text className="text-secondary fs-5">PM 01:00 ~ PM 09:00</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* ... 나머지 카드들은 유사한 패턴으로 작성 ... */}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default MainPage;