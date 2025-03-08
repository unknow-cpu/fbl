import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { 
        state: { 
          from: location.pathname,
          message: 'Vui lòng đăng nhập để tiếp tục' 
        }, 
        replace: true 
      });
    }
  }, [isAuthenticated, navigate, location]);

  // Render children nếu đã xác thực
  return isAuthenticated ? children : null;
};

export default PrivateRoute;