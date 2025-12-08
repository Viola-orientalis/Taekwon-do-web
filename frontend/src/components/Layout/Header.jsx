import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Navbar bg="black" variant="dark" expand="md" sticky="top" className="border-bottom border-secondary border-opacity-25 py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          TAEKWON<span className="text-danger">DO</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center fs-5">
            <Nav.Link as={Link} to="/notice" className="mx-3">공지사항</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="mx-3">갤러리</Nav.Link>
            <div className="ms-3 vr text-white d-none d-md-block" style={{ height: '30px' }} />
            {user ? (
              <div className="d-flex align-items-center mt-3 mt-md-0 ms-md-3">
                <span className="text-light me-3 small">{user.username}님</span>
                <Button variant="outline-danger" size="sm" onClick={() => { logout(); navigate('/'); }}>로그아웃</Button>
              </div>
            ) : (
              <Button as={Link} to="/login" variant="light" className="ms-md-4 mt-3 mt-md-0 fw-bold px-4 rounded-0">로그인</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;