import { useState, useEffect } from 'react';
import { Container, Table, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const PostList = ({ category }) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const isGallery = category === 'GALLERY';

  useEffect(() => {
    // API 연동 전 임시 데이터
    const demo = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      title: isGallery ? `갤러리 사진 ${i+1}` : `공지사항 제목입니다 ${i+1}`,
      author: '관리자',
      date: '2023.12.09',
      views: 10 + i,
      thumbnail: `https://source.unsplash.com/400x300/?taekwondo&sig=${i}`
    }));
    setPosts(demo);
  }, [category]);

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between mb-4">
        <h3 className="fw-bold text-white border-start border-4 border-danger ps-3">{category}</h3>
        <Button variant="light" size="sm" className="fw-bold rounded-0" onClick={() => navigate('/posts/write')}>Write</Button>
      </div>
      
      {isGallery ? (
        <Row xs={1} md={2} lg={3} className="g-4">
          {posts.map(p => (
            <Col key={p.id}>
              <Card className="h-100 rounded-0 border-0 bg-dark text-white">
                <Card.Img variant="top" src={p.thumbnail} className="rounded-0 opacity-75" style={{height:'200px', objectFit:'cover'}} />
                <Card.Body>
                  <Card.Title className="text-truncate">{p.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="table-responsive">
          <Table hover className="align-middle text-nowrap table-dark" style={{ minWidth: '600px' }}>
            <thead>
              <tr className="text-secondary small">
                <th width="50">NO</th><th>TITLE</th><th width="100">AUTHOR</th><th width="100">DATE</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(p => (
                <tr key={p.id} className="border-secondary border-opacity-25">
                  <td className="text-secondary">{p.id}</td>
                  <td><Link to={`/posts/${p.id}`} className="text-white text-decoration-none">{p.title}</Link></td>
                  <td className="text-secondary small">{p.author}</td>
                  <td className="text-secondary small">{p.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default PostList;