import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Layout/Header';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/auth/LoginPage';
import SignupPage from '../pages/auth/SignupPage';
import PostList from '../pages/board/PostList';
import PostDetail from '../pages/board/PostDetail';
import PostForm from '../pages/board/PostForm';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/notice" element={<PostList category="NOTICE" />} />
        <Route path="/gallery" element={<PostList category="GALLERY" />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/write" element={<ProtectedRoute><PostForm /></ProtectedRoute>} />
        <Route path="/posts/edit/:id" element={<ProtectedRoute><PostForm /></ProtectedRoute>} />
      </Routes>
    </>
  );
};

export default AppRouter;