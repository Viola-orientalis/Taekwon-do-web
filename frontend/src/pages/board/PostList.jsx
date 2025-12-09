import { useState, useEffect } from 'react';
import { Container, Table, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { boardApi } from '../../api/services/board'; // 경로 확인 필요

const PostList = ({ category }) => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const isGallery = category === 'GALLERY'; // 갤러리 카테고리인지 확인

  useEffect(() => {
    // 실제 백엔드 연동 코드
    const fetchPosts = async () => {
      try {
        // category props를 백엔드로 전달
        const response = await boardApi.getList(category);
        setPosts(response.data);
      } catch (error) {
        console.error("목록 불러오기 실패:", error);
      }
    };

    fetchPosts();
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
                {/* 이미지가 없으면 기본 이미지 표시 */}
                <Card.Img variant="top" src="https://via.placeholder.com/400x300?text=No+Image" className="rounded-0 opacity-75" style={{height:'200px', objectFit:'cover'}} />
                <Card.Body>
                  <Card.Title className="text-truncate">
                    <Link to={`/posts/${p.id}`} className="text-white text-decoration-none">{p.title}</Link>
                  </Card.Title>
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
              {posts.length > 0 ? (
                posts.map(p => (
                  <tr key={p.id} className="border-secondary border-opacity-25">
                    <td className="text-secondary">{p.id}</td>
                    <td><Link to={`/posts/${p.id}`} className="text-white text-decoration-none">{p.title}</Link></td>
                    <td className="text-secondary small">{p.author}</td>
                    <td className="text-secondary small">{new Date(p.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-secondary">작성된 글이 없습니다.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default PostList;