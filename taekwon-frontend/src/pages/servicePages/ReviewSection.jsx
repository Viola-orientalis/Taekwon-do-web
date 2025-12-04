import { useState } from "react";

const initialReviews = [
  { id: 1, name: "홍길동", content: "선생님이 깨끗하고 도장이 친절해요!" },
  { id: 2, name: "김영희", content: "아이들이 즐겁게 운동해서 좋아요." }
];

const ReviewSection = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [showModal, setShowModal] = useState(false);

  // 후기 등록
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;
    setReviews([
      ...reviews,
      { id: Date.now(), name: name.trim(), content: content.trim() }
    ]);
    setName("");
    setContent("");
    setShowModal(false);
  };

  // 후기 삭제
  const handleDelete = (id) => {
    setReviews(reviews.filter(r => r.id !== id));
  };

  // 후기 수정 시작
  const handleEdit = (id, content) => {
    setEditId(id);
    setEditContent(content);
  };

  // 후기 수정 저장
  const handleEditSave = (id) => {
    setReviews(reviews.map(r =>
      r.id === id ? { ...r, content: editContent } : r
    ));
    setEditId(null);
    setEditContent("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white"> {/* 전체 배경색을 더 진한 검정 계열로 변경 */}
      <main className="flex-grow container mx-auto p-4 py-12 mt-20 max-w-xl bg-gray-800 rounded-lg shadow-xl border-4 border-black"> {/* border-4 border-black 추가 */}
        <h2 className="text-3xl font-extrabold mb-6 pb-2 border-b-2 border-gray-700 text-center">후기</h2>
        
        {reviews.length === 0 && (
          <p className="text-gray-400 text-center py-8">아직 등록된 후기가 없습니다. 첫 후기를 남겨주세요!</p>
        )}

        <ul className="space-y-4">
          {reviews.map(review => (
            <li key={review.id} className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="mb-2">
                <strong className="text-lg text-gray-300">{review.name}</strong>
              </div>
              {editId === review.id ? (
                <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                  <input
                    className="border border-gray-600 bg-gray-600 text-white p-2 rounded flex-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    value={editContent}
                    onChange={e => setEditContent(e.target.value)}
                  />
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <button
                      className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm"
                      onClick={() => handleEditSave(review.id)}
                    >
                      저장
                    </button>
                    <button
                      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors duration-200 text-sm"
                      onClick={() => setEditId(null)}
                    >
                      취소
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  <span className="text-gray-200 flex-1">{review.content}</span>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <button
                      className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200 px-2 py-1 rounded border border-gray-400 hover:border-gray-300"
                      onClick={() => handleEdit(review.id, review.content)}
                    >
                      수정
                    </button>
                    <button
                      className="text-sm text-red-400 hover:text-red-300 transition-colors duration-200 px-2 py-1 rounded border border-red-400 hover:border-red-300"
                      onClick={() => handleDelete(review.id)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* 후기 작성 버튼 */}
        <div className="w-full flex justify-end mt-8">
          <button
            className="bg-gray-600 text-white px-6 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setShowModal(true)}
          >
            후기 작성
          </button>
        </div>
      </main>

      {/* 후기 작성 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-700 rounded-lg shadow-2xl p-8 max-w-[400px] w-full relative border border-gray-600">
            <button
              className="absolute top-2 right-2 text-gray-300 hover:text-white text-4xl font-light leading-none"
              onClick={() => setShowModal(false)}
              aria-label="닫기"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-6 text-white text-center">후기 작성</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="border border-gray-600 bg-gray-600 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-400"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <textarea
                className="border border-gray-600 bg-gray-600 text-white p-3 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-400"
                placeholder="후기 내용을 입력하세요"
                value={content}
                onChange={e => setContent(e.target.value)}
              />
              <button
                className="bg-gray-600 text-white px-6 py-3 rounded-lg self-end text-lg font-bold hover:bg-gray-700 transition-colors duration-200"
                type="submit"
              >
                등록하기
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewSection;