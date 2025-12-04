import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#A33D4F]">회원가입</h2>
        {/* 회원가입 폼 예시 */}
        <form>
          <input type="text" placeholder="이름" className="w-full mb-3 px-4 py-2 border rounded" />
          <input type="email" placeholder="이메일" className="w-full mb-3 px-4 py-2 border rounded" />
          <input type="password" placeholder="비밀번호" className="w-full mb-6 px-4 py-2 border rounded" />
          <button type="submit" className="w-full bg-[#A33D4F] text-white py-2 rounded font-semibold hover:bg-[#8F3546] transition">가입하기</button>
        </form>
        <div className="mt-6 text-center">
          <span>이미 계정이 있으신가요? </span>
          <Link to="/login" className="text-[#A33D4F] font-semibold hover:underline">로그인</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
