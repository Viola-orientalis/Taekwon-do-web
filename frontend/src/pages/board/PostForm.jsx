import { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { boardApi } from '../../api/services/board'; // API 연결

const PostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 상태 관리 (카테고리 기본값은 'FREE')
  const [form, setForm] = useState({ 
    title: '', 
    content: '', 
    category: 'FREE' 
  });

  // 수정 모드일 때: 기존 글 데이터 가져오기
  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await boardApi.getDetail(id);
          const { title, content, category } = response.data;
          setForm({ title, content, category });
        } catch (error) {
          console.error("글 불러오기 실패:", error);
          alert("글 정보를 불러올 수 없습니다.");
          navigate(-1);
        }
      };
      fetchPost();
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 유효성 검사
    if (!form.title.trim() || !form.content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    try {
      if (id) {
        // 수정 (Update)
        await boardApi.updatePost(id, form);
        alert('게시글이 수정되었습니다.');
      } else {
        // 작성 (Create)
        await boardApi.createPost(form);
        alert('새 글이 등록되었습니다.');
      }
      // 성공 후 목록으로 이동 (뒤로 가기)
      navigate(-1); 
    } catch (error) {
      console.error("저장 실패:", error);
      alert("글 저장 중 오류가 발생했습니다.");
    }
  };

  return (
    <Container className="py-5">
      <h2 className="fw-bold text-white mb-4 border-start border-4 border-danger ps-3">
        {id ? '게시글 수정' : '새 글 작성'}
      </h2>
      <Form onSubmit={handleSubmit}>
        {/* 카테고리 선택 (백엔드 연동 필수) */}
        <Form.Group className="mb-3">
          <Form.Label className="text-secondary">카테고리</Form.Label>
          <Form.Select 
            name="category"
            className="bg-dark text-white border-secondary rounded-0 p-3"
            value={form.category}
            onChange={handleChange}
          >
            <option value="FREE">자유게시판</option>
            <option value="QNA">질문게시판</option>
            <option value="GALLERY">갤러리</option>
            <option value="NOTICE">공지사항</option>
          </Form.Select>
        </Form.Group>

        {/* 제목 */}
        <Form.Group className="mb-3">
          <Form.Label className="text-secondary">제목</Form.Label>
          <Form.Control 
            type="text" 
            name="title"
            className="bg-dark text-white border-secondary rounded-0 p-3"
            value={form.title}
            onChange={handleChange}
            placeholder="제목을 입력하세요"
          />
        </Form.Group>

        {/* 내용 */}
        <Form.Group className="mb-4">
          <Form.Label className="text-secondary">내용</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={10} 
            name="content"
            className="bg-dark text-white border-secondary rounded-0 p-3"
            value={form.content}
            onChange={handleChange}
            placeholder="내용을 입력하세요"
          />
        </Form.Group>

        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" className="rounded-0" onClick={() => navigate(-1)}>취소</Button>
          <Button variant="danger" type="submit" className="rounded-0">
            {id ? '수정하기' : '등록하기'}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default PostForm;