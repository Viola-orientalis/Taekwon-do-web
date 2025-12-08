import { createContext, useState, useContext, useEffect } from 'react';
import { authApi } from '../api/services/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const role = localStorage.getItem('userRole');
    // 실제로는 토큰 디코딩이나 /me API 호출 필요
    if (token) setUser({ username: 'User', role: role || 'MEMBER' });
  }, []);

  const login = async (username, password) => {
    try {
      const res = await authApi.login({ username, password });
      const { token, role, username: resName } = res.data;
      
      localStorage.setItem('accessToken', token);
      localStorage.setItem('userRole', role);
      setUser({ username: resName, role });
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);