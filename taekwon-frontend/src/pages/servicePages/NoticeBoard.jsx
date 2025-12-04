import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "6월 휴관안내",
    content: "6월은 대통령 선거와 현충일로 인해 6/3일 6/6일은 휴관입니다.<br />등원에 차질없게 참고해주시면 감사드리겠습니다."
  },
  {
    id: 2,
    title: "6월 서구청장기 겨루기대회 안내",
    content: "아이들의 노력의 열매가 열릴 서구청장기 겨루기대회가 다가왔습니다.<br/><br/>집합시간:오전6시까지 본도장에 도착<br/><br/>장소:인천공항 스카이돔 실내체육관<br/><br/>대회진행:오전8시30분 시작 ~ 오후1시예정<br/><br/>(부모님 응원시 오전 8시30분까지)<br/><br/>주차:당일 오전7시~오후7시까지 모든차량 무료주차<br/><br/>점심:선수들 점심식사는 밥차로 준비하였습니다.석사태권도 모든 선수들의 경기가 끝난 후 함께 식사하도록 하겠습니다"
  }
];

const NoticeBoard = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-black">
      <main className="flex-grow container mx-auto p-4 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">공지사항 게시판</h2>
        <div className="bg-black shadow-md rounded-lg overflow-hidden text-white">
          <ul>
            {posts.map((post) => (
              <li
                key={post.id}
                className="border-b last:border-b-0 cursor-pointer hover:bg-gray-800 px-6 py-4"
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
              <p
                className="text-lg"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              ></p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default NoticeBoard;