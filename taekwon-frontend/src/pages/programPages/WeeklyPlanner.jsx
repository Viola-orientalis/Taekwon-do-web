import { useState } from "react";
import time from "../../assets/time.jpg";
import programe6 from "../../assets/6year/6_programe.jpg";
import programe7 from "../../assets/7year/7_programe.jpg";

const posts = [
  {
    id: 1,
    title: "6월달 마음으로 드리는 글",
    image: programe6,
    content: "6월달 안내문입니다."
  },
  {
    id: 2,
    title: "7월달 마음으로 드리는 글",
    image: programe7,
    content: "7월달 안내문입니다."
  }
];

const WeeklyPlanner = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black">
      <main className="flex-grow container mx-auto p-4 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">월간 마음으로 드리는 글</h2>
        <div className="bg-black shadow-md rounded-lg overflow-hidden text-white">
          <ul>
            {posts.map((post) => (
              <li
                key={post.id}
                className="border-b last:border-b-0 cursor-pointer hover:gray px-6 py-4"
                onClick={() => setSelectedPost(post)}
              >
                <span className="font-semibold">{post.title}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* 팝업 모달 */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-[600px] w-full relative">
              <button
                className="absolute top-0 right-2 text-gray-500 hover:text-gray-700 text-[50px]"
                onClick={() => setSelectedPost(null)}
                aria-label="닫기"
              >
                ×
              </button>
              <h3 className="text-2xl font-bold mb-6">{selectedPost.title}</h3>
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-auto rounded mb-6" />
              <p className="text-lg">{selectedPost.content}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default WeeklyPlanner;