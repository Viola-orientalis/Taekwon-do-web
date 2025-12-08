import client from '../client';

export const authApi = {
  login: async (credentials) => {
    // 백엔드: POST /api/auth/login
    // 응답: { token: "...", role: "...", username: "..." }
    const response = await client.post('/auth/login', credentials);
    return response; // axios는 자동으로 .data를 감싸서 주지만, 호출하는 쪽에서 response.data를 쓰도록 통일
  },
  
  signup: async (userInfo) => {
    // 백엔드: POST /api/auth/signup
    return await client.post('/auth/signup', userInfo);
  },
  
  logout: async () => { 
    // 백엔드 로그아웃 호출 (필수는 아니지만 확장성을 위해)
    return await client.post('/auth/logout'); 
  },
};