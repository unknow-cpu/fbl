// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    isLoading: true,
    user: null
  });

  // Set Axios defaults for all requests
  const setAxiosToken = (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };

  // Check session on mount
  const checkSession = async () => {
    try {
      const token = sessionStorage.getItem('authToken');
      if (!token) {
        setAuthState({
          isAuthenticated: false,
          user: null,
          isLoading: false,
        });
        setAxiosToken(null);
        return;
      }

      // Set token in headers for this request
      setAxiosToken(token);

      const { data } = await axios.get('http://localhost:5000/api/check-session', {
        timeout: 5000,
      });

      setAuthState({
        isAuthenticated: data.isAuthenticated,
        user: data.user,
        isLoading: false,
      });

      if (!data.isAuthenticated) {
        sessionStorage.removeItem('authToken');
        setAxiosToken(null);
      }
    } catch (error) {
      console.error('Check session error:', error);
      sessionStorage.removeItem('authToken');
      setAxiosToken(null);
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
      });
    }
  };

  // Login
  const login = async (credentials) => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/login', credentials);

      setAuthState({
        isAuthenticated: true,
        user: data.user,
        isLoading: false,
      });

      sessionStorage.setItem('authToken', data.token);
      setAxiosToken(data.token);

      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await axios.post('http://localhost:5000/api/logout');
      sessionStorage.removeItem('authToken');
      setAxiosToken(null);
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
      });
    } catch (error) {
      console.error('Logout error:', error);
      sessionStorage.removeItem('authToken');
      setAxiosToken(null);
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
      });
    }
  };

  // Fetch user (optional, for manual refresh)
  const fetchUser = async () => {
    try {
      const token = sessionStorage.getItem('authToken');
      if (!token) return null;

      setAxiosToken(token);
      const { data } = await axios.get('http://localhost:5000/api/user');

      if (data.success) {
        setAuthState((prev) => ({
          ...prev,
          user: data.user,
        }));
        return data.user;
      }
      return null;
    } catch (error) {
      console.error('Fetch user error:', error);
      return null;
    }
  };

  const fetchProfile = async (userId) => {
    try {
      const token = sessionStorage.getItem('authToken');
    if (!token) throw new Error('No token found');

    const res = await axios.get(`http://localhost:5000/api/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const { user: profileUser, posts, isOwnProfile, isFriend, hasSentRequest } = res.data.data;
    return {
      profileUser,
      posts,
      isOwnProfile,
      isFriend,
      hasSentRequest,
    };
  } catch (err) {
    console.error('Fetch profile error:', err.response?.data || err.message);
    throw new Error(err.response?.data?.message || 'Lỗi khi tải trang cá nhân');
  } 
  };

  // // Hàm kiểm tra session
  // const checkSession = async () => {
  //   try {
  //     const { data } = await axios.get('http://localhost:5000/api/check-session', {
  //       timeout: 5000, // Timeout sau 5s
  //       withCredentials: true
  //     });
      
  //     setAuthState({
  //       isAuthenticated: data.isAuthenticated,
  //       user: data.user,
  //       isLoading: false
  //     });
      
  //     // Đồng bộ với sessionStorage
  //     if (data.isAuthenticated) {
  //       sessionStorage.setItem('authToken', data.token);
  //     } else {
  //       sessionStorage.removeItem('authToken');
  //     }
  //   } catch (error) {
  //     sessionStorage.removeItem('authToken');
  //     setAuthState({
  //       isAuthenticated: false,
  //       user: null,
  //       isLoading: false
  //     });
  //   }
  // };

  // // Hàm đăng nhập
  // const login = async (credentials) => {
  //   try {
  //     const { data } = await axios.post('http://localhost:5000/api/login', credentials, {
  //       withCredentials: true
  //     });
      
  //     setAuthState({
  //       isAuthenticated: true,
  //       user: data.user,
  //       isLoading: false
  //     });
      
  //     sessionStorage.setItem('authToken', data.token);
  //     return data;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // // Hàm đăng xuất
  // const logout = async () => {
  //   try {
  //     await axios.post('http://localhost:5000/api/logout', null, {
  //       withCredentials: true
  //     });
  //     await checkSession(); // Quan trọng
    
  //     // Xóa mọi dữ liệu local
  //     sessionStorage.removeItem('authToken');
      
  //     // Cập nhật state
  //     setAuthState({
  //       isAuthenticated: false,
  //       user: null,
  //       isLoading: false
  //     });
  
  //   } catch (error) {
  //     console.error('Logout error:', error);
  //     // Xử lý fallback nếu server không phản hồi
  //     sessionStorage.removeItem('authToken');
  //     setAuthState({
  //       isAuthenticated: false,
  //       user: null,
  //       isLoading: false
  //     });
  //   }
  // };

  // const fetchUser = async () => {
  //   try {
  //     const { data } = await axios.get('http://localhost:5000/api/user', {
  //       withCredentials: true
  //     });
      
  //     if (data.success) {
  //       setAuthState(prev => ({
  //         ...prev,
  //         user: data.user
  //       }));
  //     }
  //     return data.user;
  //   } catch (error) {
  //     console.error('Lỗi lấy thông tin user:', error);
  //     return null;
  //   }
  // };
  

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ 
      ...authState,
      login,
      logout,
      checkSession,
      fetchUser,
      fetchProfile,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};