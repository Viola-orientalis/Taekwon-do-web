import { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
// ▼ Link가 추가되었습니다.
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData.username, formData.password);
    if (success) {
      navigate('/'); 
    } else {
      alert('로그인 실패! 아이디/비번을 확인하세요.');
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Card className="p-4 shadow rounded-0" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#121212', border: '1px solid #333' }}>
        <Card.Body>
          <h2 className="text-center text-white fw-bold mb-4">LOGIN</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="text-secondary small">Username</Form.Label>
              <Form.Control 
                type="text" 
                name="username" 
                placeholder="아이디 입력" 
                className="bg-dark text-white border-secondary rounded-0"
                onChange={handleChange}
                required 
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="text-secondary small">Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                placeholder="비밀번호 입력" 
                className="bg-dark text-white border-secondary rounded-0"
                onChange={handleChange}
                required 
              />
            </Form.Group>
            
            <Button variant="danger" type="submit" className="w-100 fw-bold rounded-0 py-2 mb-3">
              로그인
            </Button>

            {/* 회원가입 링크 영역 */}
            <div className="text-center border-top border-secondary pt-3 mt-3">
              <span className="text-secondary small me-2">아직 회원이 아니신가요?</span>
              <Link to="/signup" className="text-white fw-bold text-decoration-underline">
                회원가입
              </Link>
            </div>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;