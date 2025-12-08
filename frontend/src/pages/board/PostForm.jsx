import { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const PostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', content: '' });

  useEffect(() => {
    if (id) {
      setForm({ title: `수정할 제목 ${id}`, content: '기존 내용...' });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(id ? '수정 완료' : '작성 완료');
    navigate('/notice');
  };

  return (
    <Container className="py-5">
      <h2 className="fw-bold text-white mb-4 border-start border-4 border-danger ps-3">
        {id ? '게시글 수정' : '새 글 작성'}
      </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="text-secondary">제목</Form.Label>
          <Form.Control 
            type="text" 
            className="bg-dark text-white border-secondary rounded-0 p-3"
            value={form.title}
            onChange={(e) => setForm({...form, title: e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label className="text-secondary">내용</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={10} 
            className="bg-dark text-white border-secondary rounded-0 p-3"
            value={form.content}
            onChange={(e) => setForm({...form, content: e.target.value})}
          />
        </Form.Group>
        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" className="rounded-0" onClick={() => navigate(-1)}>취소</Button>
          <Button variant="danger" type="submit" className="rounded-0">등록하기</Button>
        </div>
      </Form>
    </Container>
  );
};

export default PostForm;