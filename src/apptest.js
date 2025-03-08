// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DefaultLayout } from './components/Layout';
import { publicRoutes, privateRoutes } from './routes';
import PrivateRoute from './components/PrivateRoute';

const AppContent = () =>  {
  const { isAuthenticated, isLoading } = useAuth();

  const renderRoutes = (routes, isPrivate = false) => {
    return routes.map((route, index) => {
      const Layout = route.layout || DefaultLayout;
      const Page = route.component;
      
      const element = isPrivate ? (
        <PrivateRoute>
          <Layout>
            <Page />
          </Layout>
        </PrivateRoute>
      ) : (
        <Layout>
          <Page />
        </Layout>
      );

      return <Route key={index} path={route.path} element={element} />;
    });
  };

  if (isLoading) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {renderRoutes(publicRoutes)}
          {renderRoutes(privateRoutes, true)}
          <Route path="*" element={
            isAuthenticated ? 
              <Navigate to="/home" replace /> : 
              <Navigate to="/login" replace />
          } />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
