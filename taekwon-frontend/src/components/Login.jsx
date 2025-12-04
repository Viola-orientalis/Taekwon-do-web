import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#A33D4F]">로그인</h2>
        {/* 로그인 폼 예시 */}
        <form>
          <input type="email" placeholder="이메일" className="w-full mb-3 px-4 py-2 border rounded" />
          <input type="password" placeholder="비밀번호" className="w-full mb-6 px-4 py-2 border rounded" />
          <button type="submit" className="w-full bg-[#A33D4F] text-white py-2 rounded font-semibold hover:bg-[#8F3546] transition">로그인</button>
        </form>
        <div className="mt-6 text-center">
          <span>계정이 없으신가요? </span>
          <Link to="/signup" className="text-[#A33D4F] font-semibold hover:underline">회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
