import { FriendsLayout, MarketplaceLayout, VideoLayout , GroupLayout , AuthLayout , RegisterLayout, ProfileLayout } from '../components/Layout/index';
import Following from '../pages/Following';
import Friends from '../pages/Friends';
import Home from '../pages/Home';
import Marketplace from '../pages/Marketplace';
import Watch from '../pages/Watch';
import LoginForm from '../pages/Auth';
import RegisterForm from '../pages/Register';
import Profile from '../pages/Profile';
import { BrowserRouter as  Navigate } from 'react-router-dom';


export const publicRoutes = [
    { path: '/login', component: LoginForm, layout: AuthLayout },
    { path: '/register', component: RegisterForm, layout: RegisterLayout },
];

export const privateRoutes = [
    { path: '/home', component: Home },
    { path: '/Profile/:userId', component: Profile, layout: ProfileLayout },
    { path: '/following', component: Following },
    { path: '/group', component: Following, layout: GroupLayout },
    { path: '/watch', component: Watch, layout: VideoLayout },
    { path: '/friends', component: Friends, layout: FriendsLayout },
    { path: '/Marketplace', component: Marketplace, layout: MarketplaceLayout },
    { path: '/register', component: RegisterForm, layout: RegisterLayout },];
// export { privateRoutes, publicRoutes };

// const isAuthenticated = () => {
//     return !!localStorage.getItem('authToken');
// };

// // Component bảo vệ route
// const ProtectedRoute = ({ children }) => {
//     if (!isAuthenticated()) {
//         return <Navigate to="/login" replace />;
//     }
//     return children;
// };

// const getRoutes = () => {
//     return [
//       // Public routes (không cần xác thực)
//       ...publicRoutes.map(route => ({
//         path: route.path,
//         element: route.layout ? (
//           <route.layout>
//             <route.component />
//           </route.layout>
//         ) : (
//           <route.component />
//         )
//       })),
  
//       // Private routes (yêu cầu xác thực)
//       ...privateRoutes.map(route => {
//         const Component = route.component;
//         const Layout = route.layout;
        
//         return {
//           path: route.path,
//           element: (
//             <ProtectedRoute>
//               {Layout ? (
//                 <Layout>
//                   <Component />
//                 </Layout>
//               ) : (
//                 <Component />
//               )}
//             </ProtectedRoute>
//           )
//         };
//       })
//     ];
//   }

//   export { getRoutes };
