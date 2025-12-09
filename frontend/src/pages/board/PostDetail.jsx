import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';
import { boardApi } from '../../api/services/board'; // 경로 확인 필요

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 실제 백엔드 연동 코드
    const fetchPost = async () => {
      try {
        const response = await boardApi.getDetail(id);
        setPost(response.data); // 백엔드에서 받은 데이터 저장
      } catch (error) {
        console.error("글 불러오기 실패:", error);
        alert("존재하지 않거나 삭제된 게시글입니다.");
        navigate(-1);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate]);

  const handleDelete = async () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      try {
        await boardApi.deletePost(id);
        alert('삭제되었습니다.');
        navigate('/posts'); // 목록으로 이동
      } catch (error) {
        console.error("삭제 실패:", error);
        alert("삭제 권한이 없거나 오류가 발생했습니다.");
      }
    }
  };

  if (loading) return <div className="text-white text-center py-5">Loading...</div>;
  if (!post) return null;

  // 본인 글이거나 관리자일 때만 수정/삭제 버튼 노출
  const isOwner = user && (user.username === post.author || user.role === 'ADMIN');

  return (
    <Container className="py-5">
      <div className="border-bottom border-secondary mb-4 pb-3">
        <h2 className="text-white fw-bold">{post.title}</h2>
        <div className="d-flex justify-content-between text-secondary mt-2">
          <span>작성자: {post.author}</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
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