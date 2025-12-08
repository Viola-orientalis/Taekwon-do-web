import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';
import { boardApi } from '../../api/services/board';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // 백엔드 연동 전까지 사용할 임시 데이터
    // 실제 연동 시: const fetchPost = async () => { const res = await boardApi.getDetail(id); setPost(res.data); }
    setPost({
      id: id,
      title: `[공지] ${id}번 게시글의 상세 내용입니다.`,
      content: '여기에 게시글 본문이 들어갑니다.\n줄바꿈도 지원됩니다.\n\n태권도 정신!',
      author: 'admin',
      date: '2023-12-09'
    });
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      // await boardApi.deletePost(id);
      alert('삭제되었습니다.');
      navigate('/notice');
    }
  };

  if (!post) return <div className="text-white text-center py-5">Loading...</div>;

  // 본인 글이거나 관리자일 때만 수정/삭제 버튼 노출
  const isOwner = user && (user.username === post.author || user.role === 'ADMIN');

  return (
    <Container className="py-5">
      <div className="border-bottom border-secondary mb-4 pb-3">
        <h2 className="text-white fw-bold">{post.title}</h2>
        <div className="d-flex justify-content-between text-secondary mt-2">
          <span>작성자: {post.author}</span>
          <span>{post.date}</span>
        </div>
      </div>

      <div className="text-white mb-5" style={{ minHeight: '300px', whiteSpace: 'pre-wrap', lineHeight: '1.8' }}>
        {post.content}
      </div>

      <div className="d-flex justify-content-between">
        <Button variant="outline-light" className="rounded-0" onClick={() => navigate(-1)}>목록으로</Button>
        
        {isOwner && (
          <div>
            <Link to={`/posts/edit/${id}`} className="btn btn-outline-primary rounded-0 me-2">수정</Link>
            <Button variant="outline-danger" className="rounded-0" onClick={handleDelete}>삭제</Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default PostDetail;