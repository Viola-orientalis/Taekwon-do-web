import { useState } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { authApi } from '../../api/services/auth'; // API 서비스 임포트

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. 유효성 검사 (비밀번호 일치 여부)
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      // 2. 회원가입 API 호출
      // const response = await authApi.signup(formData); 
      // console.log(response);
      
      alert('회원가입이 완료되었습니다! 로그인해주세요.');
      navigate('/login'); // 성공 시 로그인 페이지로 이동
    } catch (error) {
      console.error('Signup failed:', error);
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center py-5" style={{ minHeight: '90vh' }}>
      <Card className="p-4 shadow rounded-0 bg-dark text-white border-secondary" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="text-center fw-bold mb-4">SIGN UP</h2>
        
        <Form onSubmit={handleSubmit}>
          {/* 아이디 */}
          <Form.Group className="mb-3">
            <Form.Label className="text-secondary small">아이디 (ID)</Form.Label>
            <Form.Control 
              type="text" 
              name="username"
              className="bg-black text-white border-secondary rounded-0"
              onChange={handleChange}
              required 
            />
          </Form.Group>

          {/* 비밀번호 & 확인 (한 줄에 배치) */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className="text-secondary small">비밀번호</Form.Label>
                <Form.Control 
                  type="password" 
                  name="password"
                  className="bg-black text-white border-secondary rounded-0"
                  onChange={handleChange}
                  required 
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mt-3 mt-md-0">
                <Form.Label className="text-secondary small">비밀번호 확인</Form.Label>
                <Form.Control 
                  type="password" 
                  name="confirmPassword"
                  className="bg-black text-white border-secondary rounded-0"
                  onChange={handleChange}
                  required 
                />
              </Form.Group>
            </Col>
          </Row>

          {/* 이름 */}
          <Form.Group className="mb-3">
            <Form.Label className="text-secondary small">이름 (Name)</Form.Label>
            <Form.Control 
              type="text" 
              name="name"
              className="bg-black text-white border-secondary rounded-0"
              onChange={handleChange}
              required 
            />
          </Form.Group>

          {/* 이메일 */}
          <Form.Group className="mb-4">
            <Form.Label className="text-secondary small">이메일 (Email)</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              className="bg-black text-white border-secondary rounded-0"
              onChange={handleChange}
              required 
            />
          </Form.Group>

          <Button variant="danger" type="submit" className="w-100 fw-bold rounded-0 py-2 mb-3">
            가입하기
          </Button>

          <div className="text-center">
            <span className="text-secondary small me-2">이미 계정이 있으신가요?</span>
            <Link to="/login" className="text-white fw-bold text-decoration-underline">로그인</Link>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default SignupPage;