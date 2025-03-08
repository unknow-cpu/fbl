// // src/context/AuthContext.js
// import { createContext, useContext, useState } from 'react';
// import axios from 'axios';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(() => {
//     // Khởi tạo từ sessionStorage, mặc định là false nếu không có token
//     return !!sessionStorage.getItem('authToken');
//   });

//   const login = (token) => {
//     sessionStorage.setItem('authToken', token);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     sessionStorage.removeItem('authToken');
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };